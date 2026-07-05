import { useEffect, useRef } from 'react';
import './CursorGlow.css';

// A thin, small glowing dot that follows the cursor, with a softer
// blurred halo trailing slightly behind it for an ambient glow feel.
function CursorGlow() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Skip on touch-only devices — there is no real cursor to track.
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    let glowX = 0;
    let glowY = 0;
    let targetX = 0;
    let targetY = 0;
    let rafId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
    };

    // Lerp the halo toward the cursor for a smooth trailing glow.
    const animate = () => {
      glowX += (targetX - glowX) * 0.15;
      glowY += (targetY - glowY) * 0.15;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="cursor-glow-wrapper" aria-hidden="true">
      <div ref={glowRef} className="cursor-halo" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}

export default CursorGlow;
