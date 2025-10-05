import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react'

export default function Contact() {
  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "#",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "#",
      color: "hover:text-blue-500",
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:your.email@example.com",
      color: "hover:text-red-500",
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "#",
      color: "hover:text-sky-500",
    },
  ]

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-gothic text-5xl md:text-7xl font-bold text-warhammer-gold mb-4">
            JOIN THE CRUSADE
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
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group mb-12"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-warhammer-gold via-warhammer-blood to-warhammer-bronze rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-black bg-opacity-60 backdrop-blur-lg rounded-lg border-2 border-warhammer-gold p-8 md:p-12">
            <p className="font-body text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
              The galaxy is vast, but together we can conquer it. Whether you seek an ally in battle,
              wish to forge alliances, or have a quest that requires my expertise—reach out.
            </p>
            <motion.p
              className="font-gothic text-2xl text-warhammer-gold italic"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              "In the name of progress, we march forward"
            </motion.p>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex items-center gap-3 px-6 py-4 bg-warhammer-imperial rounded-lg border-2 border-warhammer-gold transition-colors ${link.color}`}
            >
              <link.icon className="w-6 h-6 text-warhammer-gold" />
              <span className="font-body text-lg text-warhammer-gold group-hover:text-inherit transition-colors">
                {link.name}
              </span>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-warhammer-gold/30 pt-8"
        >
          <p className="font-body text-gray-400 mb-2">
            Built with React Three Fiber & Framer Motion
          </p>
          <p className="font-gothic text-warhammer-gold text-lg">
            © 2024 Nilabh Deka • For the Emperor
          </p>
          <motion.p
            className="font-body text-sm text-warhammer-bronze mt-4 italic"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            "In the grim darkness of the far future, there is only innovation"
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
