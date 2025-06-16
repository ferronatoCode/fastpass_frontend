"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Toaster } from "sonner";
import { useRouter } from "next/navigation";


export default function QRCodePage() {
    const router = useRouter();

    const handleCancel = () => {
        router.push("/qrCode"); 
    };

    return (
        <>
            <div className="flex min-h-svh w-full mt-8 md:mt-16 justify-center p-6 md:p-10">
                <div className="w-full max-w-sm">
                    <div className="flex flex-col gap-6">
                        <div className="mt-16 mb-12 flex flex-col items-center">
                            <div className="flex items-center mb-4">
                                <span className="ml-2 font-bold text-3xl text-blue-600">FastPass</span>
                            </div>
                            <p className="text-gray-500 text-center">Apresente o QR Code abaixo para pagamento</p>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl text-center">Confirmação</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4 items-center">
                                
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=FastPass123"
                                    alt="QR Code"
                                    width={150}
                                    height={150}
                                    className="mx-auto"
                                />

                                <div className="text-center">
                                    <p className="text-lg font-semibold">Produto: teste</p>
                                    <p className="text-sm text-gray-600 mt-1">Valor: R$ 12,50</p>
                                </div>

                                <Button
                                    variant="destructive"
                                    className="w-full mt-4"
                                    onClick={handleCancel}
                                >
                                    Cancelar
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <Toaster />
        </>
    );
}
