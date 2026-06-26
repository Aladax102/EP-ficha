import { useCharacter } from "../../../context/CharacterContext";

export default function CondicoesPanel() {
    
    const { character, setCharacter } = useCharacter();

    function updateField(field, value) {
        setCharacter({
            ...character,
            [field]: value
        });
    }

    return(
        <>
            <div style={{ fontSize: "13px", color: "var(--muted)" }}>
                Condições
            </div>

            <textarea
                id="effectsField"
                placeholder="Escreva suas condições livremente..."
                value={character.condicoes || ""}
                onChange={(e) => updateField("condicoes", e.target.value)}
            />
        </>
    );
}