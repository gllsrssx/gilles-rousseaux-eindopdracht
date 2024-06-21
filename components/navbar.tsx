"use client"; // Gebruik client-side rendering

import { useActiveSection } from "@/app/context/active-section-context"; // Importeer de hook voor het beheren van de actieve sectie
import { links } from "@/lib/data"; // Importeer de navigatielinks
import clsx from "clsx"; // Importeer clsx voor conditionele klassen
import { motion, useMotionValueEvent, useScroll } from "framer-motion"; // Importeer framer-motion voor animaties en scroll events
import Link from "next/link"; // Importeer Link voor navigatie zonder de pagina te herladen
import { useState } from "react"; // Importeer useState hook voor state management
import ThemeToggle from "./theme-toggle"; // Importeer de ThemeToggle component

const Navigation = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSection(); // Gebruik de context voor de actieve sectie
    const [isOnTop, setIsOnTop] = useState(true); // State om bij te houden of de navigatie bovenaan de pagina is
    const { scrollY } = useScroll(); // Gebruik de scrollY waarde van useScroll voor scroll positie
    useMotionValueEvent(scrollY, "change", (latest) => { // Luister naar scroll veranderingen
        if (latest > 150) { // Als de gebruiker meer dan 150px heeft gescrolld
            setIsOnTop(false); // Update de isOnTop state naar false
        } else {
            setIsOnTop(true); // Anders, zet het terug naar true
        }
    });

    return (
        <nav className="flex w-screen flex-row justify-center"> {/* Navigatie container */}
            <div className="z-100 fixed z-[999] flex w-screen flex-wrap items-center justify-center rounded-md border bg-amber-200 bg-opacity-95 bg-clip-padding px-4 py-1 text-lg opacity-95 shadow-md shadow-gray-300 backdrop-blur-lg backdrop-filter dark:border-gray-600 dark:bg-gray-800 dark:shadow-none sm:mt-6 sm:w-fit sm:border-amber-300 sm:bg-opacity-80 sm:py-2 sm:shadow-lg"> {/* Stijlen voor de navigatiebalk */}
                <motion.span
                    className="mr-4 sm:hidden"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <ThemeToggle /> {/* Thema wissel knop */}
                </motion.span>
                {links.map((link) => { // Map over de links voor navigatie items
                    return (
                        <motion.li
                            key={link.name} // Unieke sleutel voor elk item
                            className="relative flex items-center justify-center"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                href={link.hash} // Link naar sectie
                                data-text={link.name} // Data attribuut voor styling
                                className={clsx(
                                    "my_navbar text-zinc-9500 data-text-title mx-2 select-none py-1 text-gray-700 opacity-100 transition-all hover:font-semibold hover:text-gray-950 dark:text-gray-50", // Basis stijlen
                                    {
                                        "font-semibold text-gray-950": // Conditionele stijlen voor actieve sectie
                                            activeSection === link.name,
                                    }
                                )}
                                onClick={() => { // Klik event handler
                                    setActiveSection(link.name); // Update de actieve sectie
                                    const time = Date.now(); // Huidige tijd
                                    setTimeOfLastClick(time); // Update de tijd van de laatste klik
                                }}
                            >
                                {link.name} {/* Toon de naam van de link */}

                                {link.name === activeSection && ( // Als de link de actieve sectie is
                                    <motion.div
                                        layoutId="pill" // Unieke ID voor animatie
                                        transition={{ // Animatie instellingen
                                            type: "spring",
                                            stiffness: 380,
                                            duration: 1,
                                            damping: 30,
                                        }}
                                        className="absolute inset-0 -z-10 rounded-lg border border-gray-600 bg-amber-100 dark:bg-gray-900 dark:text-yellow-200" // Stijlen voor de actieve link indicator
                                    ></motion.div>
                                )}
                            </Link>
                        </motion.li>
                    );
                })}
                <motion.span
                    className="hidden sm:flex" // Alleen zichtbaar op grotere schermen
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <ThemeToggle /> {/* Thema wissel knop voor grotere schermen */}
                </motion.span>
            </div>
        </nav>
    );
};

export default Navigation; // Exporteer de Navigation component