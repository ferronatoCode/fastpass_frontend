"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState, useEffect } from "react";
import { singup } from "./business/actions";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export function RegisterForm() {
    const [state, action, pending] = useActionState(singup, {
        success: false,
        message: "",
        errors: {},
    });

    useEffect(() => {
        if (state.success) {
            toast.success(state.message || "Registro realizado com sucesso!", {
                duration: 10000,
                action: {
                    label: "Continuar",
                    onClick: () => {
                        redirect("/login");
                    },
                },
            });
        } else if (state.errors) {
            toast.error(state.message || "Erro ao registrar. Verifique os campos e tente novamente.");
        }
    }, [state]);

    return (
        <form action={action}>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input type="text" placeholder="nome exemplo" name="name" />
                    {state.errors?.name &&
                        state.errors.name.map((error, index) => (
                            <p key={index} className="text-red-500 text-sm">
                                {error}
                            </p>
                        ))}
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" placeholder="test@test.com" name="email" />
                    {state.errors?.email &&
                        state.errors.email.map((error, index) => (
                            <p key={index} className="text-red-500 text-sm">
                                {error}
                            </p>
                        ))}
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input type="text" placeholder="000.000.000-00" name="cpf" />
                    {state.errors?.cpf &&
                        state.errors.cpf.map((error, index) => (
                            <p key={index} className="text-red-500 text-sm">
                                {error}
                            </p>
                        ))}
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="birth_date">Data de Nascimento</Label>
                    <Input type="date" name="birth_date" />
                    {state.errors?.birth_date &&
                        state.errors.birth_date.map((error, index) => (
                            <p key={index} className="text-red-500 text-sm">
                                {error}
                            </p>
                        ))}
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input type="tel" placeholder="(00) 00000-0000" name="phone" />
                    {state.errors?.phone &&
                        state.errors.phone.map((error, index) => (
                            <p key={index} className="text-red-500 text-sm">
                                {error}
                            </p>
                        ))}
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input type="password" placeholder="********" name="password" />
                    {state.errors?.password &&
                        state.errors.password.map((error, index) => (
                            <p key={index} className="text-red-500 text-sm">
                                {error}
                            </p>
                        ))}
                </div>
                <Button disabled={pending} type="submit" className="w-full">
                    {pending ? "Registrando..." : "Registrar"}
                </Button>
            </div>
        </form>
    );
}
