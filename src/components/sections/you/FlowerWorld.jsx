import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ScrollControls, useScroll, Float, Text, Scroll } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, DepthOfField } from '@react-three/postprocessing';
import * as THREE from 'three';

import Lily3D from './Lily3D';
import Tulip3D from './Tulip3D';
import ParticleField from './ParticleField';

// A single floating flower that reacts to the scroll position
const ScrollResponsiveFlower = ({ isLily, position, rotation, scale, offset, speed, color }) => {
  const ref = useRef();
  const scroll = useScroll();

  useFrame(() => {
    if (!ref.current) return;
    
    // Calculate how visible this flower should be based on scroll
    // 'offset' is where it appears (0 to 1)
    const currentScroll = scroll.offset;
    const distance = currentScroll - offset;
    
    // Animate scale (bloom) and Y position based on scroll progress
    if (distance > -0.2 && distance < 0.4) {
      // It's in the active zone
      const progress = Math.max(0, Math.min(1, (distance + 0.2) / 0.3));
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      
      const targetScale = scale * ease;
      ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      const targetY = position[1] + (distance * speed * 20);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, 0.05);
      
      // Fade out at the very end
      if (currentScroll > 0.85 && offset !== 0) { // Keep the first one around longer or let it fade?
         const fadeOut = Math.max(0, 1 - ((currentScroll - 0.85) / 0.15));
         ref.current.scale.lerp(new THREE.Vector3(targetScale * fadeOut, targetScale * fadeOut, targetScale * fadeOut), 0.1);
      }
    } else if (distance <= -0.2) {
      ref.current.scale.set(0.001, 0.001, 0.001);
    }
  });

  return (
    <group ref={ref} position={position} rotation={rotation}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {isLily ? <Lily3D /> : <Tulip3D color={color} />}
      </Float>
    </group>
  );
};

const CinematicCamera = () => {
  const { camera, pointer } = useThree();
  const scroll = useScroll();
  const targetPos = useRef(new THREE.Vector3(0, 2, 12));
  const targetLook = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    const s = scroll.offset;

    // Scroll sequence camera choreo
    if (s < 0.2) {
      // Scene 1: Initial flower
      targetPos.current.set(0 + pointer.x * 0.5, 2 + pointer.y * 0.5, 12);
      targetLook.current.set(0, 1, 0);
    } else if (s < 0.5) {
      // Scene 2: Moving into the field
      const p = (s - 0.2) / 0.3;
      targetPos.current.set(pointer.x * 2, 2 + p * 2 + pointer.y, 12 - (p * 15));
      targetLook.current.set(0, 1, -p * 10);
    } else if (s < 0.8) {
      // Scene 4: Deep in the field, looking around
      const p = (s - 0.5) / 0.3;
      targetPos.current.set(pointer.x * 3, 4 + p * 5 + pointer.y, -3 + p * 2);
      targetLook.current.set(pointer.x * 5, 0, -10);
    } else {
      // Scene 5 & 6: Rising above, fading to final message
      const p = (s - 0.8) / 0.2;
      targetPos.current.set(0 + pointer.x * 0.5, 9 + p * 5 + pointer.y, -1 + p * 5);
      targetLook.current.set(0, 5, -10);
    }

    camera.position.lerp(targetPos.current, 0.03);
    
    // Smooth lookAt
    const currentLookAt = new THREE.Vector3(0,0,-1).applyQuaternion(camera.quaternion).add(camera.position);
    currentLookAt.lerp(targetLook.current, 0.05);
    camera.lookAt(currentLookAt);
  });
  return null;
};

const HTMLOverlay = () => {
  const scroll = useScroll();
  const [step, setStep] = useState(0);

  useFrame(() => {
    const s = scroll.offset;
    if (s < 0.1) setStep(0);
    else if (s < 0.3) setStep(1);
    else if (s < 0.5) setStep(2);
    else if (s < 0.7) setStep(3);
    else if (s < 0.9) setStep(4);
    else setStep(5);
  });

  return (
    <div className="you-html-overlay">
      <div className={`text-layer ${step === 0 ? 'visible' : ''}`}>YOU</div>
      <div className={`text-layer ${step === 1 ? 'visible' : ''}`}>for you.</div>
      <div className={`text-layer ${step === 2 ? 'visible' : ''}`}>you like lilies.</div>
      <div className={`text-layer ${step === 3 ? 'visible' : ''}`}>and tulips.</div>
      <div className={`text-layer ${step === 4 ? 'visible' : ''}`}>so I made you a whole garden.</div>
      <div className={`text-layer final-layer ${step === 5 ? 'visible' : ''}`}>
        <h1>happy birthday, Rakshanda.</h1>
        <p>may there always be beautiful things waiting for you.</p>
        <p className="urdu-text">اللہ ہمیشہ تمہاری حفاظت کرے</p>
      </div>
    </div>
  );
};

const Garden = () => {
  // Generate random data for a bunch of flowers
  const flowersData = useMemo(() => {
    const data = [];
    // The hero flower
    data.push({ isLily: true, pos: [0, 0, 0], rot: [0, 0, 0], scale: 1.2, offset: 0, speed: 0.5, color: '#fff' });
    
    // The field
    const colors = ['#f5e1e5', '#fffff8', '#dca7b3', '#fff0f3'];
    for (let i = 0; i < 60; i++) {
      const isLily = Math.random() > 0.5;
      const x = (Math.random() - 0.5) * 40;
      const z = (Math.random() - 0.5) * 40 - 5; // offset slightly back
      const y = Math.random() * -2; // slightly buried or floating
      const rotY = Math.random() * Math.PI * 2;
      const scale = 0.5 + Math.random() * 0.7;
      // Appear based on z distance (further back = later)
      const offset = 0.1 + (Math.abs(z + 5) / 45) * 0.6; 
      const color = colors[Math.floor(Math.random() * colors.length)];
      data.push({ isLily, pos: [x, y, z], rot: [0, rotY, 0], scale, offset, speed: Math.random(), color });
    }
    return data;
  }, []);

  return (
    <group>
      {flowersData.map((data, i) => (
        <ScrollResponsiveFlower 
          key={i}
          isLily={data.isLily}
          position={data.pos}
          rotation={data.rot}
          scale={data.scale}
          offset={data.offset}
          speed={data.speed}
          color={data.color}
        />
      ))}
    </group>
  );
};

export default function FlowerWorld() {
  return (
    <>
      <div className="back-nav">
        <a href="/">← back</a>
      </div>
      
      <Canvas 
        gl={{ antialias: false, toneMapping: THREE.ACESFilmicToneMapping }}
        camera={{ position: [0, 2, 12], fov: 45 }}
        dpr={[1, 2]} // limit dpr for performance
      >
        <color attach="background" args={['#030303']} />
        
        {/* Cinematic Lighting */}
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 10, 5]} intensity={0.5} color="#ffd6e8" />
        <pointLight position={[0, 2, 0]} intensity={1} distance={10} color="#fffff8" />
        
        <ScrollControls pages={6} damping={0.2}>
          <CinematicCamera />
          <Garden />
          <ParticleField count={1500} scale={40} />
          
          <Scroll html style={{ width: '100%', height: '100%' }}>
            <HTMLOverlay />
          </Scroll>
        </ScrollControls>

        {/* Post Processing */}
        <EffectComposer disableNormalPass multisampling={4}>
          <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} intensity={1.5} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
          {/* DepthOfField is very heavy, using carefully */}
          <DepthOfField focusDistance={0.01} focalLength={0.02} bokehScale={2} height={480} />
        </EffectComposer>
      </Canvas>
    </>
  );
}
