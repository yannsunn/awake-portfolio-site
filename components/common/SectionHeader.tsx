'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  badge: string
  title: string
  description: string | React.ReactNode
  badgeGradient?: string
}

export default function SectionHeader({
  badge,
  title,
  description,
  badgeGradient = 'from-blue-600 to-purple-600'
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`inline-block px-4 py-2 bg-gradient-to-r ${badgeGradient} text-white text-sm font-semibold rounded-full mb-4`}
      >
        {badge}
      </motion.span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {title}
      </h2>
      <div className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {description}
      </div>
    </motion.div>
  )
}
