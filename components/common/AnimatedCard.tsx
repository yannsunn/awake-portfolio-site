'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  index?: number
  delay?: number
  className?: string
  hoverEffect?: boolean
}

export default function AnimatedCard({
  children,
  index = 0,
  delay,
  className = '',
  hoverEffect = true
}: AnimatedCardProps) {
  const calculatedDelay = delay !== undefined ? delay : index * 0.1

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: calculatedDelay }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={hoverEffect ? { y: -8, scale: 1.01 } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  )
}
