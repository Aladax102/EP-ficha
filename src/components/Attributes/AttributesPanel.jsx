import { useCharacter } from "../../context/CharacterContext";
import AttributeInput from "./AttributesInput";

export default function AttributesPanel() {

    const { character, setCharacter } = useCharacter();

    function updateAttribute(attribute, value) {

        setCharacter({
            ...character,
            [attribute]: value
        });
    }

    return (
        <>
            <AttributeInput
                className="attr"
                data-attr="POT"
                label="// Potência //"
                shortLabel="(POT)"
                value={character.POT}
                onChange={(value) =>
                    updateAttribute("POT", value)
                }
            />

            <AttributeInput
                className="attr"
                data-attr="AST"
                label="¶ Astúcia ¶"
                shortLabel="(AST)"
                value={character.AST}
                onChange={(value) =>
                    updateAttribute("AST", value)
                }
            />

            <AttributeInput
                className="attr"
                data-attr="MEN"
                label="μ Mente μ"
                shortLabel="(MEN)"
                value={character.MEN}
                onChange={(value) =>
                    updateAttribute("MEN", value)
                }
            />

            <AttributeInput
                className="attr"
                data-attr="ESS"
                label="+ Essência +"
                shortLabel="(ESS)"
                value={character.ESS}
                onChange={(value) =>
                    updateAttribute("ESS", value)
                }
            />

            <AttributeInput
                className="attr"
                data-attr="VIT"
                label="‡ Vitalidade ‡"
                shortLabel="(VIT)"
                value={character.VIT}
                onChange={(value) =>
                    updateAttribute("VIT", value)
                }
            />
        </>
    );
}