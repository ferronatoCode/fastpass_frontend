"use server";

import { AuthProvider, User } from "@/contexts/authentication-context";
import { getUser } from "./business/api-requests";
import { Header } from "@/components/header-nav";
import FooterNav from "@/components/footer-nav";

export default async function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user: User = await getUser();

    return (
        <AuthProvider user={user}>
            <div className="min-h-screen bg-white text-black">
                {/* NAVBAR */}
                <Header balance={user.balance} />

                {children}

                {/* Bottom Navigation */}
                <FooterNav />
            </div>
        </AuthProvider>
    );
}
