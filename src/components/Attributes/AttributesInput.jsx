export default function AttributeInput({
    className,
    label,
    shortLabel,
    value,
    onChange
}) {
    return (
        <div className={className}>
            <div className="attribute-row">
                    <label className="atributeText">{label}</label>

                    <span className="attribute-short">
                        {shortLabel}
                    </span>

                    <input
                        className="aspect-input"
                        type="number"
                        value={value}
                        onChange={(e) =>
                            onChange(Number(e.target.value))
                        }
                    />
            </div>
        </div>
    );
}