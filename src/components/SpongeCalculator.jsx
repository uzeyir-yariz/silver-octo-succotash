import { useState } from "react";

export default function SpongeCalculator() {
    const [requiredErgon, setRequiredErgon] = useState("");
    const [spongeNeeded, setSpongeNeeded] = useState(null);

    function calculateSponge(e) {
        const ergonCount = parseInt(e.target.value, 10);
        setRequiredErgon(e.target.value);

        if (isNaN(ergonCount) || ergonCount <= 0) {
            setSpongeNeeded("Lütfen geçerli bir ergon sayısı girin.");
            return;
        }

        const ergonPerSponge = 6.5; // 1 sünger = 6.5 ergon
        const spongeCount = Math.ceil(ergonCount / ergonPerSponge); // Yukarı yuvarla

        setSpongeNeeded(`Gerekli sünger sayısı: ${spongeCount}`);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Sünger Hesaplayıcı</h2>
                <label className="block mb-2 text-lg">Kaç adet <strong>ergon</strong> gerekiyor?</label>
                <input 
                    type="number" 
                    value={requiredErgon} 
                    onChange={calculateSponge} 
                    className="border rounded-lg p-2 text-lg w-64 text-center"
                    placeholder="Ergon sayısını girin"
                    min="1"
                />
                {spongeNeeded && <p className="mt-4 text-lg font-semibold">{spongeNeeded}</p>}
            </div>
        </div>
    );
}
