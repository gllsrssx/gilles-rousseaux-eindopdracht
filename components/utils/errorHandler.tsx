// Deze functie handelt foutmeldingen af en geeft de foutmelding terug als een string.

// Definieert een functie genaamd getErrorMessage die een onbekend type fout accepteert en een string teruggeeft.
const getErrorMessage = (error: unknown): string => {
    // Controleert of de fout een instantie is van de Error klasse of een object met een 'message' eigenschap.
    if (
        error instanceof Error || // Als de fout een Error object is,
        (error && typeof error === "object" && "message" in error) // of als het een object is met een 'message' eigenschap,
    ) {
        // Zet de foutmelding om naar een string en geef deze terug.
        return String(error.message);
    } else if (typeof error === "string") { // Als de fout al een string is,
        // Geef de foutmelding direct terug.
        return error;
    } else {
        // Als het geen van de bovenstaande is, geef dan "Onbekende fout" terug.
        return "Unknown error";
    }
};

// Maakt de getErrorMessage functie beschikbaar voor gebruik in andere delen van de applicatie.
export default getErrorMessage;