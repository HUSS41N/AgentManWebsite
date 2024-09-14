import type { Metadata } from "next";
import Head from "next/head";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "@/components/ui/Aurora-background";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "AgentsMan",
    description:
        "Build tailored AI-driven solutions by integrating with leading LLM vendors. Our framework enables the creation of powerful agents and collaborative workflows to streamline your projects.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
