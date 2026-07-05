import { useState } from "react";
import "../../../styles/passwordPanel.css"

export default function PasswordGroup({
    character,
    onClose,
    onSuccess
}) {
    const [password, setPassword] = useState("");

    if (!character) return null;

    function normalize(text) {
        return text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
    }

    function verifyPassword() {

        if (normalize(password) === normalize(character.password)) {
            onSuccess(character);
            setPassword("");
        } else {
            alert("Senha incorreta");
        }
    }

    return (
        <div className="password-overlay">

            <div className="password-panel">

                <h2>{character.nome}</h2>

            <input
                type="password"
                placeholder="Digite a senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        verifyPassword();
                    }
                }}
            />

                <div className="password-buttons">

                    <button onClick={verifyPassword}>
                        Entrar
                    </button>

                    <button onClick={onClose}>
                        Cancelar
                    </button>

                </div>

            </div>

        </div>
    );
}