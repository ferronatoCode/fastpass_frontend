"use client";

import { useAuth } from "@/contexts/authentication-context";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { confirmTicket } from "../business/api-request";

export const TicketConfirmation = () => {
    const searchParams = useSearchParams();
    const { user } = useAuth();

    useEffect(() => {
        if (user.role === "SUPPLIER")
            confirmTicket(searchParams.get("hash") as string).finally(() => redirect("/dashboard"));

        redirect("/dashboard");
    }, [user, searchParams]);

    return (
        <div className="flex min-h-svh w-full mt-8 md:mt-16 justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-6">
                    <div className="mt-16 mb-12 flex flex-col items-center">
                        <div className="flex items-center mb-4">
                            <span className="ml-2 font-bold text-3xl text-blue-600">FastPass</span>
                        </div>
                        <p className="text-gray-500 text-center">Confirmado</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
