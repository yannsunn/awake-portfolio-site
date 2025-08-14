'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { commonStyles } from '@/lib/styles'
import { animations } from '@/lib/animations'

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'standard' | 'glass' | 'gradient'
  animation?: keyof typeof animations | false
  delay?: number
  hover?: boolean
  onClick?: () => void
}

export default function AnimatedCard({
  children,
  className,
  variant = 'standard',
  animation = 'fadeInUp',
  delay = 0,
  hover = true,
  onClick,
}: AnimatedCardProps) {
  // ベースクラスを決定
  const baseClass = {
    standard: 'bg-white rounded-2xl border border-gray-50 p-8',
    glass: 'bg-white/80 backdrop-blur-md border border-gray-50 rounded-2xl p-8',
    gradient: 'bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-50',
  }[variant]
  
  // アニメーション設定
  const animationProps = animation && animation in animations ? (() => {
    const anim = animations[animation] as any
    if ('initial' in anim) {
      return {
        initial: anim.initial,
        whileInView: anim.animate,
        transition: { ...anim.transition, delay },
        viewport: { once: true, margin: "-100px" },
      }
    }
    return anim
  })() : {}
  
  // ホバー設定
  const hoverProps = hover ? {
    whileHover: { y: -6, transition: { duration: 0.3 } },
  } : {}
  
  return (
    <motion.div
      {...animationProps}
      {...hoverProps}
      onClick={onClick}
      className={cn(
        baseClass,
        hover && 'transition-all duration-300 cursor-pointer',
        className
      )}
      style={{ boxShadow: commonStyles.shadow.subtle }}
    >
      {children}
    </motion.div>
  )
}

// カードグリッドコンポーネント
interface CardGridProps {
  children: React.ReactNode
  columns?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

export function CardGrid({
  children,
  columns = 3,
  gap = 'md',
  className,
}: CardGridProps) {
  const gapClass = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  }[gap]
  
  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns]
  
  return (
    <div className={cn(
      'grid',
      gridClass,
      gapClass,
      className
    )}>
      {children}
    </div>
  )
}