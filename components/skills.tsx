"use client"; // Gebruik client-side rendering
import { useActiveSection } from "@/app/context/active-section-context"; // Importeer de hook voor het beheren van de actieve sectie
import { skillsData, useInViewSettings } from "@/lib/data"; // Importeer vaardigheden data en instellingen voor het detecteren van elementen in de viewport
import Image from "next/image"; // Importeer Image component voor geoptimaliseerde afbeeldingen
import { useEffect } from "react"; // Importeer useEffect hook van React
import { useInView } from "react-intersection-observer"; // Importeer useInView hook voor het detecteren van elementen in de viewport
import Reveal from "./utils/reveal"; // Importeer Reveal component voor animaties bij het scrollen
import SectionHeading from "./utils/section-heading"; // Importeer SectionHeading component voor sectiekoppen

const Skills = () => {
    const { ref, inView } = useInView(useInViewSettings); // Gebruik useInView met vooraf gedefinieerde instellingen om te detecteren wanneer het component in beeld is
    const { setActiveSection, timeOfLastClick } = useActiveSection(); // Gebruik de context voor het beheren van de actieve sectie

    useEffect(() => { // Effect voor het bijwerken van de actieve sectie
        return () => { // Cleanup functie die wordt uitgevoerd bij het ontmantelen van het component
            if (inView && Date.now() - timeOfLastClick > 1000) { // Als het component in beeld is en het meer dan een seconde geleden is sinds de laatste klik
                setActiveSection("Skills"); // Stel de actieve sectie in op "Skills"
            }
        };
    }, [inView, setActiveSection, timeOfLastClick]); // Afhankelijkheden van het effect

    return (
        <section
            id="skills"
            className="flex w-screen scroll-m-28 flex-col items-center justify-center"
        > {/* Sectie voor vaardigheden */}
            <div ref={ref} className="mb-8"> {/* Referentie voor useInView en marge aan de onderkant */}
                <SectionHeading>MY Skills</SectionHeading> {/* Sectiekop */}
            </div>
            <div className="flex w-screen max-w-7xl flex-wrap justify-center gap-8"> {/* Container voor vaardigheden */}
                {skillsData.map((skill) => { 
                    // Map over de vaardigheden data
                    return (
                        <ul
                            className="flex flex-col items-center p-4"
                            key={skill.title} 
                            // Unieke sleutel voor elk item
                        >
                            <Reveal> 
                                {/* Animatie bij het scrollen */}
                                <h2 className="subheading">{skill.title}</h2> 
                                {/* Titel van de vaardigheid */}
                            </Reveal>
                            <div className="my-4 flex flex-wrap items-end justify-center"> {/* Container voor de afbeeldingen en namen van de vaardigheden */}
                                {skill.skills.map((s, index) => { // Map over de individuele vaardigheden
                                    return (
                                        // Omdat s soms undefined kan zijn
                                        s && (
                                            <Reveal key={s.name} index={index}> 
                                            {/* Animatie bij het scrollen met unieke sleutel en index */}
                                                <li className="flex flex-col items-center px-5 py-2"> {/* Container voor elke vaardigheid */}
                                                    <Image
                                                        className={
                                                            "mb-2 hidden sm:block " //+ (s.name === "Next.js" ? "dark:invert" : "")
                                                        }
                                                        src={s.svg} // Afbeeldingsbron
                                                        alt={s.name} // Alternatieve tekst
                                                        width={60} // Breedte
                                                        height={60} // Hoogte
                                                    ></Image>
                                                    <Image
                                                        className={
                                                            "sm:hidden " //+(s.name ==="Next.js"? "dark:invert" // Inverteer de kleur voor Next.js logo in donkere modus op kleinere schermen: "")
                                                        }
                                                        src={s.svg} // Afbeeldingsbron
                                                        alt={s.name} // Alternatieve tekst
                                                        width={45} // Breedte
                                                        height={45} // Hoogte
                                                    ></Image>
                                                    <div className="text-sm text-gray-600 dark:text-gray-300"> {/* Naam van de vaardigheid */}
                                                        {s.name}
                                                    </div>
                                                </li>
                                            </Reveal>
                                        )
                                    );
                                })}
                            </div>
                        </ul>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills; // Exporteer het Skills component