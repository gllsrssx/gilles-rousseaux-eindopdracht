"use client"; // Gebruik client-side rendering

import { useActiveSection } from "@/app/context/active-section-context"; // Importeer de hook voor het beheren van de actieve sectie
import { projectsData, useInViewSettings } from "@/lib/data"; // Importeer projectgegevens en instellingen voor het detecteren van elementen in de viewport
import { useEffect } from "react"; // Importeer useEffect hook van React
import { useInView } from "react-intersection-observer"; // Importeer useInView hook voor het detecteren van elementen in de viewport
import RenderProjects from "./utils/render-projects"; // Importeer de functie voor het renderen van projecten
import SectionHeading from "./utils/section-heading"; // Importeer de component voor sectiekoppen

const Projects = () => {
    const { ref, inView } = useInView(useInViewSettings); // Gebruik useInView met vooraf gedefinieerde instellingen om te detecteren wanneer het component in beeld is
    const { setActiveSection, timeOfLastClick } = useActiveSection(); // Gebruik de context voor het beheren van de actieve sectie

    useEffect(() => { // Effect voor het bijwerken van de actieve sectie
        return () => { // Cleanup functie die wordt uitgevoerd bij het ontmantelen van het component
            if (inView && Date.now() - timeOfLastClick > 1000) { // Als het component in beeld is en het meer dan een seconde geleden is sinds de laatste klik
                setActiveSection("Projects"); // Stel de actieve sectie in op "Projects"
            }
        };
    }, [inView, setActiveSection, timeOfLastClick]); // Afhankelijkheden van het effect

    return (
        <section id="projects" className="scroll-m-28"> {/* Sectie voor projecten */}
            <div ref={ref} className="mb-10"> {/* Referentie voor useInView en marge aan de onderkant */}
                <SectionHeading>MY PROJECTS</SectionHeading> {/* Sectiekop */}
            </div>
            <div className="flex w-screen items-center justify-center"> {/* Container voor projecten */}
                <div className="flex w-screen max-w-7xl flex-1 flex-col items-center xl:block xl:columns-2"> {/* Stijlen voor de projecten container */}
                    {/* Render de projecten */}
                    {RenderProjects(projectsData)}
                </div>
            </div>
        </section>
    );
};

export default Projects; // Exporteer het Projects component