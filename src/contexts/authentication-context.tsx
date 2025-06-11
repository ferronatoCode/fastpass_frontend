"use client";

import { UserRole } from "@/types/roles";
import { createContext, useContext } from "react";

type UserType = "COMMON" | "SUPPLIER" | "ADMIN";
export interface User {
    id: string;
    name: string;
    email: string;
    balance: number;
    role: UserRole;
    user_type: UserType;
}

export interface AuthContextType {
    user: User;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children, user }: { children: React.ReactNode; user: User }) => {
    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used inside AuthProvider");
    return context;
};
