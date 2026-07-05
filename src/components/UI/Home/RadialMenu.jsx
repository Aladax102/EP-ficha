import { useEffect, useState } from "react";
import IconGroup from "./IconGroup";
import PasswordGroup from "./PasswordGroup";
import RadialBackground from "./RadialBackground";
import { characters } from "./characterIcons";
import { useNavigate } from "react-router-dom";
import "../../../styles/radial.css";

export default function RadialMenu() {
    const navigate = useNavigate();
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {

        function handleMouseMove(e) {

            const x = (e.clientX / window.innerWidth - 0.5) * -20;
            const y = (e.clientY / window.innerHeight - 0.5) * -20;

            setOffset({ x, y });
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () =>
            window.removeEventListener("mousemove", handleMouseMove);

    }, []);

    return (
        <>
            <div className="radial-float">
                <div
                    className="radial-parallax"
                    style={{
                        transform: `translate(${offset.x}px, ${offset.y}px)`
                    }}
                >
                    <div className="radial-menu">

                        <RadialBackground radius={230} />

                        <IconGroup
                            characters={characters}
                            radius={230}
                            onCharacterClick={setSelectedCharacter}
                        />

                    </div>
                </div>
            </div>

            <PasswordGroup
                character={selectedCharacter}
                onClose={() => setSelectedCharacter(null)}
                onSuccess={(character) => {
                    setSelectedCharacter(null);
                    navigate(`/ficha/${character.id}`);
                }}
            />
        </>
    );
}