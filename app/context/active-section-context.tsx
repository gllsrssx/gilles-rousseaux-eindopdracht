// Gebruik client-side logica voor dit bestand.
"use client";

// Importeer de links data vanuit een bibliotheek map.
import { links } from "@/lib/data";
// Importeer benodigde functies en haken vanuit React.
import React, { createContext, useContext, useState } from "react";

// Definieer types voor de naam van de sectie en de eigenschappen van de provider.
type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = { children: React.ReactNode };
type ActiveSectionContextType = {
    activeSection: SectionName; // De huidige actieve sectie.
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>; // Functie om de actieve sectie te wijzigen.
    timeOfLastClick: number; // Tijdstip van de laatste klik.
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>; // Functie om het tijdstip van de laatste klik te wijzigen.
};

// Maak een nieuwe context aan voor de actieve sectie met een standaardwaarde van null.
const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);
// Definieer de provider component voor de actieve sectie context.
const ActiveSectionContextProvider = ({ children }: ActiveSectionContextProviderProps) => {
    // Gebruik useState om de staat van de actieve sectie en het tijdstip van de laatste klik bij te houden.
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    // Geef de provider component terug met de huidige staat en functies als waarde.
    return (
        <ActiveSectionContext.Provider
            value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}
        >
            {children} 
        </ActiveSectionContext.Provider>
    );
};

// Maak de provider component beschikbaar voor import in andere bestanden.
export default ActiveSectionContextProvider;

// Definieer een haak om de context te gebruiken.
export function useActiveSection() {
    const context = useContext(ActiveSectionContext); // Gebruik de context haak om toegang te krijgen tot de context.

    // Als de context niet beschikbaar is, gooi dan een fout.
    if (!context) {
        throw new Error("useActiveSection must be used within an ActiveSectionContextProvider.");
    }
    // Geef de context terug.
    return context;
}