import { useCharacter } from "../../../context/CharacterContext";

export default function InventoryPanel() {
    
    const { character, setCharacter } = useCharacter();

    function updateField(field, value) {
        setCharacter({
            ...character,
            [field]: value
        });
    }

    return(
        <>
            <div className="conditions">
                <div className="subtitle">
                    Inventário
                </div>

                <textarea
                    id="notes"
                    placeholder="Escreva seu inventário livremente..."
                    value={character.inventario || ""}
                    onChange={(e) => updateField("inventario", e.target.value)}
                />
            </div>
        </>
    );
}