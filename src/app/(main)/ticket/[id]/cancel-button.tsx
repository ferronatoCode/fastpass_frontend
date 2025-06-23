"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export const CancelButton = () => {
    const handleCancel = () => {
        redirect("/dashboard");
    };

    return (
        <Button variant="destructive" className="w-full mt-4" onClick={handleCancel}>
            Cancelar
        </Button>
    );
};
