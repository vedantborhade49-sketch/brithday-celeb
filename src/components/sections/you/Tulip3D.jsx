import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export default function Tulip3D({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0], color = '#f5e1e5' }) {
  const groupRef = useRef();

  // Procedural geometry for a rounded tulip cup petal
  const petalGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    // Plump bottom, converging to a slightly rounded tip
    shape.bezierCurveTo(0.6, 0.5, 0.7, 1.8, 0, 2.5);
    shape.bezierCurveTo(-0.7, 1.8, -0.6, 0.5, 0, 0);

    const extrudeSettings = {
      depth: 0.05,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 3,
      bevelSize: 0.02,
      bevelThickness: 0.02
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    // Cup curvature (bending inward towards center)
    const pos = geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      // Curve inwards along Z
      const zOffset = Math.sin((y / 2.5) * Math.PI) * 0.4; 
      pos.setZ(i, pos.getZ(i) + zOffset);
    }
    
    geometry.computeVertexNormals();
    geometry.center();
    geometry.translate(0, 1.25, 0); // Origin at base
    return geometry;
  }, []);

  const petalMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: color,
      roughness: 0.3,
      metalness: 0.1,
      transmission: 0.4, // tulips are slightly less translucent than lilies
      thickness: 0.8,
      side: THREE.DoubleSide,
      clearcoat: 0.1
    });
  }, [color]);

  // 6 overlapping petals to form the cup
  const numPetals = 6;

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Subtle swaying
      const t = clock.getElapsedTime();
      groupRef.current.rotation.z = Math.sin(t * 0.4 + position[2]) * 0.03;
      groupRef.current.rotation.x = rotation[0] + Math.cos(t * 0.3 + position[0]) * 0.03;
    }
  });

  return (
    <group position={position} scale={scale} rotation={rotation} ref={groupRef}>
      {Array.from({ length: numPetals }).map((_, i) => {
        const angle = (i / numPetals) * Math.PI * 2;
        // Inner and outer rings of petals
        const isInner = i % 2 === 0;
        const radius = isInner ? 0.05 : 0.1;
        const tilt = isInner ? 0.1 : 0.2; // Tighter at top
        
        return (
          <group key={`t-container-${i}`} rotation={[0, angle, 0]}>
            <mesh
              geometry={petalGeometry}
              material={petalMaterial}
              rotation={[tilt, 0, 0]}
              position={[0, 0, radius]}
            />
          </group>
        );
      })}

      {/* Stem */}
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 4, 8]} />
        <meshStandardMaterial color="#3a5232" roughness={0.7} />
      </mesh>
    </group>
  );
}
