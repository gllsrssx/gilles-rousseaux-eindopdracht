// Importeert benodigde hulpmiddelen en componenten uit verschillende bibliotheken en lokale bestanden.
import { useTheme } from "@/app/context/theme-context"; // Haalt thema-gerelateerde functionaliteit op.
import { motion } from "framer-motion"; // Importeert animatiebibliotheek.
import Image from "next/image"; // Importeert geoptimaliseerde afbeeldingscomponent van Next.js.
import Link from "next/link"; // Importeert component voor navigatie tussen pagina's.
import { BsCloud, BsGithub, BsYoutube } from "react-icons/bs"; // Importeert specifieke iconen.
import Reveal from "./reveal"; // Importeert een component voor onthullingseffecten.

// Definieert een functie om projecten te renderen, neemt projectgegevens als argument.
function RenderProjects(projectsData: any) {
    const { theme } = useTheme(); // Gebruikt de thema context om het huidige thema op te halen.
    // Map over elk project in de projectgegevens en retourneer een JSX-element voor elk.
    return projectsData.map((project: any) => {
        // Voor elk project wordt een Reveal component geretourneerd met daarin de projectinformatie.
        return (
            <Reveal key={project.name + project.description}> 
                <div
                    className="mb-4 flex-1 break-inside-avoid px-4 sm:mb-8 sm:px-8"
                >
                    {/* Container voor projectinformatie, inclusief afbeelding, titel, technologieën, beschrijving en links. */}
                    <div className="flex max-w-lg flex-col rounded-xl border bg-gray-100 pb-2 shadow-md shadow-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:max-w-xl">
                        {/* Container voor projectafbeelding. */}
                        {project?.carouselImage[0]?.image && (
                            <Image
                                priority={true}
                                className="rounded-t-xl"
                                alt={project?.carouselImage[0].alt}
                                src={project?.carouselImage[0].image}
                                width={0}
                                height={0}
                                sizes="100%"
                                style={{ width: "100%", height: "auto" }} // Stijl is optioneel.
                            />
                        )}
                        {/* Container voor projecttitel, technologieën en beschrijving. */}
                        <div className="mt-6 px-5 sm:max-w-2xl sm:px-7">
                            <h1 className="pb-2 text-xl font-bold">
                                {project.title}
                            </h1>
                            {/* Container voor technologieën gebruikt in het project. */}
                            <div className="flex flex-row flex-wrap justify-center gap-1.5 sm:justify-start">
                                {project.tech.map((technology: any) => {
                                    return (
                                        <div
                                            className="my-1 flex select-none items-center justify-center rounded-full bg-white p-1 px-1.5 text-sm shadow-sm shadow-gray-300 dark:border dark:border-gray-700 dark:bg-gray-950 dark:shadow-none"
                                            key={project.name + technology}
                                        >
                                            {technology}{" "}
                                        </div>
                                    );
                                })}
                            </div>
                            <p className="py-4">{project.description}</p>
                        </div>
                        {/* Container voor links naar GitHub, live demo of video demo. */}
                        <div className="h-w-full mb-4 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
                            {/* GitHub link met animatie bij hover en klik. */}
                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Link
                                    className={
                                        "sm:w-44 " +
                                        (theme == "dark"
                                            ? "button_accent"
                                            : "button_primary")
                                    }
                                    target="_blank"
                                    href={project.codeURL}
                                >
                                    GitHub
                                    <BsGithub size={20} />
                                </Link>
                            </motion.div>
                            {/* Link naar live demo of video demo met animatie bij hover en klik. */}
                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Link
                                    className={
                                        "sm:w-44 " +
                                        (theme == "dark"
                                            ? "button_primary"
                                            : "button_accent")
                                    }
                                    target="_blank"
                                    href={
                                        project?.liveDemoURL ??
                                        project?.videoDemoURL
                                    }
                                >
                                    {project?.liveDemoURL
                                        ? "Live Demo"
                                        : "Video Demo"}
                                    {project?.liveDemoURL ? (
                                        <BsCloud size={20} />
                                    ) : (
                                        <BsYoutube size={20} />
                                    )}
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Reveal>
        );
    });
}

// Maakt de RenderProjects functie beschikbaar voor gebruik in andere delen van de applicatie.
export default RenderProjects;