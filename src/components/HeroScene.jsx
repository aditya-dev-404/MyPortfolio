import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import { MathUtils } from 'three';

// Scene color comes from --accent-2 in index.css,
// so changing the theme there updates the 3D scene too.

// Slowly tilts the whole scene toward the mouse for a parallax feel.
function Rig({ children }) {
  const group = useRef();
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y = MathUtils.damp(group.current.rotation.y, state.pointer.x * 0.35, 3, delta);
    group.current.rotation.x = MathUtils.damp(group.current.rotation.x, -state.pointer.y * 0.2, 3, delta);
  });
  return <group ref={group}>{children}</group>;
}

// Wireframe torus knot — the "net" shape. Spins slowly on its own.
function Spinner({ position, scale = 1, speed = 0.12, color, children }) {
  const mesh = useRef();
  useFrame((_, delta) => {
    mesh.current.rotation.x += delta * speed;
    mesh.current.rotation.y += delta * speed * 1.3;
  });
  return (
    <Float speed={0.8} rotationIntensity={0.25} floatIntensity={0.8}>
      <mesh ref={mesh} position={position} scale={scale}>
        {children}
        <meshStandardMaterial color={color} wireframe transparent opacity={0.55} />
      </mesh>
    </Float>
  );
}

function Scene({ isMobile, colors }) {
  const { secondary: SECONDARY } = colors;
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-6, -3, 2]} intensity={1} color={SECONDARY} />

      <Rig>
        {/* Wireframe torus knot, centered, far back */}
        <Spinner position={[0, 0, -7]} scale={isMobile ? 1.8 : 2.8} color={SECONDARY}>
          <torusKnotGeometry args={[0.8, 0.25, 128, 16]} />
        </Spinner>
      </Rig>

      <Sparkles count={isMobile ? 40 : 90} scale={[14, 8, 6]} size={2.5} speed={0.4} color={SECONDARY} />
    </>
  );
}

export default function HeroScene() {
  const isMobile = useMemo(() => window.matchMedia('(max-width: 768px)').matches, []);
  const reduceMotion = useMemo(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);
  const colors = useMemo(() => {
    const css = getComputedStyle(document.documentElement);
    return {
      secondary: css.getPropertyValue('--accent-2').trim() || '#22d3ee',
    };
  }, []);

  if (reduceMotion) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: !isMobile }}
      // Canvas sits behind the content, so listen for mouse on the whole page.
      eventSource={document.body}
      eventPrefix="client"
    >
      <Scene isMobile={isMobile} colors={colors} />
    </Canvas>
  );
}