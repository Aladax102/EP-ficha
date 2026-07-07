export default function Bar({
    label,
    value,
    max,
    onChange,
    onMaxChange
}) {
    const percentage =
        max > 0
            ? (value / max) * 100
            : 0;

    return (
        <div className="bar-container">
            <p className="bar-values">
                {label}
                <input
                    className="bar-input"
                    type="number"
                    min="0"
                    value={value}
                    onChange={(e) =>
                        onChange(Number(e.target.value))
                    }
                />

                /

                <input
                    className="bar-input"
                    type="number"
                    min="0"
                    value={max}
                    onChange={(e) =>
                        onMaxChange(
                            Number(e.target.value)
                        )
                    }
                />
            </p>

            <div
                className={`bar-wrap bar-${label.toLowerCase()}`}
            >
                <div
                    className="bar-fill"
                    style={{
                        width: `${percentage}%`
                    }}
                />
            </div>
        </div>
    );
}