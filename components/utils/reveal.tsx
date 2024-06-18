// Gebruikt alleen in de client-side van de applicatie.
"use client";

// Importeert benodigde hulpmiddelen en hooks uit verschillende bibliotheken.
import { cn } from "@/lib/utils"; // Een hulpmiddel voor het samenvoegen van classnamen.
import { motion, useAnimation, useInView } from "framer-motion"; // Importeert animatiefunctionaliteiten.
import { useEffect, useRef } from "react"; // Standaard React hooks.

// Definieert de eigenschappen (props) die de Reveal component kan ontvangen.
interface Props {
    className?: string; // Optionele classnaam voor styling.
    index?: number; // Optionele index om vertraging in animatie te bepalen.
    children: JSX.Element; // De inhoud die binnen de Reveal component moet worden getoond.
}

// De Reveal component, gebruikt voor het onthullen van elementen met een animatie.
const Reveal = ({ index, children, className }: Props) => {
    const ref = useRef(null); // Een referentie naar het DOM element voor detectie van zichtbaarheid.

    const isInView = useInView(ref, { once: true }); // Controleert of het element in het zicht is, gebeurt slechts één keer.

    const mainControls = useAnimation(); // Beheert de animatiestatus.

    // Effect dat activeert wanneer het element in het zicht komt.
    useEffect(() => {
        if (isInView) { // Als het element zichtbaar is,
            mainControls.start("visible"); // Start de animatie naar de 'visible' staat.
        }
    }, [isInView, mainControls]); // Afhankelijkheden van het effect.

    // Retourneert de JSX structuur van de component.
    return (
        <motion.div
            ref={ref} // Koppelt de referentie aan het div element.
            variants={{ // Definieert de animatievarianten.
                hidden: { opacity: 0, y: 75 }, // Beginstaat: verborgen.
                visible: { opacity: 1, y: 0 }, // Eindstaat: zichtbaar.
            }}
            initial="hidden" // Begint in de 'hidden' staat.
            animate={mainControls} // Gebruikt de animatiecontroles.
            transition={{ duration: 0.25, delay: index ? index * 0.08 : 0.25 }} 
            className={cn(className)} 
        >
            {children}
        </motion.div>
    );
};

// Maakt de Reveal component beschikbaar voor gebruik in andere delen van de applicatie.
export default Reveal;