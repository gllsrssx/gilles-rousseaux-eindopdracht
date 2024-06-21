import Reveal from "./utils/reveal"; // Importeer het Reveal component voor onthullingseffecten

// Definieer het Footer component
const Footer = () => {
    // Render het Footer component
    return (
        <Reveal> 
            {/* Gebruik het Reveal component om de footer met een animatie te tonen */}
            <footer className="gray-700 flex w-screen justify-center px-10 pb-10 text-center"> 
                {/* Stijl de footer */}
                <p> {/* Paragraaf met informatie over de website */}
                    I built this website with Next.js, Typescript and Tailwind. {/* Informatie over de gebruikte technologieën */}
                    The source code is available on my{" "} {/* Informatie over de beschikbaarheid van de broncode */}
                    <a
                        href="https://github.com/gllsrssx/gilles-rousseaux-eindopdracht" 
                        // {/* Link naar de GitHub repository */}
                        className="font-semibold text-indigo-600 underline" 
                        // {/* Stijl de link */}
                    >
                        GitHub {/* Tekst van de link */}
                    </a>
                    . {/* Punt aan het einde van de zin */}
                </p>
            </footer>
        </Reveal>
    );
};

export default Footer; // Exporteer het Footer component