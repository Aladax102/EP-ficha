export default function AttributeInput({
    className,
    label,
    value,
    onChange
}) {
    return (
        <div className={className}>
            <div className="aspect-row">
                <label>{label}</label>

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