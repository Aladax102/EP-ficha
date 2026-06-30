export default function SpecialityGroup({
    value,
    status,
    onValueChange,
    onStatusChange
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