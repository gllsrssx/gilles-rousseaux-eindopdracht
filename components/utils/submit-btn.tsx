// Importeer React en benodigde iconen en animaties
import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";

// Importeer de useFormStatus hook van react-dom
import { useFormStatus } from "react-dom";

// Definieer de SubmitBtn component met de emailSent prop
function SubmitBtn({ emailSent }: { emailSent: boolean }) {
    // Gebruik de useFormStatus hook om de verzendstatus op te halen
    const { pending } = useFormStatus();
    return (
        // Render een geanimeerde knop met verschillende staten afhankelijk van de verzendstatus
        <motion.button
            disabled={emailSent || pending} // Deactiveer de knop als de email verzonden is of nog bezig is met verzenden
            className="button_primary group mt-2" // Stijlklasse voor de knop
            whileHover={{ scale: emailSent || pending ? 1 : 1.04 }} // Animatie bij hover: vergroot als niet bezig met verzenden
            whileTap={{ scale: emailSent || pending ? 1 : 0.97 }} // Animatie bij klikken: verklein als niet bezig met verzenden
        >
            {emailSent ? ( // Als de email verzonden is, toon "Email Sent!" met een vinkje
                <>
                    Email Sent! <FcCheckmark />
                </>
            ) : pending ? ( // Als de email nog bezig is met verzenden, toon "Sending..." met een laadicoon
                <>
                    Sending...
                    <AiOutlineLoading className="animate-spin" />
                </>
            ) : ( // Standaardtoestand: toon "Send Email" met een papieren vliegtuigje
                <>
                    Send Email
                    <FaPaperPlane
                        className={
                            pending || emailSent
                                ? "" // Geen extra animatie als bezig met verzenden of al verzonden
                                : "transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" // Animatie voor het icoon bij hover
                        }
                    />
                </>
            )}
        </motion.button>
    );
}

// Exporteer de SubmitBtn component
export default SubmitBtn;