import { CharacterProvider } from "../context/CharacterContext";
import HudPage from "./HudPage";

export default function HudWrapper() {
    return (
        <CharacterProvider>
            <HudPage />
        </CharacterProvider>
    );
}