// Definieert een functionele component genaamd Divider.
const Divider = () => {
    // De functie retourneert JSX (een syntax vergelijkbaar met HTML) voor de weergave van de component.
    return (
        <div className="flex w-full justify-center sm:py-16">
            <div className="w-100 my-8 h-px w-3/5 bg-gray-300"></div>
        </div>
    );
};

// Maakt de Divider component beschikbaar voor gebruik in andere delen van de applicatie.
export default Divider;