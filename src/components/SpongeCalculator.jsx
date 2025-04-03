import { useState } from "react";

export default function SpongeCalculator() {
    const [requiredErgon, setRequiredErgon] = useState("");
    const [spongeNeeded, setSpongeNeeded] = useState(null);

    function calculateSponge(e) {
        const ergonCount = parseInt(e.target.value, 10);
        setRequiredErgon(e.target.value); // input değeri güncelleniyor

        if (isNaN(ergonCount) || ergonCount <= 0) {
            setSpongeNeeded("Lütfen geçerli bir ergon sayısı girin.");
            return;
        }

        // 1 sünger parçasından toplam 15 ergon parçası çıkıyor
        const ergonPartsPerSponge = 15;
        const requiredErgonParts = ergonCount * 2; // 1 ergon için 2 ergon parçası lazım
        const spongeNeeded = Math.ceil(requiredErgonParts / ergonPartsPerSponge);
        
        setSpongeNeeded(`Gerekli sünger sayısı: ${spongeNeeded}`);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Sünger Hesaplayıcı</h2>
                <label className="block mb-2 text-lg">Kaç adet ergon gerekiyor?</label>
                <input 
                    type="number" 
                    value={requiredErgon} 
                    onChange={calculateSponge} // onChange ile input değerini alıyoruz
                    className="border rounded-lg p-2 text-lg w-64 text-center"
                    placeholder="Ergon sayısını girin"
                />
                {spongeNeeded && <p className="mt-4 text-lg font-semibold">{spongeNeeded}</p>}
            </div>
        </div>
    );
}
