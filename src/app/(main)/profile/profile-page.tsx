"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AuthContextType, useAuth } from "@/contexts/authentication-context";
import { userRole } from "@/types/roles";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ProfilePage() {
    const { user }: AuthContextType = useAuth();

    return (
        <div className="pt-20 pb-20 px-4 overflow-y-auto flex flex-col items-center">
            <Card className="w-full md:w-sm p-6 flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={"user_placeholder.png"} alt={user.name} />
                    <AvatarFallback className="bg-blue-100 text-blue-600 text-xl">{user.name}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-500 text-sm mb-3">{user.email}</p>
                <Badge className="bg-blue-50 text-blue-600 mb-4">{userRole(user.role)}</Badge>
            </Card>

            <Card className="w-full md:w-sm p-6 mt-6">
                <div className="flex flex-col">
                    <p className="text-gray-500 text-sm">
                        {" "}
                        <FontAwesomeIcon icon={faWallet} /> Saldo Atual
                    </p>
                    <h3 className="text-3xl font-semibold mb-4">{user.balance} Moedas</h3>

                    <div className="flex gap-4 mb-6">
                        <Button className="flex-1 !rounded-button bg-blue-600">
                            <i className="fas fa-plus mr-2"></i>
                            Recarga
                        </Button>
                    </div>

                    <Separator className="mb-4" />

                    <div className="flex items-center justify-between"></div>
                </div>
            </Card>
        </div>
    );
}
