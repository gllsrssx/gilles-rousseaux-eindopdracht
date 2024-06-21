// Gebruik client-side rendering voor deze pagina
"use client";

// Importeer benodigde modules en componenten
import { useActiveSection } from "@/app/context/active-section-context"; // Context hook voor het beheren van de actieve sectie
import { useTheme } from "@/app/context/theme-context"; // Context hook voor themabeheer
import { education, useInViewSettings } from "@/lib/data"; // Importeer educatiegegevens en instellingen voor inView detectie
import { useEffect } from "react"; // Importeer useEffect hook van React
import { useInView } from "react-intersection-observer"; // Hook om te detecteren of een element in beeld is
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"; // Componenten voor verticale tijdlijn
import "react-vertical-timeline-component/style.min.css"; // Stijlen voor de verticale tijdlijn
import Reveal from "./utils/reveal"; // Component voor onthullingseffecten
import SectionHeading from "./utils/section-heading"; // Component voor sectiekoppen

// Component voor de educatiesectie
const Education = () => {
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
                setActiveSection("Education");
            }
        };
    }, [inView, setActiveSection, timeOfLastClick]);

    // Render de educatiesectie
    return (
        <section
            id="education" // ID voor ankerlink
            className="m-4 flex scroll-m-28 flex-col items-center sm:mx-8" // Stijlen voor de sectie
        >
            <div ref={ref} className="mb-4">
                <SectionHeading>EDUCATION</SectionHeading> 
                {/* // Sectiekop */}
            </div>
            <div className="min-w-[min(50em,100%)]">
                <VerticalTimeline lineColor="" layout="1-column-left">
                    {education.map((edu) => {
                        return (
                            <Reveal key={edu.company + edu.date}>
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
                                    icon={edu.icon} // Icoon voor de tijdlijnelement
                                    iconStyle={{
                                        background:
                                            theme == "dark"
                                                ? "#111827"
                                                : "#fef6c7", // Icoon achtergrondkleur gebaseerd op thema
                                        fontSize: "1.5rem",
                                    }}
                                    date={edu.date} 
                                    // Datum van de opleiding
                                >
                                    <h3 className="text-2xl font-bold">
                                        {edu.company} 
                                        {/* // Naam van de instelling */}
                                    </h3>
                                    <h4 className="text-xl font-semibold dark:text-yellow-400">
                                        {edu.title} 
                                        {/* // Titel van de opleiding */}
                                    </h4>
                                    <p className="text-md !mb-2 !mt-0 text-gray-700 dark:text-gray-400">
                                        {edu.location} // Locatie van de opleiding
                                    </p>
                                    {/* // Beschrijving van de opleiding */}
                                    {edu.description.map((list, index) => {
                                        return (
                                            <Reveal key={index}>
                                                <li>{list}</li> 
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

// Exporteer de Education component
export default Education;