import { Routes, Route } from "react-router-dom";
import CharacterPage from "./pages/CharacterPages";
import HudWrapper from "./pages/HudWrapper";

function App() {
    return (
        <Routes>

            {/* Página principal */}
            <Route
                path="/"
                element={<CharacterPage />}
            />

            {/* Fichas individuais */}
            <Route
                path="/ficha/:id"
                element={<CharacterPage />}
            />

            <Route
                path="/hud/:id"
                element={<HudWrapper />}
            />

        </Routes>
    );
}

export default App;