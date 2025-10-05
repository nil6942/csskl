import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Sword, Zap } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const achievements = [
    {
      icon: Shield,
      title: "3 Years Experience",
      description: "Battle-hardened in the tech industry",
    },
    {
      icon: Sword,
      title: "Backend Specialist",
      description: "Master of server-side architecture",
    },
    {
      icon: Zap,
      title: "Full Stack Arsenal",
      description: "Backend, Hosting, Frameworks, DL, RL, Auth, DB",
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Section title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="font-gothic text-5xl md:text-7xl font-bold text-warhammer-gold mb-4">
            THE WARRIOR'S PATH
          </h2>
          <motion.div
            className="w-48 h-1 bg-gradient-to-r from-transparent via-warhammer-gold to-transparent mx-auto"
            animate={{
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Main content */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="relative bg-black bg-opacity-40 backdrop-blur-lg rounded-lg border-2 border-warhammer-gold p-8 md:p-12">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-warhammer-gold/5 to-warhammer-blood/5 rounded-lg pointer-events-none"></div>
            <div className="relative z-10">
              <p className="font-body text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
                In the grim darkness of the tech industry, there is only{' '}
                <span className="text-warhammer-gold font-semibold">innovation</span>. 
                A first-year warrior at the <span className="text-warhammer-gold font-semibold">Scaler School of Technology</span>, 
                I wield three years of combat experience in the digital realm.
              </p>
              <p className="font-body text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
                My arsenal includes the ancient arts of{' '}
                <span className="text-warhammer-bronze font-semibold">Backend Engineering</span>,{' '}
                <span className="text-warhammer-bronze font-semibold">Cloud Hosting</span>,{' '}
                <span className="text-warhammer-bronze font-semibold">Modern Frameworks</span>,{' '}
                <span className="text-warhammer-bronze font-semibold">Deep Learning</span>,{' '}
                <span className="text-warhammer-bronze font-semibold">Reinforcement Learning</span>,{' '}
                <span className="text-warhammer-bronze font-semibold">Authentication Systems</span>, and{' '}
                <span className="text-warhammer-bronze font-semibold">Database Architecture</span>.
              </p>
              <p className="font-body text-xl md:text-2xl text-gray-200 leading-relaxed">
                Though I march from a tier 3 stronghold, my determination burns brighter than a thousand suns. 
                Every line of code is a strike against mediocrity, every project a conquest in the eternal war for excellence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Achievement cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-warhammer-gold via-warhammer-blood to-warhammer-bronze rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative bg-warhammer-imperial rounded-lg border-2 border-warhammer-gold p-6 h-full">
                <achievement.icon className="w-12 h-12 text-warhammer-gold mb-4" />
                <h3 className="font-gothic text-xl text-warhammer-gold mb-2">
                  {achievement.title}
                </h3>
                <p className="font-body text-gray-300">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
