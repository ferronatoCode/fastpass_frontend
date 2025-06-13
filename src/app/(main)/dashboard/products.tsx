"use client";

import { Button } from "@/components/ui/button";
import { Product } from "../business/api-requests";
import { useState } from "react";
import { Activity, BookText, Bus, Film, Store, UtensilsCrossed } from "lucide-react";
import { Card } from "@/components/ui/card";
import RegularTickets from "./regular-tickets";

export default function Products({ products }: { products: Product[] }) {
    const [selected, setSelected] = useState<string>("FOOD");

    const categories = [
        { name: "FOOD", label: "Alimentação", icon: UtensilsCrossed },
        { name: "TRANSPORT", label: "Transporte", icon: Bus },
        { name: "LUNCH", label: "Cantina", icon: Store },
        { name: "ENTRETAINMENT", label: "Entretenimento", icon: Film },
        { name: "LIBRARY", label: "Biblioteca", icon: BookText },
        { name: "OTHER", label: "Outros", icon: Activity },
    ];

    return (
        <>
            {/* CATEGORIES */}
            <Card className="p-4 border border-gray-200 shadow-sm">
                <h2 className="text-md font-semibold mb-3">Categorias</h2>
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <Button
                                onClick={() => setSelected(cat.name)}
                                key={cat.label}
                                variant="outline"
                                className={`text-sm flex items-center gap-2 px-4 py-2 rounded-sm ${
                                    selected === cat.name
                                        ? "bg-blue-600 text-white"
                                        : "bg-[#EFF6FF] text-blue-700 border border-transparent"
                                }`}>
                                <Icon className="w-4 h-4" />
                                {cat.label}
                            </Button>
                        );
                    })}
                </div>
            </Card>

            <RegularTickets categorySelected={selected} products={products} />
        </>
    );
}
