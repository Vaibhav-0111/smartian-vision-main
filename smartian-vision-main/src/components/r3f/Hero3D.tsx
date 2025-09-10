import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Center, Float, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const FloatingText = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.1}
      floatIntensity={0.5}
    >
      <Center>
        <Text
          ref={meshRef}
          fontSize={1.5}
          color="#FF8C42"
          anchorX="center"
          anchorY="middle"
        >
          CODERS DABHA
          <meshStandardMaterial
            color="#FF8C42"
            emissive="#FF8C42"
            emissiveIntensity={0.3}
            metalness={0.6}
            roughness={0.3}
          />
        </Text>
      </Center>
    </Float>
  );
};

const ParticleField = () => {
  const count = 100;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#FF8C42"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FF8C42" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#228B22" />
        
        <Environment preset="night" />
        
        <FloatingText />
        <ParticleField />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;