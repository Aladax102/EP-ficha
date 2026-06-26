export default function Bar({
    label,
    value,
    max,
    onChange
}) {

    const percentage = max > 0
        ? (value / max) * 100
        : 0;

    return (
        <div className="bar-container">

            <p>
                {label}: {
                    <input className="bar-input"
                    type="number"
                    min="0"
                    max={max}
                    value={value}
                    onChange={(e) =>
                        onChange(Number(e.target.value))}/>
                }/{max}
            </p>



            <div className={`bar-wrap bar-${label.toLowerCase()}`}>

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