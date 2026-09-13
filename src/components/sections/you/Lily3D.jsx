import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export default function Lily3D({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  const groupRef = useRef();

  // Procedural geometry for a single curved lily petal
  const petalGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    // Start at bottom center
    shape.moveTo(0, 0);
    // Curve out and up to the side
    shape.bezierCurveTo(0.5, 0.2, 0.8, 1.5, 0, 3);
    // Curve back down the other side
    shape.bezierCurveTo(-0.8, 1.5, -0.5, 0.2, 0, 0);

    const extrudeSettings = {
      depth: 0.02,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 2,
      bevelSize: 0.01,
      bevelThickness: 0.01
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    // Curve the petal slightly backwards along the Z axis
    const pos = geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      // Bend backwards quadratically based on height
      const zOffset = -Math.pow(y / 2, 2) * 0.5;
      pos.setZ(i, pos.getZ(i) + zOffset);
    }
    geometry.computeVertexNormals();
    geometry.center();
    // Shift origin back to the base of the petal
    geometry.translate(0, 1.5, 0); 
    return geometry;
  }, []);

  const petalMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: '#fffff8',
      emissive: '#1a0d10', // slight warm glow
      emissiveIntensity: 0.1,
      roughness: 0.4,
      metalness: 0.1,
      transmission: 0.6, // slight translucency
      thickness: 0.5,
      side: THREE.DoubleSide
    });
  }, []);

  // 6 petals arranged in a circle
  const numPetals = 6;
  const petals = Array.from({ length: numPetals }).map((_, i) => {
    const angle = (i / numPetals) * Math.PI * 2;
    // Alternate opening angle slightly
    const tilt = (Math.PI / 4) + (i % 2 === 0 ? 0.1 : -0.1); 
    return (
      <mesh
        key={`petal-${i}`}
        geometry={petalGeometry}
        material={petalMaterial}
        rotation={[tilt, 0, 0]}
        position={[
          Math.sin(angle) * 0.1,
          0,
          Math.cos(angle) * 0.1
        ]}
      />
    );
  });

  // Stamen in the center
  const stamenGeometry = useMemo(() => new THREE.CylinderGeometry(0.02, 0.02, 1.5, 8), []);
  const stamenMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: '#c4a45a' }), []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Very subtle organic swaying
      const t = clock.getElapsedTime();
      groupRef.current.rotation.z = Math.sin(t * 0.5 + position[0]) * 0.05;
      groupRef.current.rotation.x = rotation[0] + Math.cos(t * 0.4 + position[2]) * 0.05;
    }
  });

  return (
    <group position={position} scale={scale} rotation={rotation} ref={groupRef}>
      {/* Container to rotate individual petals correctly */}
      {Array.from({ length: numPetals }).map((_, i) => {
        const angle = (i / numPetals) * Math.PI * 2;
        return (
          <group key={`p-container-${i}`} rotation={[0, angle, 0]}>
            {petals[i]}
          </group>
        );
      })}
      
      {/* Central Stamen */}
      <group position={[0, 0.75, 0]}>
        <mesh geometry={stamenGeometry} material={stamenMaterial} rotation={[0.1, 0, 0.1]} position={[0.05, 0, 0]} />
        <mesh geometry={stamenGeometry} material={stamenMaterial} rotation={[-0.1, 0, -0.1]} position={[-0.05, 0, 0]} />
        <mesh geometry={stamenGeometry} material={stamenMaterial} rotation={[0.1, 0, -0.1]} position={[0, 0, 0.05]} />
      </group>

      {/* Stem */}
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[0.05, 0.08, 4, 8]} />
        <meshStandardMaterial color="#2d4026" roughness={0.8} />
      </mesh>
    </group>
  );
}
