// Gebruik client-side rendering
"use client";
// Importeer de motion component van framer-motion voor animaties
import { motion } from "framer-motion";

// Definieer de props voor SectionHeading component
type SectionHeadingProps = { children: React.ReactNode };

// Component voor sectiekoppen met animatie
const SectionHeading = ({ children }: SectionHeadingProps) => {
    return (
        // Container voor de kop, gecentreerd met flexbox
        <div className="text-md flex flex-col items-center justify-center">
            {/* Geanimeerde kop met framer-motion */}
            <motion.h2
                className="text-2xl font-bold uppercase sm:text-3xl" // Stijlen voor de kop
                initial={{ y: 100, opacity: 0 }} // Beginpositie van de animatie
                animate={{ y: 0, opacity: 1 }} // Eindpositie van de animatie
                transition={{ type: "spring", delay: 0.2, duration: 0.25 }} // Animatie-eigenschappen
            >
                {children} {/* Inhoud van de kop */}
            </motion.h2>
        </div>
    );
};

// Exporteer de SectionHeading component
export default SectionHeading;