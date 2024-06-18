// Gebruik client-side logica voor dit bestand.
"use client";
// Importeer de 'color' functie van 'framer-motion', maar deze wordt niet gebruikt in de code.
import { color } from "framer-motion";
// Importeer verschillende haken en functies van React.
import { createContext, useContext, useEffect, useState } from "react";

// Definieer de mogelijke thema's als 'light' of 'dark'.
type Theme = "light" | "dark";
// Maak een nieuwe context aan zonder standaardwaarde.
const themeContext = createContext(null);
// Definieer de eigenschappen die de ThemeContextProvider component zal ontvangen.
type ThemeContextProviderProps = { children: React.ReactNode };
// Definieer het type voor de context, inclusief het huidige thema en een functie om het thema te wisselen.
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

// Maak een nieuwe context aan voor het thema met een standaardwaarde van null.
const ThemeContext = createContext<ThemeContextType | null>(null);

// Definieer de provider component voor het thema.
const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    // Gebruik useState om het huidige thema bij te houden, standaard op 'light'.
    const [theme, setTheme] = useState<Theme>("light");

    // Functie om het thema in te stellen en op te slaan in de lokale opslag van de browser.
    const themeSet = (theme: Theme) => {
        if (theme === "light") {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        } else {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
    };

    // Functie om tussen licht en donker thema te wisselen.
    const toggleTheme = () => {
        if (theme === "light") {
            themeSet("dark");
        } else {
            themeSet("light");
        }
    };

    // Haak die bij het laden van de component het thema instelt op basis van de lokale opslag of systeemvoorkeur.
    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");

        if (localTheme === "dark") {
            themeSet("dark");
        } else if (localTheme === "light") {
            themeSet("light");
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            themeSet("dark");
        } else {
            themeSet("light");
        }
    }, []);

    // Geef de provider component terug met de huidige staat en functies als waarde.
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

// Maak de provider component beschikbaar voor import in andere bestanden.
export default ThemeContextProvider;

// Definieer een haak om de thema context te gebruiken.
export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }

    return context;
};