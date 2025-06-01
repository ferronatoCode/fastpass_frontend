"use server";

export default async function Dashboard() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p className="text-gray-600">Bem-vindo ao seu dashboard!</p>
        </div>
    );
}
