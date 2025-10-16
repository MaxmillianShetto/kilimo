import Link from "next/link";

export default function Home()
{
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-2">Kilimo SaaS</h1>
            <p className="mb-4 text-gray-600">
                Track farm activities, accounting, market prices, and more.
            </p>
            <Link href="/dashboard" className="text-blue-600 underline">
                Go to Dashboard
            </Link>
        </div>
    );
}
