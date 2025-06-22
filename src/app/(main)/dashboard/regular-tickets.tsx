"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Product } from "../business/api-requests";
import { useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface RegularTicketsProps {
    categorySelected: string;
    products: Product[];
}

export default function RegularTickets({ categorySelected, products }: RegularTicketsProps) {
    const filteredProducts = useMemo(
        () => products.filter((product) => product.category === categorySelected),
        [categorySelected, products],
    );

    const router = useRouter();

    return (
        <>
            {/* REGULAR TICKETS */}
            <Card className="p-4 border border-gray-200 shadow-sm">
                <h2 className="text-lg font-semibold mb-2">Frequentemente Comprados</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item, i) => (
                            <Card
                                key={i}
                                className="p-4 flex flex-col justify-between border border-gray-200 shadow-sm rounded-sm">
                                <div>
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                                <div className="mt-2 flex justify-between items-center">
                                    <span className="font-medium">Valor: {item.value}</span>
                                    <Button onClick={() => router.push("/dashboard/confirmacaoCompra")}
                                     className="bg-black text-white hover:bg-blue-700 text-sm rounded-sm"
                                    >Comprar ticket
                                    </Button>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <div className="text-center text-gray-500">
                            <p>Nenhum produto cadastrado nessa categoria.</p>
                        </div>
                    )}
                </div>
            </Card>

            <Separator className="my-6" />

            {/* POPULAR TICKETS */}
            <Card className="p-4 mb-6 border border-gray-200 shadow-sm">
                <h2 className="text-lg font-semibold mb-2">Produtos Populares</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredProducts.map((product, i) => (
                        <Card key={i} className="overflow-hidden shadow-md border border-gray-200 rounded-sm">
                            <div className="h-36 bg-gray-100">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(/img${i + 1}.jpg)` }}
                                />
                            </div>
                            <div className="p-4 space-y-1">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold">{product.name}</h3>
                                    <Badge className="bg-blue-600 text-white rounded-sm">Valor: {product.value}</Badge>
                                </div>
                                <p className="text-sm text-gray-500">{product.description}</p>
                                <Button onClick={() => router.push("/dashboard/confirmacaoCompra")}
                                        className="w-full mt-2 bg-black text-white hover:bg-blue-700 text-sm rounded-sm">
                                    Comprar ticket
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </Card>
        </>
    );
}
