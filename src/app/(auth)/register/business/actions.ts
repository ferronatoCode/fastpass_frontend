"use server";

import { ActionResponse } from "@/types/action-response";
import { z } from "zod";
import { createUser } from "./api-requests";
import ApiError from "@/errors/api-error";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Nome completo é obrigatório.",
    }),
    email: z.string().email({
        message: "Email inválido.",
    }),
    cpf: z.string().min(1, {
        message: "CPF é obrigatório.",
    }),
    birth_date: z.string().min(1, {
        message: "Data de nascimento é obrigatória.",
    }),
    phone: z.string().optional(),
    password: z.string().min(6, {
        message: "Senha deve ter pelo menos 6 caracteres.",
    }),
});

export type RegisterFormData = z.infer<typeof formSchema>;

export async function singup(state: ActionResponse | null, data: FormData): Promise<ActionResponse> {
    try {
        const parsedData = Object.fromEntries(data.entries());
        formSchema.parse(parsedData);

        await createUser(parsedData as RegisterFormData);

        return {
            success: true,
            message: "Registro realizado com sucesso!",
        };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                message: "Erro ao registrar. Verifique os campos e tente novamente.",
                errors: error.flatten().fieldErrors,
            };
        } else if (error instanceof ApiError) {
            return {
                success: false,
                message: error.message,
                errors: {
                    form: [error.message],
                },
            };
        } else {
            console.log(error);
            return {
                success: false,
                message: "Erro inesperado. Tente novamente mais tarde.",
                errors: {
                    form: ["Erro inesperado. Tente novamente mais tarde."],
                },
            };
        }
    }
}
