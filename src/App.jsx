import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Scene3D from './components/Scene3D'
import Loader from './components/Loader'

function App() {
  return (
    <div className="relative w-full min-h-screen bg-warhammer-dark">
      {/* 3D Background Canvas */}
      <div className="fixed inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'linear-gradient(to bottom, #0a0a0a, #1a1a2e)' }}
        >
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Contact />
      </div>

      {/* Loading Screen */}
      <Loader />
    </div>
  )
}

export default App
