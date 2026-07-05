import { Routes, Route } from "react-router-dom";
import CharacterPage from "./pages/CharacterPages";
import HudWrapper from "./pages/HudWrapper";
import Home from "./pages/Home";

function App() {
    return (
        <Routes>

            {/* Página principal */}
            <Route
                path="/"
                element={<Home />}
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