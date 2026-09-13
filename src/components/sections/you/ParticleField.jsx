import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

export default function ParticleField({ count = 2000, scale = 50, speed = 0.2 }) {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime();
      // Extremely slow, elegant rotation of the entire particle field
      groupRef.current.rotation.y = t * 0.02 * speed;
      groupRef.current.rotation.x = Math.sin(t * 0.01) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Dense tiny particles */}
      <Sparkles 
        count={count} 
        scale={scale} 
        size={1.5} 
        speed={speed} 
        opacity={0.3} 
        noise={0.1}
        color="#ffffff"
      />
      {/* Scattered larger glowing pollen/dust */}
      <Sparkles 
        count={count / 10} 
        scale={scale * 1.2} 
        size={3} 
        speed={speed * 1.5} 
        opacity={0.8} 
        noise={0.5}
        color="#f5e1e5"
      />
      {/* Very distant background stars */}
      <Sparkles 
        count={count / 2} 
        scale={scale * 2} 
        size={1} 
        speed={0.01} 
        opacity={0.2} 
        color="#ffffff"
      />
    </group>
  );
}
