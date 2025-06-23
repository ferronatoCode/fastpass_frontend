import { api } from "@/lib/api";

export async function confirmTicket(confirmationHash: string): Promise<boolean> {
    const response = await api(`tickets/confirm?hash=${confirmationHash}`, {
        method: "GET",
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error("Failed to confirm ticket");
    }

    console.log(await response.json());

    return true;
}
