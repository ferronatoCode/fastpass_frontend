"use server";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTicketConfirmation } from "../business/api-request";
import { CancelButton } from "./cancel-button";
import QRCode from "qrcode";
import Image from "next/image";
import ConfirmationScreen from "./confirmation-screen";

export default async function TicketInfo({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const ticket = await getTicketConfirmation(parseInt(id));
    const qrcode = await QRCode.toDataURL(
        `${process.env.NEXT_PUBLIC_FRONT_URL}/ticket/confirm?hash=${ticket.confirmation_hash}`,
    );

    return (
        <>
            <ConfirmationScreen ticket_id={ticket.id} />
            <div className="flex h-full w-full justify-center p-6">
                <div className="w-full max-w-sm">
                    <div className="flex flex-col gap-6">
                        <div className="mb-4 flex flex-col items-center">
                            <div className="flex items-center mb-4">
                                <span className="ml-2 font-bold text-3xl text-blue-600">FastPass</span>
                            </div>
                            <p className="text-gray-500 text-center">Apresente o QR Code abaixo para pagamento</p>
                        </div>

                        <Card className="mb-12">
                            <CardHeader>
                                <CardTitle className="text-2xl text-center">Confirmação</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4 items-center">
                                <Image src={qrcode} alt="QR Code" width={150} height={150} />

                                <div className="text-center">
                                    <p className="text-lg font-semibold">Produto: {ticket.product_name} </p>
                                    <p className="text-sm text-gray-600 mt-1">Valor: R$ {ticket.product_value}</p>
                                </div>

                                <CancelButton />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
