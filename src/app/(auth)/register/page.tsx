"use server";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RegisterForm } from "./register-form";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";

export default async function Page() {
    return (
        <>
            <div className="flex h-full w-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm">
                    <Card>
                        <CardHeader className="flex justify-between gap-2">
                            <CardTitle className="text-2xl">Criar Conta</CardTitle>
                            <Link href="/login" className="text-sm text-blue-500 hover:underline">
                                Voltar
                            </Link>
                        </CardHeader>
                        <CardContent>
                            <RegisterForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Toaster />
        </>
    );
}
