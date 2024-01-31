import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tria",
    description: "Tria Login Page",
    openGraph: {
        type: "website",
        title: "Tria",
        description: "Tria Login Page",
        url: "",
        images: [
            {
                url: "https://tria-demo.vercel.app/api/og-image",
                width: 1200,
                height: 800,
                alt: "Tria Wallet",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
