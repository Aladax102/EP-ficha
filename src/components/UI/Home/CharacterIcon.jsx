import { Link } from "react-router-dom";

export default function CharacterIcon({
    character,
    x,
    y,
    onCharacterClick
}) {
    return(
            <Link
                className="character-icon"
                to="#"
                onClick={(e) => {
                    e.preventDefault();
                    onCharacterClick(character);
                }}
                style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`
                }}
            >

            <img src={character.image}/>

            <span>

                {character.nome}

            </span>

        </Link>
    );
}