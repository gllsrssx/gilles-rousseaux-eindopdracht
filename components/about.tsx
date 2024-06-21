/* eslint-disable react/no-unescaped-entities */

// Importeer hooks en componenten
import { useActiveSection } from "@/app/context/active-section-context"; // Hook voor het beheren van de actieve sectie
import { motion } from "framer-motion"; // Importeer motion voor animaties
import { useEffect } from "react"; // Importeer useEffect hook
import { useInView } from "react-intersection-observer"; // Hook om te detecteren of een element in beeld is
import SectionHeading from "./utils/section-heading"; // Component voor sectiekoppen

// Component voor de "Over mij" sectie
const About = () => {
    // Gebruik useInView hook om te detecteren wanneer de sectie in beeld komt
    const { ref, inView } = useInView({
        rootMargin: "-50% 0% -50% 0%", // Marges voor het detecteren van in beeld komen
    });
    // Haal setActiveSection en timeOfLastClick op uit de context
    const { setActiveSection, timeOfLastClick } = useActiveSection();

    // Effect dat de actieve sectie bijwerkt wanneer deze in beeld komt
    useEffect(() => {
        return () => {
            if (inView && Date.now() - timeOfLastClick > 1000) { // Als de sectie in beeld is en het meer dan 1 seconde geleden is dat er geklikt is
                setActiveSection("About"); // Update de actieve sectie naar "Over mij"
            }
        };
    }, [inView, setActiveSection, timeOfLastClick]); // Afhankelijkheden van het effect

    // Render de "Over mij" sectie
    return (
        <section
            id="about" // ID voor ankerlink
            className="text-md mx-6 flex scroll-m-28 flex-col items-center justify-center" // Stijlen voor de sectie
        >
            <div ref={ref} className="mb-4"> 
                {/* // Referentie voor inView detectie */}
                <SectionHeading>ABOUT ME</SectionHeading> 
                {/* // Sectiekop */}
            </div>

            {/* // Paragraaf met introductie */}
            <motion.p
                className="text-md mt-2 max-w-md text-center sm:mt-4 sm:max-w-3xl" // Stijlen voor de paragraaf
                initial={{ y: 100, opacity: 0 }} // Beginpositie voor animatie
                animate={{ y: 0, opacity: 1 }} // Eindpositie voor animatie
                transition={{ type: "spring", delay: 0.2, duration: 0.2 }} // Animatie-eigenschappen
            >
                My name is Gilles and I'm a full stack developer who is
                passionate about creating responsive user centered web
                applications. My strong work ethic, willingness to rising up to
                challenges, and eagerness to learn are some of my greatest
                assets.
            </motion.p>
            {/* // Tweede paragraaf met extra informatie */}
            <motion.p
                className="text-md mt-2 max-w-md text-center sm:mt-4 sm:max-w-3xl" // Stijlen voor de paragraaf
                initial={{ y: 100, opacity: 0 }} // Beginpositie voor animatie
                animate={{ y: 0, opacity: 1 }} // Eindpositie voor animatie
                transition={{ type: "spring", delay: 0.25, duration: 0.25 }} // Animatie-eigenschappen
            >
                Aside from programming, I enjoy consuming content and
                following financial markets. Have a look around to learn about
                me and see what projects I have been working on!
            </motion.p>
        </section>
    );
};

// Exporteer de About component
export default About;