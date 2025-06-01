import { api, ApiErrorPayload } from "@/lib/api";
import { RegisterFormData } from "./actions";
import ApiError from "@/errors/api-error";

interface RegisterApiReponse {
    id: number;
    name: string;
    email: string;
    cpf: string;
    birth_date: string;
    phone?: string;
    created_at: string;
}

export async function createUser(user: RegisterFormData): Promise<RegisterApiReponse | ApiErrorPayload> {
    const res = await api("users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        cache: "no-store",
    });

    if (!res.ok) {
        const errorData: ApiErrorPayload = await res.json();
        throw new ApiError(errorData.message);
    }

    return await res.json();
}
