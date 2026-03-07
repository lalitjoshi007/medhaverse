"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const CORE_COLOR = "#22D3EE";
const RING_COLOR = "#8b5cf6";
const PLANET_COLORS = ["#22D3EE", "#A78BFA", "#5247e6", "#2563EB", "#6D28D9"];

function Core() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.2;
  });
  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial
        color={CORE_COLOR}
        emissive={CORE_COLOR}
        emissiveIntensity={0.8}
        wireframe={false}
      />
    </mesh>
  );
}

function OrbitRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ring1.current) ring1.current.rotation.x = Math.PI / 2 + delta * 0.15;
    if (ring2.current) ring2.current.rotation.z += delta * 0.1;
  });
  return (
    <>
      <mesh ref={ring1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.03, 8, 64]} />
        <meshBasicMaterial color={RING_COLOR} transparent opacity={0.7} />
      </mesh>
      <mesh ref={ring2} rotation={[0, 0, Math.PI / 3]}>
        <torusGeometry args={[2.8, 0.02, 8, 64]} />
        <meshBasicMaterial color={CORE_COLOR} transparent opacity={0.5} />
      </mesh>
    </>
  );
}

function Planet({
  radius,
  distance,
  color,
  speed,
  scaleProgress,
  orbitProgress,
  segmentIndex,
}: {
  radius: number;
  distance: number;
  color: string;
  speed: number;
  scaleProgress: number;
  orbitProgress: number;
  segmentIndex: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const angle = segmentIndex * (Math.PI * 2 / 5) + orbitProgress * Math.PI * 2;
  const x = Math.cos(angle) * distance;
  const z = Math.sin(angle) * distance;

  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.3;
  });

  return (
    <group position={[x, 0, z]}>
      <mesh ref={mesh} scale={scaleProgress}>
        <icosahedronGeometry args={[radius, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}

function CameraRig({ progress }: { progress: number }) {
  const { camera } = useThree();
  const targetZ = 3 + progress * 12;
  useFrame(() => {
    camera.position.lerp(new THREE.Vector3(0, 0, targetZ), 0.03);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  });
  return null;
}

function SceneContent({
  scaleProgress,
  orbitProgress,
  cameraProgress,
}: {
  scaleProgress: number;
  orbitProgress: number;
  cameraProgress: number;
}) {
  const planets = [
    { radius: 0.25, distance: 4, color: PLANET_COLORS[0], segmentIndex: 0 },
    { radius: 0.2, distance: 5, color: PLANET_COLORS[1], segmentIndex: 1 },
    { radius: 0.22, distance: 5.5, color: PLANET_COLORS[2], segmentIndex: 2 },
    { radius: 0.18, distance: 4.5, color: PLANET_COLORS[3], segmentIndex: 3 },
    { radius: 0.2, distance: 5.2, color: PLANET_COLORS[4], segmentIndex: 4 },
  ];

  return (
    <>
      <CameraRig progress={cameraProgress} />
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} color={CORE_COLOR} />
      <pointLight position={[5, 5, 5]} intensity={0.5} />
      <Core />
      <OrbitRings />
      {planets.map((p, i) => (
        <Planet
          key={i}
          radius={p.radius}
          distance={p.distance}
          color={p.color}
          speed={0.2}
          scaleProgress={scaleProgress}
          orbitProgress={orbitProgress}
          segmentIndex={p.segmentIndex}
        />
      ))}
    </>
  );
}

function Fallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#020617]">
      <div className="w-10 h-10 border-2 border-ai-cyan border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

interface UniverseSceneProps {
  visible: boolean;
  scaleProgress: number; // 0..1 planet scale-in
  orbitProgress: number; // 0..1 orbit position
  cameraProgress: number; // 0..1 zoom out
}

export default function UniverseScene({
  visible,
  scaleProgress,
  orbitProgress,
  cameraProgress,
}: UniverseSceneProps) {
  if (!visible) return null;

  return (
    <div className="absolute inset-0 bg-[#020617]">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        gl={{ antialias: true, alpha: false, powerPreference: "low-power" }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <SceneContent
            scaleProgress={scaleProgress}
            orbitProgress={orbitProgress}
            cameraProgress={cameraProgress}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
