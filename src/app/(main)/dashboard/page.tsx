"use server";

import { getProducts } from "../business/api-requests";
import Products from "./products";

export default async function Dashboard() {
    const products = await getProducts();
    return (
        <>
            <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
                <Products products={products} />
            </main>
        </>
    );
}
