// Gebruik de client-side rendering modus voor deze pagina.
"use client";
// Importeer verschillende componenten die op de pagina gebruikt worden.
import About from "@/components/about"; // Over mij sectie.
import Contact from "@/components/contact"; // Contact sectie.
import Education from "@/components/education"; // Opleiding sectie.
import Experience from "@/components/experience"; // Ervaring sectie.
import Intro from "@/components/intro"; // Introductie sectie.
import Projects from "@/components/projects"; // Projecten sectie.
import Skills from "@/components/skills"; // Vaardigheden sectie.
import Divider from "@/components/utils/divider"; // Een scheidingslijn component.
// Importeer AnimatePresence voor animatie-ondersteuning bij het wisselen van componenten.
import { AnimatePresence } from "framer-motion";
// Importeer SpeedInsights component voor het tonen van de snelheidsinzichten.
import { SpeedInsights } from "@vercel/speed-insights/next"

// Definieer de hoofdcomponent van de pagina.
export default function Home() {
    // De volgende regel is uitgecommentarieerd, maar zou de donkere modus activeren voor de hele pagina.
    // document.documentElement.classList.add("dark");
    return (
        // AnimatePresence wordt gebruikt om animaties toe te voegen bij het in- en uitfaden van componenten.
        <AnimatePresence>
            <main className=""> {/* Hoofdsectie van de pagina zonder specifieke stijlen. */}
                <Intro /> {/* Toon de introductie sectie. */}
                <Divider /> {/* Toon een scheidingslijn. */}
                <About /> {/* Toon de 'Over mij' sectie. */}
                <Divider /> {/* Toon een scheidingslijn. */}
                <Experience /> {/* Toon de ervaring sectie. */}
                <Divider /> {/* Toon een scheidingslijn. */}
                <Education /> {/* Toon de opleiding sectie. */}
                <Divider /> {/* Toon een scheidingslijn. */}
                <Skills /> {/* Toon de vaardigheden sectie. */}
                <Divider /> {/* Toon een scheidingslijn. */}
                <Projects /> {/* Toon de projecten sectie. */}
                <Divider /> {/* Toon een scheidingslijn. */}
                <Contact /> {/* Toon de contact sectie. */}
                <SpeedInsights/>
            </main>
        </AnimatePresence>
    );
}