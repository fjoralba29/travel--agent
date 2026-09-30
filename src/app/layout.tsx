import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site-config";

const fredoka = Fredoka({
    subsets: ["latin"],
    variable: "--font-fredoka",
    display: "swap",
    weight: ["500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
    description: siteConfig.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang='de'
            className={`${fredoka.variable} ${jakarta.variable} scroll-smooth scroll-pt-28`}
            data-scroll-behavior='smooth'
        >
            <body className='flex min-h-screen flex-col antialiased'>
                <Header />
                <main className='flex-1'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
