import { api } from "@/lib/api";
import { UserFormSchema } from "../register-form";

export async function createUser(user: UserFormSchema) {
    const res = await api.post("/users", user);

    return res.data;
}
