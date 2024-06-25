// Gebruik server-side logica voor dit bestand.
"use server";

// Importeer een functie om fouten af te handelen vanuit een hulpprogramma map.
import getErrorHandler from "@/components/utils/errorHandler";
// Importeer de Resend klasse om e-mails te kunnen versturen.
import { Resend } from "resend";

// Maak een nieuwe instantie van Resend met de API sleutel uit de omgevingsvariabelen.
const resend = new Resend(process.env.RESEND_API_KEY);

// Definieer een asynchrone functie om een e-mail te versturen.
const sendEmail = async (email: string, message: string) => {
    try {
        // Probeer een e-mail te versturen met de volgende details.
        await resend.emails.send({
            from: "acme <onboarding@resend.dev>", // Van wie de e-mail komt. 
            to: "gilles1996@outlook.com", // Naar wie de e-mail gestuurd wordt.
            subject: "Message from Portfolio", // Het onderwerp van de e-mail.
            reply_to: email, // Het e-mailadres waarop gereageerd kan worden.
            text: message, // De tekst van het bericht.
        });
    } catch (error: unknown) {
        // Als er een fout optreedt, vang deze dan op en gebruik de foutafhandelingsfunctie.
        return {
            error: getErrorHandler(error),
        };
    }
};
// Maak de sendEmail functie beschikbaar voor andere bestanden om te gebruiken.
export default sendEmail;