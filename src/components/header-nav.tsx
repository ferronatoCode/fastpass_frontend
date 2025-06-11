"use client";

import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "./ui/badge";

const navItems: Record<string, string> = {
    "/dashboard": "Inicio",
    "/profile": "Perfil",
    "/tickets": "Tickets",
};

export function Header({ balance }: { balance: number }) {
    const pathname = usePathname();
    const pathTitle = navItems[pathname] || "Inicio";

    return (
        <header className="w-full border-b border-gray-200 bg-white px-4 py-4 shadow-sm sticky top-0 z-50">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <Link href="/dashboard" className="text-blue-600 font-bold text-xl">
                    <FontAwesomeIcon icon={faBolt} /> FastPass
                </Link>

                <h2 className="text-base font-semibold text-gray-700">{pathTitle}</h2>

                <Link href="/profile">
                    <Badge className="bg-blue-600 text-white px-3 py-1 text-sm rounded-sm">Saldo: {balance}</Badge>
                </Link>
            </div>
        </header>
    );
}
