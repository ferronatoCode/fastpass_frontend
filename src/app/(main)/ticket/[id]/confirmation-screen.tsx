"use client";

import { useEffect, useState } from "react";
import socket from "@/lib/socket";
import { redirect } from "next/navigation";
import { createPortal } from "react-dom";

export default function ConfirmationScreen({ ticket_id }: { ticket_id?: number }) {
    const [paid, setPaid] = useState(false);

    useEffect(() => {
        socket.on(`payment_confirmed_${ticket_id}`, () => {
            setPaid(true);
            console.log("Pagamento confirmado para o ticket:", ticket_id);

            setTimeout(() => {
                redirect("/dashboard");
            }, 8000);
        });
    }, []); // eslint-disable-line

    return paid ? (
        createPortal(
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-green-500">
                <div className="flex flex-col items-center">
                    <div className="animate-ping absolute h-32 w-32 rounded-full bg-white opacity-20"></div>
                    <h1 className="mt-8 text-3xl font-bold text-white">Pagamento Confirmado</h1>
                    <p className="mt-2 text-white text-lg">Aguarde, você será redirecionado...</p>
                </div>
            </div>,
            document.body,
        )
    ) : (
        <></>
    );
}
