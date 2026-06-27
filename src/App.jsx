import { Routes, Route } from "react-router-dom";
import CharacterPage from "./pages/CharacterPages";

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

        </Routes>
    );
}

export default App;