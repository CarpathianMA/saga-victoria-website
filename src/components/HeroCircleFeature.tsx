interface AnchorPoint {
  label: string
  /** SVG angle, 0° = 3 o'clock, clockwise */
  angle: number
}

const ANCHORS: AnchorPoint[] = [
  { label: 'Enchating', angle: 144 },
  { label: 'Unique', angle: 180 },
  { label: 'Rejuvenate', angle: 216 },
]

const W = 460
const H = 320
const CX = 278
const CY = 160
const R_INNER = 128
const R_OUTER = R_INNER + 22
const LINE = 68
const GAP_TEXT = 14
const DOT_R = 4

function polar(r: number, angle: number) {
  const rad = (angle * Math.PI) / 180
  return {
    x: CX + r * Math.cos(rad),
    y: CY + r * Math.sin(rad),
  }
}

export default function HeroCircleFeature() {
  const imgRight = W - CX - R_INNER

  return (
    <div
      className="relative shrink-0 max-md:scale-[0.82] max-md:origin-top-right"
      style={{ width: W, height: H }}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        aria-hidden="true"
      >
        {/* Outer fine circle, dots sit on this ring */}
        <circle
          cx={CX}
          cy={CY}
          r={R_OUTER}
          stroke="white"
          strokeWidth="0.75"
          opacity="0.45"
        />

        {ANCHORS.map(({ label, angle }) => {
          const dot = polar(R_OUTER, angle)
          const lineStart = dot.x - LINE

          return (
            <g key={label}>
              <line
                x1={lineStart}
                y1={dot.y}
                x2={dot.x}
                y2={dot.y}
                stroke="white"
                strokeWidth="0.85"
                opacity="0.8"
              />
              <circle cx={dot.x} cy={dot.y} r={DOT_R} fill="white" />
              <text
                x={lineStart - GAP_TEXT}
                y={dot.y}
                fill="white"
                fontSize="14"
                fontWeight="500"
                fontFamily="Inter, sans-serif"
                textAnchor="end"
                dominantBaseline="middle"
              >
                {label}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Inner circle, image + thicker border */}
      <div
        className="absolute top-1/2 overflow-hidden rounded-full border-[1.5px] border-white/95"
        style={{
          right: imgRight,
          width: R_INNER * 2,
          height: R_INNER * 2,
          transform: 'translateY(-50%)',
        }}
      >
        <img
          src="/images/hero-circle.jpg"
          alt="Comfort room preview"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
