import CharacterIcon from "./CharacterIcon";

    export default function IconGroup({
        characters,
        radius,
        onCharacterClick
    }){

    return(
        <>
            {
                characters.map((character,index)=>{

                    const angle =
                        index * (360 / characters.length);

                    const rad =
                        angle * Math.PI / 180;

                    const x =
                        Math.cos(rad-Math.PI/2)*radius;

                    const y =
                        Math.sin(rad-Math.PI/2)*radius;

                    return(
                        <CharacterIcon
                            key={character.id}
                            character={character}
                            x={x}
                            y={y}
                            onCharacterClick={onCharacterClick}
                        />
                    )
                })
            }
        </>
    )
}