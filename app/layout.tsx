import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import Footer from "@/components/footer";
import Navigation from "@/components/navbar";
import { MetadataValues } from "@/lib/data";
import { Analytics } from "@vercel/analytics/react";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";

// Laad het 'Inter' lettertype met de Latijnse tekenset.
const inter = Inter({ subsets: ["latin"] });

// Definieer metadata voor de pagina met waarden uit MetadataValues en andere specifieke informatie.
export const metadata: Metadata = {
    title: MetadataValues.Title, // Titel van de pagina.
    description: MetadataValues.Description, // Beschrijving van de pagina.
    applicationName: "Gilles Rousseaux Portfolio", // Naam van de applicatie.
    authors: [{ url: "", name: "Gilles Rousseaux" }], // Auteur(s) van de pagina.
    generator: "Next.js", // Het systeem dat gebruikt is om de pagina te genereren.
    keywords: [
        "Gilles Rousseaux", // Sleutelwoorden voor zoekmachines.
        "Portfolio",
        "Web Developer",
        "Full Stack Developer",
        "Software Engineer",
        "Frontend Developer",
        "Backend Developer",
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "GraphQL",
        "Apollo Client",
        "CV",
        "Resume",
        "Contact",
        "Curriculum Vitae",
        "Projects",
        "Skills",
        "GitHub",
        "Gilles",
        "Rousseaux",
        "gllsrssx",
        "gllsrssx.be",
        "gllsrssx.com",
        "gllsrssx.dev",
        "gllsrssx.eu",
        "gllsrssx.nl",
        "gllsrssx.net",
        "glls",
        "rssx",
        "glls-rssx",
        "R. Gilles",
        "R. G.",
        "R.G.",
        "RG",
        "RGilles",
        "GillesR",
        "GillesRousseaux",
        "Gilles Rousseaux Portfolio",
        "Gilles Rousseaux CV",
        "Gilles Rousseaux Resume",
        "Gilles Rousseaux Contact",
        "RousseauxGilles",
        "G.Rousseaux",
        "G.R.",
        "GR",
        "GRousseaux",
        "GillesRousseaux.be",
        "GillesRousseaux.com",
        "GillesRousseaux.dev",
        "GillesRousseaux.eu",
        "GillesRousseaux.nl",
        "GillesRousseaux.net",
        "RousseauxGilles.be",
        "RousseauxGilles.com",
        "RousseauxGilles.dev",
        "RousseauxGilles.eu",
        "RousseauxGilles.nl",
        "RousseauxGilles.net",
        "Gilles-Rousseaux",
        "Rousseaux-Gilles",
        "Gilles-R",
        "Rousseaux-G",
        "G-Rousseaux",
        "R-Gilles",
        "G-R",
        "R-G",
    ],
    robots: { // Instructies voor zoekmachines.
        googleBot: {
            index: true, // Pagina mag geïndexeerd worden.
            follow: true, // Volg links op deze pagina.
            // Andere specifieke instructies voor de Googlebot.
        },
    },
    openGraph: { // Open Graph metadata voor sociale media.
        type: "website",
        title: "R. Gilles",
        description: MetadataValues.Description,
        siteName: MetadataValues.Title,
        locale: "en_US",
        alternateLocale: "nl_BE",
        images: ["https://i.imgur.com/EKlCRYN.png"], // Afbeeldingen voor sociale media.
        url: "https://www.gllsrssx.be", // URL van de website.
        countryName: "Belgium", // Land van de website.
    },
};

// Definieer de hoofdlayout component die de structuur van de pagina bepaalt.
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
