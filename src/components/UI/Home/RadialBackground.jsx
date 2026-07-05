export default function RadialBackground({ radius }) {

    return (
        <svg
            className="radial-svg"
            viewBox="-350 -350 700 700"
        >

            <circle
                r={radius}
                fill="none"
                stroke="rgba(255,255,255,.12)"
                strokeWidth="1"
            />

            <circle
                r="40"
                fill="none"
                stroke="rgba(255,255,255,.2)"
                strokeWidth="1"
            />
        </svg>
    );
}