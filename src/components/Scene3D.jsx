import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Gothic Skull-like floating object
function GothicOrb({ position, scale = 1 }) {
  const meshRef = useRef()
  const time = useRef(0)

  useFrame((state, delta) => {
    time.current += delta
    meshRef.current.rotation.x = Math.sin(time.current * 0.3) * 0.2
    meshRef.current.rotation.y += delta * 0.2
    meshRef.current.position.y = position[1] + Math.sin(time.current * 0.5) * 0.3
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#d4af37"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

// Floating geometric shapes - representing Imperial Gothic architecture
function ImperialGeometry({ position, rotation, scale = 1 }) {
  const meshRef = useRef()

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1
    meshRef.current.rotation.y += delta * 0.15
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <octahedronGeometry args={[0.5, 0]} />
      <meshStandardMaterial
        color="#8b0000"
        metalness={0.9}
        roughness={0.1}
        emissive="#8b0000"
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

// Particle field
function Particles({ count = 500 }) {
  const points = useRef()

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25
    }
    return positions
  }, [count])

  useFrame((state, delta) => {
    points.current.rotation.y += delta * 0.05
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#d4af37"
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  )
}

export default function Scene3D() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#d4af37" />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#8b0000" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#d4af37" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        color="#cd7f32"
      />

      {/* Stars background */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* Gothic Orbs */}
      <GothicOrb position={[-3, 2, -2]} scale={0.8} />
      <GothicOrb position={[3, -1, -3]} scale={0.6} />
      <GothicOrb position={[0, 3, -4]} scale={0.5} />

      {/* Imperial Geometries */}
      <ImperialGeometry position={[-4, -2, -1]} rotation={[0, 0, 0]} scale={0.7} />
      <ImperialGeometry position={[4, 1, -2]} rotation={[0.5, 0.5, 0]} scale={0.5} />
      <ImperialGeometry position={[2, -3, -3]} rotation={[1, 0, 0.5]} scale={0.6} />
      <ImperialGeometry position={[-2, 4, -2]} rotation={[0, 1, 0]} scale={0.4} />

      {/* Particles */}
      <Particles count={800} />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}
