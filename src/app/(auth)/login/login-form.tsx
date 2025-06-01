"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { login } from "./business/actions";
import { redirect } from "next/navigation";

export function LoginForm() {
    const [state, action, pending] = useActionState(login, {
        success: false,
        message: "",
        errors: {},
    });

    useEffect(() => {
        if (state.success) {
            toast.success(state.message || "Login realizado com sucesso!");
            redirect("/dashboard");
        } else if (state.errors) {
            toast.error(state.message || "Erro ao fazer login. Verifique os campos e tente novamente.");
        }
    }, [state]);

    return (
        <form action={action}>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" placeholder="m@examplo.com" name="email" />
                    {state.errors?.email &&
                        state.errors.email.map((error, index) => (
                            <p key={index} className="text-red-500 text-sm">
                                {error}
                            </p>
                        ))}
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input type="password" placeholder="Sua senha" name="password" />
                    {state.errors?.password &&
                        state.errors.password.map((error, index) => (
                            <p key={index} className="text-red-500 text-sm">
                                {error}
                            </p>
                        ))}
                </div>
                <Button type="submit" className="w-full" disabled={pending}>
                    {pending ? "Entrando..." : "Entrar"}
                </Button>
            </div>
        </form>
    );
}
