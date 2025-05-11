"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { createUser } from "./business/api-requests";
import { toast } from "sonner";
import { ApiError } from "@/lib/api";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";

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

export type UserFormSchema = z.infer<typeof formSchema>;

export function RegisterForm() {
    const form = useForm<UserFormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            cpf: "",
            birth_date: "",
            phone: "",
            password: "",
        },
    });

    async function onSubmit(data: UserFormSchema) {
        try {
            await createUser(data);
            form.reset();
            toast.success("Usuário criado com sucesso!", {
                action: {
                    label: "Voltar",
                    onClick: () => redirect("/login"),
                },
            });
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                const apiError = error as ApiError;
                toast.error(apiError?.response?.data?.message || "Erro inesperado. Tente novamente mais tarde.");
            } else {
                toast.error("Erro inesperado. Tente novamente mais tarde.");
            }
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome completo</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="nome exemplo" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid gap-2">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="test@test.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>{" "}
                    <div className="grid gap-2">
                        <FormField
                            control={form.control}
                            name="cpf"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>CPF</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="000.000.000-00" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>{" "}
                    <div className="grid gap-2">
                        <FormField
                            control={form.control}
                            name="birth_date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Data de Nascimento</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>{" "}
                    <div className="grid gap-2">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Telefone</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder="(00) 00000-0000" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid gap-2">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Senha</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="********" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Salvar
                    </Button>
                </div>
            </form>
        </Form>
    );
}
