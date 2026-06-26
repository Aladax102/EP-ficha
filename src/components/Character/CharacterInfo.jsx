import { useCharacter } from "../../context/CharacterContext";

export default function CharacterInfoPanel() {

    const { character, setCharacter } = useCharacter();

    function updateField(field, value) {
        setCharacter({
            ...character,
            [field]: value
        });
    }

    return (
        <>
            <input
                placeholder="Nome"
                id="nameField"
                value={character.nome}
                onChange={(e) =>
                    updateField("nome", e.target.value)
                }
            />

            <input
                placeholder="Idade"
                type="number"
                value={character.idade}
                onChange={(e) =>
                    updateField("idade", Number(e.target.value))
                }
            />

            <input
                placeholder="Cor dos Olhos"
                value={character.cordosolhos}
                onChange={(e) =>
                    updateField("cordosolhos", e.target.value)
                }
            />

            <input
                placeholder="Nível"
                type="number"
                value={character.nivel}
                onChange={(e) =>
                    updateField("nivel", Number(e.target.value))
                }
            />

        </>
    );
}