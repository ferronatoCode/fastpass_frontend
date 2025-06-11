"use client";

import { createContext, useContext } from "react";

type UserType = "COMMON" | "SUPPLIER" | "ADMIN";
export interface User {
    id: string;
    name: string;
    email: string;
    balance: number;
    user_type: UserType;
}

interface AuthContextType {
    user: User | null;
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
