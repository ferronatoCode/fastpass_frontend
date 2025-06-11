"use server";

import { Badge } from "@/components/ui/badge";
import { AuthProvider, User } from "@/contexts/authentication-context";
import { getUser } from "./business/api-requests";

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
                <header className="w-full border-b border-gray-200 bg-white px-4 py-4 shadow-sm sticky top-0 z-50">
                    <div className="max-w-4xl mx-auto flex justify-between items-center">
                        <h1 className="text-xl font-bold text-blue-600">⚡ FastPass</h1>
                        <Badge className="bg-blue-600 text-white px-3 py-1 text-sm rounded-sm">
                            {user.balance} tickets
                        </Badge>
                    </div>
                </header>

                {children}

                {/* Bottom Navigation */}
                <div className="fixed bottom-0 w-full h-16 bg-white border-t flex items-center justify-center z-50">
                    <div className="max-w-[1200px] w-full flex items-center justify-between px-8">
                        <div className="flex items-center gap-8 py-4 md:py-0 mr-8">
                            <button className="flex items-center gap-2 text-blue-600 cursor-pointer flex md:flex-row xs:flex-col">
                                <span className="text-sm md:text-base">Inicio</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors cursor-pointer flex md:flex-row flex-col">
                                <span className="text-sm md:text-base">Meus Tickets</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-8 py-4 md:py-0">
                            <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors cursor-pointer flex md:flex-row flex-col">
                                <span className="text-sm md:text-base">Recarga</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors cursor-pointer flex md:flex-row flex-col">
                                <span className="text-sm md:text-base">Perfil</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthProvider>
    );
}
