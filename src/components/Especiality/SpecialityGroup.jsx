const statusTexto = {
    2: "Iniciante",
    3: "Intermediário",
    4: "Especialista"
};

export default function SpecialityGroup({
    value,
    nivel,
    onValueChange,
    onLevelChange
}) {
    return (
        <div className="speciality-card">
            <div className="speciality-info">
                <input
                    className="speciality-name"
                    placeholder="Nome da Especialidade"
                    value={value}
                    onChange={(e) =>
                        onValueChange(e.target.value)
                    }
                />

                <span className="speciality-level">
                    ({statusTexto[nivel]})
                </span>
            </div>

            <select
                className="speciality-select"
                value={nivel}
                onChange={(e) =>
                    onLevelChange(Number(e.target.value))
                }
            >
                <option value={2}>+2</option>
                <option value={3}>+3</option>
                <option value={4}>+4</option>
            </select>
        </div>
    );
}