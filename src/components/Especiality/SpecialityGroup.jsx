export default function SpecialityGroup({
    value,
    bonus,
    onValueChange,
    onBonusChange
}) {
    return (
        <div className="speciality-group">

            <input
                placeholder="Especialidade"
                value={value}
                onChange={(e) =>
                    onValueChange(e.target.value)
                }
            />
        </div>
    );
}