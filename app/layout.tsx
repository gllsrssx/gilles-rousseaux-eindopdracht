import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import Footer from "@/components/footer";
import Navigation from "@/components/navbar";
import { MetadataValues } from "@/lib/data";
import { Analytics } from "@vercel/analytics/react";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: MetadataValues.Title,
    description: MetadataValues.Description,
    applicationName: "Gilles Rousseaux Portfolio",
    authors: [{ url: "", name: "Gilles Rousseaux" }],
    generator: "Next.js",
    keywords: [
        "Gilles Rousseaux",
        "Portfolio",
        "Web Developer",
        "Full Stack Developer",
    ],
    robots: {
        googleBot: {
            index: true,
            follow: true,
            noarchive: false,
            nosnippet: false,
            noimageindex: false,
            notranslate: false,
            indexifembedded: true,
            nositelinkssearchbox: true,
        },
    },
    openGraph: {
        type: "website",
        determiner: "",
        title: "Gilles Rousseaux",
        description: MetadataValues.Description,
        siteName: MetadataValues.Title,
        locale: "en_US",
        alternateLocale: "en_GB",
        images: ["https://i.imgur.com/cRbF7Pf.jpeg"],
        url: "https://www.g.dev/",
        countryName: "Canada",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${inter.className} text-gray-00 background no-scrollbar dark:background-dark overflow-y-scroll transition-all dark:bg-gray-950 dark:bg-gradient-to-r dark:bg-auto dark:text-gray-50 dark:text-opacity-95`}
            >
                <ActiveSectionContextProvider>
                    <ThemeContextProvider>
                        <Navigation />
                        {children}
                        <Analytics />
                        <Footer />
                    </ThemeContextProvider>
                </ActiveSectionContextProvider>
            </body>
        </html>
    );
}
