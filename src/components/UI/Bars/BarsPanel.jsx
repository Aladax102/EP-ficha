import { useCharacter } from "../../../context/CharacterContext";
import Bar from "./Bar";

export default function BarsPanel() {

    const { character, setCharacter } = useCharacter();

    const ptTable = [10, 16, 22, 28, 34, 40, 46];

    const hpMax =
        10 + (character.VIT * 3);

    const ptMax =
        ptTable[character.ESS] || 10;

    function updateBar(bar, value) {

        setCharacter({
            ...character,
            [bar]: value
        });
    }

    return (
        <>

            <h2>Status</h2>

            <Bar
                label="VIDA"
                value={character.vida}
                max={hpMax}
                onChange={(value) =>
                    updateBar("vida", value)
                }
            />

            <Bar
                label="TENSÃO"
                value={character.tensao}
                max={ptMax}
                onChange={(value) =>
                    updateBar("tensao", value)
                }
            />

            <Bar
                label="PS"
                value={character.ps}
                max={50}
                onChange={(value) =>
                    updateBar("ps", value)
                }
            />

        </>
    );
}