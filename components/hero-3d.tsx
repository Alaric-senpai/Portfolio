"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function KineticOrb() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.x = clock.elapsedTime * 0.12 + pointer.y * 0.15;
    group.current.rotation.y = clock.elapsedTime * 0.18 + pointer.x * 0.2;
  });

  return (
    <group ref={group}>
      <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.7}>
        <Sphere args={[1.42, 64, 64]}>
          <MeshTransmissionMaterial backside samples={4} thickness={0.7} chromaticAberration={0.12} anisotropy={0.4} distortion={0.3} distortionScale={0.25} temporalDistortion={0.12} transmission={1} roughness={0.12} color="#d5ff41" />
        </Sphere>
        <mesh rotation={[Math.PI / 2, 0, 0]} scale={1.52}>
          <torusGeometry args={[1, 0.018, 16, 96]} />
          <meshBasicMaterial color="#f4f1ea" transparent opacity={0.55} />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]} scale={1.75}>
          <torusGeometry args={[1, 0.012, 16, 96]} />
          <meshBasicMaterial color="#ff5d36" transparent opacity={0.55} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.8} />
        <directionalLight position={[3, 4, 4]} intensity={3} color="#f4f1ea" />
        <pointLight position={[-3, -2, 2]} intensity={8} color="#ff5d36" />
        <pointLight position={[3, 1, -1]} intensity={10} color="#d5ff41" />
        <KineticOrb />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}

export { KineticOrb };
