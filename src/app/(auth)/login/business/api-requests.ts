import { api } from "@/lib/api";
import { LoginFormData } from "./actions";
import ApiError from "@/errors/api-error";

export interface AuthenticateApiResponse {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

export async function authenticateUser(user: LoginFormData): Promise<AuthenticateApiResponse> {
    const res = await api("auth", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        cache: "no-store",
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new ApiError(errorData.message || "Erro ao autenticar usuário");
    }

    return await res.json();
}
