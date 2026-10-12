"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, RoundedBox, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function CharacterRig() {
  const rig = useRef<THREE.Group>(null);
  const eyes = useRef<THREE.Group>(null);
  useFrame(({ clock, pointer }) => {
    if (!rig.current || !eyes.current) return;
    rig.current.rotation.y = THREE.MathUtils.lerp(rig.current.rotation.y, pointer.x * 0.28, 0.06);
    rig.current.rotation.x = THREE.MathUtils.lerp(rig.current.rotation.x, -pointer.y * 0.12, 0.06);
    rig.current.position.y = Math.sin(clock.elapsedTime * 1.4) * 0.08;
    eyes.current.rotation.y = THREE.MathUtils.lerp(eyes.current.rotation.y, pointer.x * 0.2, 0.08);
  });

  return (
    <group ref={rig} position={[0, -0.25, 0]}>
      <Float speed={1.4} rotationIntensity={0.08} floatIntensity={0.2}>
        <mesh position={[0, -1.35, 0]} rotation={[0, 0, 0.08]}>
          <capsuleGeometry args={[0.7, 1.2, 8, 24]} />
          <meshToonMaterial color="#ff6b4a" />
        </mesh>
        <RoundedBox args={[1.65, 0.28, 0.45]} radius={0.12} position={[0, -2.02, 0.15]}>
          <meshToonMaterial color="#1b3cff" />
        </RoundedBox>
        <mesh position={[-0.92, -1.28, 0]} rotation={[0, 0, -0.45]}>
          <capsuleGeometry args={[0.17, 0.75, 6, 12]} />
          <meshToonMaterial color="#ff6b4a" />
        </mesh>
        <mesh position={[0.92, -1.28, 0]} rotation={[0, 0, 0.45]}>
          <capsuleGeometry args={[0.17, 0.75, 6, 12]} />
          <meshToonMaterial color="#ff6b4a" />
        </mesh>
        <Sphere args={[1.05, 32, 20]} position={[0, 0.35, 0]}>
          <meshToonMaterial color="#ffd9ad" />
        </Sphere>
        <mesh position={[0, 1.18, 0]} rotation={[0, 0, -0.12]}>
          <capsuleGeometry args={[0.45, 0.5, 6, 12]} />
          <meshToonMaterial color="#1b3cff" />
        </mesh>
        <group ref={eyes} position={[0, 0.42, 0.92]}>
          <Sphere args={[0.14, 16, 12]} position={[-0.34, 0, 0]}><meshToonMaterial color="#141414" /></Sphere>
          <Sphere args={[0.14, 16, 12]} position={[0.34, 0, 0]}><meshToonMaterial color="#141414" /></Sphere>
          <Sphere args={[0.04, 10, 8]} position={[-0.3, 0.05, 0.12]}><meshBasicMaterial color="#fff8ed" /></Sphere>
          <Sphere args={[0.04, 10, 8]} position={[0.38, 0.05, 0.12]}><meshBasicMaterial color="#fff8ed" /></Sphere>
        </group>
        <mesh position={[0, -0.05, 0.98]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.28, 0.035, 8, 24, Math.PI]} />
          <meshBasicMaterial color="#141414" />
        </mesh>
      </Float>
    </group>
  );
}

export default function ToonCharacter() {
  return (
    <div className="character-stage" aria-label="An interactive 3D cartoon character">
      <Canvas camera={{ position: [0, 0, 6], fov: 35 }} dpr={[1, 1.5]}>
        <ambientLight intensity={2.2} />
        <directionalLight position={[3, 5, 4]} intensity={3.5} color="#fff3dc" />
        <directionalLight position={[-4, 2, 2]} intensity={2} color="#1b3cff" />
        <CharacterRig />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}

export { CharacterRig };
