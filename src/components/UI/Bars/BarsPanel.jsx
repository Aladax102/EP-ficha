import { useCharacter } from "../../../context/CharacterContext";
import Bar from "./Bar";

export default function BarsPanel() {
    const { character, setCharacter } = useCharacter();

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
                max={character.vidaMax}
                onChange={(value) =>
                    updateBar("vida", value)
                }
                onMaxChange={(value) =>
                    updateBar("vidaMax", value)
                }
            />

            <Bar
                label="TENSÃO"
                value={character.tensao}
                max={character.tensaoMax}
                onChange={(value) =>
                    updateBar("tensao", value)
                }
                onMaxChange={(value) =>
                    updateBar("tensaoMax", value)
                }
            />

            <Bar
                label="PS"
                value={character.ps}
                max={character.psMax}
                onChange={(value) =>
                    updateBar("ps", value)
                }
                onMaxChange={(value) =>
                    updateBar("psMax", value)
                }
            />
        </>
    );
}