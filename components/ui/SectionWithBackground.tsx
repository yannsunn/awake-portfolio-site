'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { commonStyles } from '@/lib/styles'
import { animations } from '@/lib/animations'

interface SectionWithBackgroundProps {
  children: React.ReactNode
  id?: string
  className?: string
  variant?: 'gradient' | 'mesh' | 'dots' | 'none'
  showOrbs?: boolean
}

export default function SectionWithBackground({
  children,
  id,
  className,
  variant = 'gradient',
  showOrbs = false,
}: SectionWithBackgroundProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative section-padding overflow-hidden',
        className
      )}
    >
      {/* 背景バリエーション */}
      {variant === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-gray-50/30 to-white/50" />
      )}
      
      {variant === 'mesh' && (
        <div className="absolute inset-0">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #6b7280 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              opacity: 0.05
            }}
          />
        </div>
      )}
      
      {variant === 'dots' && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #6b7280 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
      )}
      
      {/* 装飾用オーブ */}
      {showOrbs && (
        <>
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] rounded-full blur-3xl opacity-10 animate-pulse-slow" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full blur-3xl opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] rounded-full blur-3xl opacity-5 animate-pulse-slow" style={{ animationDelay: '4s' }} />
        </>
      )}
      
      {/* コンテンツ */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}

// セクションヘッダーコンポーネント
interface SectionHeaderProps {
  title: string
  subtitle?: string
  badge?: string
  centered?: boolean
  animated?: boolean
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  centered = true,
  animated = true,
}: SectionHeaderProps) {
  const content = (
    <>
      {badge && (
        <motion.span
          {...(animated ? animations.scaleUp : {})}
          className="inline-block px-4 py-2 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white text-sm font-semibold rounded-full mb-4"
        >
          {badge}
        </motion.span>
      )}
      
      <h2 className="text-3xl md:text-4xl font-black mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-base md:text-lg text-[var(--secondary)] max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </>
  )
  
  if (animated) {
    return (
      <motion.div
        {...animations.fadeInUp}
        viewport={{ once: true }}
        className={cn('mb-12 md:mb-16', centered && 'text-center')}
      >
        {content}
      </motion.div>
    )
  }
  
  return (
    <div className={cn('mb-12 md:mb-16', centered && 'text-center')}>
      {content}
    </div>
  )
}