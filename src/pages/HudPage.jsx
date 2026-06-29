import { useCharacter } from "../context/CharacterContext";
import "../styles/hud.css"

export default function HudPage() {

    const { character } = useCharacter();

    return (
        <div className="hud">

            <div className="hud-card">

                <div className="hud-name">
                    {character.nome || character.id}
                </div>

                <div className="hud-stat">
                    PV: {character.pv}
                </div>

                <div className="hud-stat">
                    PS: {character.ps}
                </div>

                <div className="hud-stat">
                    Tensão: {character.tensao}
                </div>

            </div>

        </div>
    );
}