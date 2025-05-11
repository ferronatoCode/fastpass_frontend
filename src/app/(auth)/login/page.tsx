import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "./login-form";
import { Toaster } from "sonner";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm">
                    <div className={"flex flex-col gap-6"}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Login</CardTitle>
                                <CardDescription>Insira seu email e senha para entrar na plataforma</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <LoginForm />
                                <div className="mt-4 text-center text-sm">
                                    Não tem uma conta?{" "}
                                    <Link href="/register" className="underline underline-offset-4">
                                        Cadastre-se
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    );
}
