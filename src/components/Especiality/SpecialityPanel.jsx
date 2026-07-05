import { useCharacter } from "../../context/CharacterContext";
import SpecialityGroup from "./SpecialityGroup";

export default function SpecialityPanel() {

    const { character, setCharacter } = useCharacter();

    function updateSpeciality(index, field, value) {

        const updated = [...character.especialidades];

        updated[index] = {
            ...updated[index],
            [field]: value
        };

        setCharacter({
            ...character,
            especialidades: updated
        });
    }

    function addSpeciality() {

        setCharacter({
            ...character,
            especialidades: [
                ...character.especialidades,
                { nome: "", nivel: 2 }
            ]
        });
    }

    return (
        <>
            {character.especialidades.map((speciality, index) => (
                <SpecialityGroup
                    key={index}
                    value={speciality.nome}
                    nivel={speciality.nivel}
                    onValueChange={(value) =>
                        updateSpeciality(index, "nome", value)
                    }
                    onLevelChange={(value) =>
                        updateSpeciality(index, "nivel", value)
                    }
                />
            ))}

            <button onClick={addSpeciality}>
                +
            </button>
        </>
    );
}