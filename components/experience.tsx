// Gebruik client-side rendering voor deze pagina
"use client";

// Importeer benodigde modules en componenten
import { useActiveSection } from "@/app/context/active-section-context"; // Context hook voor het beheren van de actieve sectie
import { useTheme } from "@/app/context/theme-context"; // Context hook voor themabeheer
import { useInViewSettings, workExperience } from "@/lib/data"; // Importeer werkervaringsgegevens en instellingen voor inView detectie
import { useEffect } from "react"; // Importeer useEffect hook van React
import { useInView } from "react-intersection-observer"; // Hook om te detecteren of een element in beeld is
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"; // Componenten voor verticale tijdlijn
import "react-vertical-timeline-component/style.min.css"; // Stijlen voor de verticale tijdlijn
import Reveal from "./utils/reveal"; // Component voor onthullingseffecten
import SectionHeading from "./utils/section-heading"; // Component voor sectiekoppen

// Component voor de werkervaringssectie
const Experience = () => {
    // Instellingen en status voor het detecteren van de sectie in beeld
    const { ref, inView } = useInView(useInViewSettings);
    // Context voor het beheren van de actieve sectie
    const { setActiveSection, timeOfLastClick } = useActiveSection();
    // Context voor themabeheer
    const { theme } = useTheme();

    // Effect om de actieve sectie bij te werken wanneer deze in beeld komt
    useEffect(() => {
        return () => {
            if (inView && Date.now() - timeOfLastClick > 1000) {
                setActiveSection("Experience");
            }
        };
    }, [inView, setActiveSection, timeOfLastClick]);

    // Render de werkervaringssectie
    return (
        <section
            id="experience" // ID voor ankerlink
            className="m-4 flex scroll-m-28 flex-col items-center sm:mx-8" // Stijlen voor de sectie
        >
            <div ref={ref} className="mb-4">
                <SectionHeading>EXPERIENCE</SectionHeading> 
                {/* // Sectiekop */}
            </div>
            <div className="max-w-3xl">
                <VerticalTimeline lineColor="" layout="1-column-left">
                    {workExperience.map((exp, index2) => {
                        return (
                            <Reveal
                                index={index2}
                                key={exp.company + exp.date}
                                className="mb-4 p-1"
                            >
                                <VerticalTimelineElement
                                    visible={true}
                                    contentStyle={{
                                        background:
                                            theme == "dark"
                                                ? "#111827"
                                                : "#fef6c7", // Achtergrondkleur gebaseerd op thema
                                        boxShadow: "none",
                                        border: "1px solid rgba(0, 0, 0, 0.05)",
                                        padding: "1rem 1rem 1rem 1.5rem",
                                    }}
                                    contentArrowStyle={{
                                        borderRight: "7px solid #d1d5db",
                                    }}
                                    icon={exp.icon} // Icoon voor de tijdlijnelement
                                    iconStyle={{
                                        background:
                                            theme == "dark"
                                                ? "#111827"
                                                : "#fef6c7", // Icoon achtergrondkleur gebaseerd op thema
                                        fontSize: "1.5rem",
                                    }}
                                    date={exp.date} // Datum van de werkervaring
                                >
                                    <h3 className="text-2xl font-bold">
                                        {exp.company} 
                                        {/* // Naam van het bedrijf */}
                                    </h3>
                                    <h4 className="text-xl font-semibold dark:text-yellow-400">
                                        {exp.title} 
                                        {/* // Titel van de positie */}
                                    </h4>
                                    <p className="text-md !mb-2 !mt-0 text-gray-700 dark:text-gray-400">
                                        {exp.location} 
                                        {/* // Locatie van het bedrijf */}
                                    </p>
                                    {exp.description.map((list, index) => {
                                        return (
                                            <Reveal key={index}>
                                                <li>{list}</li> 
                                                {/* // Beschrijving van de werkervaring */}
                                            </Reveal>
                                        );
                                    })}
                                </VerticalTimelineElement>
                            </Reveal>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </section>
    );
};

// Exporteer de Experience component
export default Experience;