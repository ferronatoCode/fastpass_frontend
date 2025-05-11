import { api } from "@/lib/api";
import { UserLoginFormSchema } from "../login-form";

export async function authenticateUser(user: UserLoginFormSchema) {
    const res = await api.post("/auth", user);

    return res.data;
}
