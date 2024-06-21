// Gebruik client-side rendering voor deze pagina
"use client";

// Importeer benodigde modules en componenten
import sendEmail from "@/actions/send-email"; // Functie om een email te versturen
import { useActiveSection } from "@/app/context/active-section-context"; // Context hook voor het beheren van de actieve sectie
import getErrorMessage from "@/components/utils/errorHandler"; // Functie om foutmeldingen te verwerken
import { useInViewSettings } from "@/lib/data"; // Instellingen voor de useInView hook
import { motion } from "framer-motion"; // Importeer framer-motion voor animaties
import { useEffect, useState } from "react"; // Importeer useEffect en useState hooks van React
import { useInView } from "react-intersection-observer"; // Hook om te detecteren of een element in beeld is
import SectionHeading from "./utils/section-heading"; // Component voor sectiekoppen
import SubmitBtn from "./utils/submit-btn"; // Component voor de verzendknop

// Component voor de contactsectie
const Contact = () => {
    // Instellingen en status voor het detecteren van de sectie in beeld
    const { ref, inView } = useInView(useInViewSettings);
    // Context voor het beheren van de actieve sectie
    const { setActiveSection, timeOfLastClick } = useActiveSection();
    // State voor het bijhouden of een email verzonden is
    const [emailSent, setEmailSent] = useState(false);
    // State voor het opslaan van een foutmelding
    const [errorMessage, setErrorMessage] = useState("");

    // Effect om de actieve sectie bij te werken wanneer deze in beeld komt
    useEffect(() => {
        const time = Date.now();
        return () => {
            if (inView && time - timeOfLastClick > 1000) {
                setActiveSection("Contact");
            }
        };
    }, [inView, setActiveSection, timeOfLastClick]);

    // Render de contactsectie
    return (
        <section
            id="contact" // ID voor ankerlink
            className="flex min-h-[40em] w-screen scroll-m-28 flex-col items-center text-center sm:min-h-[48em]" // Stijlen voor de sectie
        >
            <div ref={ref}>
                <SectionHeading>CONTACT ME</SectionHeading> 
                {/* // Sectiekop */}
            </div>

            {/* // Paragraaf met contactinformatie */}
            <motion.p
                className="mt-2 px-4 text-sm text-gray-700 dark:text-gray-400" // Stijlen voor de paragraaf
                initial={{ opacity: 0, y: 50 }} // Beginpositie voor animatie
                whileInView={{ opacity: 1, y: 0 }} // Eindpositie voor animatie
                transition={{ duration: 0.25 }} // Animatie-eigenschappen
                viewport={{ once: true }} // Zorg dat animatie eenmalig is
            >
                Contact me directly at{" "}
                <a
                    className="font-semibold text-indigo-600 underline" // Stijlen voor de link
                    href="mailto:glls@rssx.be" // Mailto link
                >
                    glls@rssx.be
                </a>{" "}
                or through the form below.
            </motion.p>
            {/* // Het contactformulier */}
            <motion.form
                action={async (formData) => {
                    try {
                        // Verstuur de email met de ingevulde gegevens
                        await sendEmail(
                            formData.get("senderEmail")?.toString() ?? "",
                            formData.get("senderMessage")?.toString() ?? ""
                        );
                    } catch (error) {
                        // Sla de foutmelding op bij een fout
                        setErrorMessage(getErrorMessage(error));
                    }
                    // Markeer de email als verzonden
                    setEmailSent(true);
                }}
                className="mt-10 flex min-w-[min(100%,38rem)] flex-col gap-4 px-8 sm:gap-4" // Stijlen voor het formulier
                initial={{ opacity: 0, y: 50 }} // Beginpositie voor animatie
                whileInView={{ opacity: 1, y: 0 }} // Eindpositie voor animatie
                transition={{ duration: 0.5 }} // Animatie-eigenschappen
                viewport={{ once: true }} // Zorg dat animatie eenmalig is
            >
                {errorMessage && (
                    <p className="text-red-500">Error: {errorMessage}</p> // Toon foutmelding indien aanwezig
                )}
                {/* // Inputveld voor emailadres */}
                <input
                    disabled={emailSent} // Deactiveer na verzending
                    type="email"
                    name="senderEmail"
                    className="h-10 rounded-lg border bg-gray-50 px-4 shadow-md shadow-gray-300 disabled:bg-gray-100 disabled:opacity-70 dark:border-gray-600 dark:bg-gray-700 dark:shadow-none" // Stijlen voor het inputveld
                    placeholder="Your Email"
                    required
                    maxLength={100}
                ></input>
                {/* // Textarea voor het bericht */}
                <textarea
                    disabled={emailSent} // Deactiveer na verzending
                    required
                    name="senderMessage"
                    className="h-80 rounded-lg border bg-gray-50 p-4 shadow-md shadow-gray-300 disabled:bg-gray-100 disabled:opacity-70 dark:border-gray-600 dark:bg-gray-700 dark:shadow-none" // Stijlen voor de textarea
                    placeholder="Your Message"
                    maxLength={1000}
                ></textarea>
                {/* // Container voor de verzendknop */}
                <div className="flex justify-end">
                    <SubmitBtn emailSent={emailSent} /> 
                    {/* // Verzendknop component */}
                </div>
            </motion.form>
        </section>
    );
};

// Exporteer de Contact component
export default Contact;