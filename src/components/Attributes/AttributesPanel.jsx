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
                label="Potência - POT"
                value={character.potencia}
                onChange={(value) =>
                    updateAttribute("potencia", value)
                }
            />

            <AttributeInput
                className="attr"
                data-attr="AST"
                label="Astúcia - AST"
                value={character.astucia}
                onChange={(value) =>
                    updateAttribute("astucia", value)
                }
            />

            <AttributeInput
                className="attr"
                data-attr="MEN"
                label="Mente - MEN"
                value={character.mente}
                onChange={(value) =>
                    updateAttribute("mente", value)
                }
            />

            <AttributeInput
                className="attr"
                data-attr="ESS"
                label="Essência - ESS"
                value={character.essencia}
                onChange={(value) =>
                    updateAttribute("essencia", value)
                }
            />

            <AttributeInput
                className="attr"
                data-attr="VIT"
                label="Vitalidade - VIT"
                value={character.vitalidade}
                onChange={(value) =>
                    updateAttribute("vitalidade", value)
                }
            />
        </>
    );
}