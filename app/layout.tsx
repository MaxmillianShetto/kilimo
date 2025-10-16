import "@/styles/globals";
import { Footer } from "@/components/layout/footer";

export const metadata = 
{
    title: "Kilimo SaaS",
    description: "Multitenant farm management & analytics",
};


export default function RootLayout({ children }: { children: React.ReactNode })
{
    return (
        <html lang="en>
            <body className="min-h-screen flex flec-col">
                <main className="flex-1"> {children} </main>
                <Footer />
            </body>
        </html>
    );
}
