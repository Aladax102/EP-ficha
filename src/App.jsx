import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { signInAnonymously } from "firebase/auth";
import { auth } from "./firebase";

import CharacterPage from "./pages/CharacterPages";
import HudWrapper from "./pages/HudWrapper";
import Home from "./pages/Home";

function App() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        signInAnonymously(auth)
            .then(() => {
                setReady(true);
            })
            .catch((error) => {
                console.error(
                    "Erro no login anônimo:",
                    error
                );
            });
    }, []);

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