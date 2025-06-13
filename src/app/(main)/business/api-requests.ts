"use server";

import { api } from "@/lib/api";
import { User } from "@/contexts/authentication-context";
import ApiError from "@/errors/api-error";
import { cookies } from "next/headers";

export async function getUser(): Promise<User> {
    const cookieStore = await cookies();

    const res = await api("users/me", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${cookieStore.get("access_token")?.value || ""}`,
        },
        cache: "no-store",
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new ApiError(errorData.message || "Erro ao buscar usuário");
    }

    return await res.json();
}

export interface Product {
    id: string;
    name: string;
    description: string;
    value: number;
    category: string;
}

export async function getProducts(): Promise<Product[]> {
    const cookieStore = await cookies();

    const res = await api("products", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${cookieStore.get("access_token")?.value || ""}`,
        },
        next: {
            revalidate: 30,
        },
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new ApiError(errorData.message || "Erro ao buscar produtos");
    }

    return await res.json();
}
