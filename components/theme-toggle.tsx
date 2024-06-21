"use client"; // Gebruik client-side rendering
import { useTheme } from "@/app/context/theme-context"; // Importeer de hook voor thema-context
import { BsSun } from "react-icons/bs"; // Importeer zon-icoon voor licht thema
import { LuMoonStar } from "react-icons/lu"; // Importeer maan-ster icoon voor donker thema

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme(); // Gebruik thema-context om huidig thema en functie om thema te wisselen te krijgen
    return (
        <button
            className="ml-2 flex h-7 w-7 items-center justify-center rounded-lg border border-solid border-gray-600 bg-yellow-50 text-lg opacity-80 transition-all hover:opacity-100 dark:bg-black dark:text-yellow-200 dark:backdrop-blur-lg dark:backdrop-filter sm:h-9 sm:w-9" // Stijlen voor de knop, inclusief responsieve en donkere modus stijlen
            onClick={toggleTheme} // Wissel thema bij klikken
        >
            {theme === "light" ? ( // Als het huidige thema licht is
                <LuMoonStar className="stroke-[0.05em] text-xl text-slate-900 sm:text-xl" /> // Toon maan-ster icoon
            ) : (
                <BsSun className="text-xl sm:text-xl" /> // Anders, toon zon-icoon
            )}
        </button>
    );
};

export default ThemeToggle; // Exporteer ThemeToggle component