'use client'

import { motion } from 'framer-motion'

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute top-[10%] left-[10%] w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute top-[50%] left-[50%] w-80 h-80 bg-pink-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}