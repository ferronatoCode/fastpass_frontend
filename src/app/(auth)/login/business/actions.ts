"use server";

import { ActionResponse } from "@/types/action-response";
import { z } from "zod";
import { authenticateUser } from "./api-requests";
import { cookies } from "next/headers";
import ApiError from "@/errors/api-error";

const formSchema = z.object({
    email: z.string().email({
        message: "Email inválido.",
    }),
    password: z.string().min(6, {
        message: "Senha deve ter pelo menos 6 caracteres.",
    }),
});

export type LoginFormData = z.infer<typeof formSchema>;

export async function login(state: ActionResponse | null, data: FormData): Promise<ActionResponse> {
    try {
        const parsedData = Object.fromEntries(data.entries());
        formSchema.parse(parsedData);

        const { accessToken } = await authenticateUser(parsedData as LoginFormData);

        await createAccessTokenCookie(accessToken);

        return {
            success: true,
            message: "Login realizado com sucesso!",
        };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                message: "Erro no login. Verifique os campos e tente novamente.",
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

async function createAccessTokenCookie(token: string) {
    const cookieStore = await cookies();

    cookieStore.set("access_token", token, {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 hour
        sameSite: "lax",
        path: "/",
    });
}
