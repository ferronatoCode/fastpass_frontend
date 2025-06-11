"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTicketAlt, faUser } from "@fortawesome/free-solid-svg-icons";

const navItems = [
    { href: "/dashboard", icon: faHome, label: "Inicio" },
    { href: "/tickets", icon: faTicketAlt, label: "Meus Tickets" },
    { href: "/profile", icon: faUser, label: "Perfil" },
];

export default function FooterNav() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-0 w-full h-16 bg-white border-t flex items-center justify-center z-50">
            <div className="max-w-[1200px] w-full flex items-center justify-between px-8">
                {navItems.map(({ href, icon, label }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`flex items-center gap-2 ${
                                isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
                            } transition-colors cursor-pointer flex md:flex-row flex-col`}>
                            <FontAwesomeIcon icon={icon} />
                            <span className="text-sm md:text-base">{label}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
