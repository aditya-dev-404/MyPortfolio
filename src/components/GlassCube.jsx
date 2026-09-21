import './hero-effects.css';

// Pure-CSS 3D glass cube that slowly tumbles. Decorative only.
// Position it with className, e.g. "absolute top-10 right-10".
const FACES = [
  'translateZ(var(--half))',
  'rotateY(180deg) translateZ(var(--half))',
  'rotateY(90deg) translateZ(var(--half))',
  'rotateY(-90deg) translateZ(var(--half))',
  'rotateX(90deg) translateZ(var(--half))',
  'rotateX(-90deg) translateZ(var(--half))',
];

export default function GlassCube({ size = 100, duration = 20, className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none [perspective:800px] ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="relative h-full w-full [transform-style:preserve-3d]"
        style={{ '--half': `${size / 2}px`, animation: `cube-spin ${duration}s linear infinite` }}
      >
        {FACES.map((transform, i) => (
          <span
            key={i}
            style={{ transform }}
            className="absolute inset-0 rounded-[12%] border border-white/25 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(124,107,255,0.1))] shadow-[inset_0_0_20px_rgba(34,211,238,0.3)]"
          />
        ))}
      </div>
    </div>
  );
}