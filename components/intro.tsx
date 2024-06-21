/* eslint-disable react/no-unescaped-entities */
"use client"; // Gebruik client-side rendering

import { useActiveSection } from "@/app/context/active-section-context"; // Importeer de hook voor actieve sectie context
import { motion } from "framer-motion"; // Importeer framer-motion voor animaties
import Image from "next/image"; // Importeer Image component van Next.js voor geoptimaliseerde afbeeldingen
import Link from "next/link"; // Importeer Link component van Next.js voor client-side navigatie
import { useRouter } from "next/navigation"; // Importeer useRouter hook van Next.js voor router functionaliteit
import { useEffect } from "react"; // Importeer useEffect hook van React
import { BsDownload, BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs"; // Importeer iconen van react-icons
import { useInView } from "react-intersection-observer"; // Importeer useInView hook voor het detecteren van elementen in viewport

const Intro = () => {
    const router = useRouter(); // Initialiseer de useRouter hook
    const { ref, inView } = useInView({ // Gebruik useInView hook om te detecteren wanneer het component in beeld is
        // threshold: 0.1,
        initialInView: true, // Begin met het element in beeld
        rootMargin: "-30% 0% -70% 0%", // Marges voor het activeren van inView
    });
    const { setActiveSection, timeOfLastClick } = useActiveSection(); // Gebruik de actieve sectie context

    useEffect(() => { // Effect om de actieve sectie bij te werken
        if (inView && Date.now() - timeOfLastClick > 1000) { // Als het element in beeld is en het meer dan een seconde geleden is sinds de laatste klik
            setActiveSection("Home"); // Stel de actieve sectie in op "Home"
        }
    }, [inView, setActiveSection, timeOfLastClick]); // Afhankelijkheden voor het effect

    return (
        <section id="home" className="scroll-m-28"> {/* Sectie voor de introductie */}
            <motion.div
                className="flex items-center justify-center" // Centreer het beeld
                initial={{ y: -25, opacity: 0 }} // Beginpositie voor de animatie
                animate={{ y: 0, opacity: 1 }} // Eindpositie voor de animatie
                transition={{ type: "spring", delay: 0, duration: 0.25 }} // Animatie instellingen
            >
                <Image
                    ref={ref} // Referentie voor useInView
                    className="mt-24 rounded-xl border-4 border-zinc-100 shadow-sm shadow-zinc-800 sm:mt-36" // Stijlen voor de afbeelding
                    src="https://i.imgur.com/cRbF7Pf.jpeg" // Afbeeldingsbron
                    width={200} // Breedte van de afbeelding
                    height={300} // Hoogte van de afbeelding
                    alt="head shot" // Alternatieve tekst voor de afbeelding
                ></Image>
            </motion.div>
            <div className="flex w-full justify-center"> {/* Container voor de tekst en knoppen */}
                <div className="max-w-xs text-center sm:max-w-2xl"> {/* Beperk de maximale breedte en centreer de inhoud */}
                    <motion.p
                        initial={{ y: 100, opacity: 0 }} // Beginpositie voor de animatie
                        animate={{ y: 0, opacity: 1 }} // Eindpositie voor de animatie
                        transition={{
                            type: "spring",
                            delay: 0.05,
                            duration: 0.1,
                        }} // Animatie instellingen
                        className="my-10 font-sans text-2xl sm:text-3xl" // Stijlen voor de paragraaf
                    >
                        I'm{" "}
                        <span className="font-bold dark:text-yellow-400">
                            Gilles
                        </span>
                        , a{" "}
                        <span className="font-bold dark:text-yellow-400">
                            Full Stack Developer{" "}
                        </span>{" "}
                        who is{" "}
                        <span className="italic dark:text-yellow-100">
                            passionate
                        </span>{" "}
                        about creating modern{" "}
                        <span className="italic dark:text-yellow-100">
                            user centered{" "}
                        </span>{" "}
                        web applications.
                    </motion.p>
                    <motion.div
                        className="flex flex-col items-center justify-center gap-3 sm:min-w-96 sm:flex-row sm:gap-4" // Stijlen voor de container van de knoppen
                        initial={{ y: 100, opacity: 0 }} // Beginpositie voor de animatie
                        animate={{ y: 0, opacity: 1 }} // Eindpositie voor de animatie
                        transition={{
                            type: "spring",
                            delay: 0.1,
                            duration: 0.1,
                        }} // Animatie instellingen
                    >
                        {/* Knoppen en links naar sociale media en CV download */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Intro; // Exporteer het Intro component