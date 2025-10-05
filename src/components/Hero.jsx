import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Content */}
      <div className="max-w-6xl mx-auto text-center">
        {/* Title with gothic styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.h1
              className="font-gothic text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-warhammer-gold via-warhammer-bronze to-warhammer-gold mb-4"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              NILABH DEKA
            </motion.h1>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-warhammer-gold to-warhammer-blood opacity-20 blur-2xl -z-10"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mb-6"
        >
          <h2 className="font-gothic text-3xl md:text-5xl text-warhammer-gold tracking-wider">
            BACKEND ENGINEER
          </h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-warhammer-gold to-transparent mx-auto mt-4"
            animate={{
              scaleX: [0.8, 1, 0.8],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="font-body text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          Forged in the fires of innovation, wielding 3 years of battle-tested experience
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="font-body text-lg md:text-xl text-warhammer-bronze max-w-2xl mx-auto mb-12"
        >
          Specializing in Backend • Hosting • Frameworks • DL & RL • Auth • Databases
        </motion.p>

        {/* Institution badge */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="inline-block"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-warhammer-gold via-warhammer-blood to-warhammer-bronze rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative px-8 py-4 bg-warhammer-imperial rounded-lg border-2 border-warhammer-gold">
              <p className="font-gothic text-lg text-warhammer-gold">
                Scaler School of Technology
              </p>
              <p className="font-body text-sm text-gray-400 mt-1">
                1st Year • Rising Through the Ranks
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="relative px-8 py-6 border-l-4 border-warhammer-gold bg-black bg-opacity-30 backdrop-blur-sm">
            <p className="font-gothic text-lg italic text-gray-300">
              "Currently in a tier 3 college but working my way through to get the best out of me"
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-10 h-10 text-warhammer-gold" />
      </motion.button>
    </section>
  )
}
