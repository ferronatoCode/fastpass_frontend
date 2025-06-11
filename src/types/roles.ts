export type UserRole = "COMMON" | "ADMIN" | "SUPPLIER";

export const userRole = (role: UserRole) => {
    const rolesTranslaion = {
        COMMON: "Usuário Comum",
        ADMIN: "Administrador",
        SUPPLIER: "Fornecedor",
    };

    return rolesTranslaion[role] || "Desconhecido";
};
