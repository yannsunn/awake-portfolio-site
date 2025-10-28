'use client'

import { motion } from 'framer-motion'

interface LineConsultationButtonProps {
  variant?: 'default' | 'large' | 'compact' | 'header'
  className?: string
  showIcon?: boolean
}

export default function LineConsultationButton({
  variant = 'default',
  className = '',
  showIcon = true
}: LineConsultationButtonProps) {
  const variants = {
    default: 'btn-line glow-effect px-8 py-4 text-base rounded-xl',
    large: 'btn-line glow-effect px-10 py-5 text-lg rounded-xl font-bold shadow-lg',
    compact: 'btn-line px-6 py-3 text-sm rounded-lg',
    header: 'btn-line !px-5 !py-2.5 !text-sm !rounded-full hover:scale-105'
  }

  const buttonClass = `${variants[variant]} ${className}`

  return (
    <a
      href="https://lin.ee/hHdqEXB"
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass}
    >
      {showIcon && <span className="mr-2">💬</span>}
      <span>LINEで相談する</span>
    </a>
  )
}

// アニメーション付きバージョン
export function AnimatedLineButton({
  variant = 'default',
  className = '',
  showIcon = true,
  delay = 0
}: LineConsultationButtonProps & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <LineConsultationButton
        variant={variant}
        className={className}
        showIcon={showIcon}
      />
    </motion.div>
  )
}
