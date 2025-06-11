import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "./login-form";
import { Toaster } from "sonner";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
    return (
        <>
            <div className="flex min-h-svh w-full mt-8 md:mt-16 justify-center p-6 md:p-10">
                <div className="w-full max-w-sm">
                    <div className={"flex flex-col gap-6"}>
                        <div className="mt-16 mb-12 flex flex-col items-center">
                            <div className="flex items-center mb-4">
                                <FontAwesomeIcon icon={faBolt} className="text-blue-600 text-3xl" />
                                <span className="ml-2 font-bold text-3xl">FastPass</span>
                            </div>
                            <p className="text-gray-500 text-center">Seu acesso rápido para tickets</p>
                        </div>
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
