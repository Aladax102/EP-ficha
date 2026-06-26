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
                { nome: "", bonus: false }
            ]
        });
    }

    return (
        <>
            {character.especialidades.map((speciality, index) => (
                <SpecialityGroup
                    key={index}
                    value={speciality.nome}
                    bonus={speciality.bonus}
                    onValueChange={(value) =>
                        updateSpeciality(index, "nome", value)
                    }
                    onBonusChange={(value) =>
                        updateSpeciality(index, "bonus", value)
                    }
                />
            ))}

            <button onClick={addSpeciality}>
                +
            </button>
        </>
    );
}