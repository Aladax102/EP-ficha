import { useCharacter } from "../../../context/CharacterContext";

export default function AnotacoesPanel() {
    
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
                Anotações
            </div>

            <textarea
                id="notes"
                placeholder="Escreva suas anotações livremente..."
                value={character.anotacoes || ""}
                onChange={(e) => updateField("anotacoes", e.target.value)}
            />
        </div>
    );
}