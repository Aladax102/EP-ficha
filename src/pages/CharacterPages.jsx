import { CharacterProvider } from "../context/CharacterContext";
import CharacterSheet from "./CharacterSheet";

export default function CharacterPage() {
    return (
        <CharacterProvider>
            <CharacterSheet />
        </CharacterProvider>
    );
}