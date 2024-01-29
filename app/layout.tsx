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
                url: "https://lovewaifu.com/api/og-image",
                width: 800,
                height: 600,
                alt: "Love Waifu",
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
