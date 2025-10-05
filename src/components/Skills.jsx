import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Server, Cloud, Code2, Brain, Lock, Database } from 'lucide-react'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    {
      icon: Server,
      name: "Backend Engineering",
      description: "Architecting robust server-side solutions",
      color: "from-yellow-500 to-yellow-700",
    },
    {
      icon: Cloud,
      name: "Cloud Hosting",
      description: "Deploying and scaling in the cloud",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Code2,
      name: "Modern Frameworks",
      description: "Building with cutting-edge technologies",
      color: "from-green-500 to-green-700",
    },
    {
      icon: Brain,
      name: "Deep & Reinforcement Learning",
      description: "Implementing AI and ML models",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Lock,
      name: "Authentication Systems",
      description: "Securing applications with robust auth",
      color: "from-red-500 to-red-700",
    },
    {
      icon: Database,
      name: "Database Architecture",
      description: "Designing efficient data structures",
      color: "from-orange-500 to-orange-700",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-gothic text-5xl md:text-7xl font-bold text-warhammer-gold mb-4">
            ARSENAL OF WAR
          </h2>
          <motion.div
            className="w-48 h-1 bg-gradient-to-r from-transparent via-warhammer-gold to-transparent mx-auto mb-6"
            animate={{
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <p className="font-body text-xl text-gray-300 max-w-2xl mx-auto">
            The weapons I wield in the eternal crusade for technological excellence
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-warhammer-gold to-warhammer-blood rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
              
              {/* Card */}
              <div className="relative bg-black bg-opacity-60 backdrop-blur-lg rounded-lg border-2 border-warhammer-gold p-8 h-full">
                {/* Icon */}
                <motion.div
                  className="mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${skill.color} p-3 shadow-lg`}>
                    <skill.icon className="w-full h-full text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="font-gothic text-2xl text-warhammer-gold mb-3">
                  {skill.name}
                </h3>
                <p className="font-body text-gray-300 leading-relaxed">
                  {skill.description}
                </p>

                {/* Decoration */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-warhammer-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Battle cry */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            <motion.p
              className="font-gothic text-2xl md:text-3xl italic text-warhammer-gold"
              animate={{
                textShadow: [
                  "0 0 10px rgba(212, 175, 55, 0.5)",
                  "0 0 20px rgba(212, 175, 55, 0.8)",
                  "0 0 10px rgba(212, 175, 55, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              "For the Emperor! For Excellence!"
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
