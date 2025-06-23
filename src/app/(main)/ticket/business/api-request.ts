import { api } from "@/lib/api";
import { cookies } from "next/headers";

export type TicketStatus = "WAITING_PAYMENT" | "PAID" | "CANCELED";

export interface TicketResponse {
    id: number;
    product_id: number;
    product_name: string;
    product_value: number;
    status: TicketStatus;
    confirmation_hash: string;
}

export async function getTicketConfirmation(productId: number): Promise<TicketResponse> {
    const cookie = await cookies();

    const response = await api(`tickets`, {
        method: "POST",
        body: JSON.stringify({ productId }),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.get("access_token")?.value || ""}`,
        },
        credentials: "include",
    });

    if (!response.ok) {
        console.log(await response.json());
        throw new Error("Failed to create ticket");
    }

    return response.json();
}
