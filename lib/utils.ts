import { type ClassValue, clsx } from "clsx"; // Importeer clsx voor het samenvoegen van classnames, met ClassValue type
import { twMerge } from "tailwind-merge"; // Importeer twMerge voor het samenvoegen van Tailwind CSS classnames

// Definieer een functie 'cn' die meerdere classnames samenvoegt
export function cn(...inputs: ClassValue[]) {
    // Gebruik clsx om de inputs samen te voegen tot één string, en gebruik dan twMerge om eventuele conflicten tussen Tailwind CSS classes op te lossen
    return twMerge(clsx(inputs));
}