import { useCharacter } from "../../../context/CharacterContext";

export default function HabilidadesPanel() {
    
    const { character, setCharacter } = useCharacter();

    function updateField(field, value) {
        setCharacter({
            ...character,
            [field]: value
        });
    }

    return(
        <div class="habilidades">
            <div className="subtitle">
                Habilidades
            </div>

            <textarea
                id="notes"
                placeholder="Escreva suas habilidades livremente..."
                value={character.habilidades || ""}
                onChange={(e) => updateField("habilidades", e.target.value)}
            />
        </div>
    );
}