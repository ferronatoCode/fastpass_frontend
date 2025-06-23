import { api } from "@/lib/api";

export async function confirmTicket(confirmationHash: string): Promise<boolean> {
    const authorization = document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith("access_token="))
        ?.split("=")[1];

    const response = await api(`tickets/confirm?hash=${confirmationHash}`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authorization || ""}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to confirm ticket");
    }

    console.log(await response.json());

    return true;
}
