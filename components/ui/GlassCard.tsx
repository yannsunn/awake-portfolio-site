'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  className?: string
  variant?: 'default' | 'dark' | 'colored' | 'minimal'
  hover?: boolean
  blur?: 'sm' | 'md' | 'lg' | 'xl'
  gradient?: string
}

export default function GlassCard({
  children,
  className,
  variant = 'default',
  hover = true,
  blur = 'md',
  gradient,
  ...props
}: GlassCardProps) {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  }

  const variantClasses = {
    default: 'bg-white/80 border-white/20',
    dark: 'bg-gray-900/80 border-gray-700/30',
    colored: 'bg-gradient-to-br from-white/90 to-white/70 border-white/30',
    minimal: 'bg-white/60 border-gray-200/20'
  }

  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-2xl border shadow-lg',
        blurClasses[blur],
        variantClasses[variant],
        hover && 'transition-all duration-300 hover:shadow-2xl hover:border-white/40',
        className
      )}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      {...props}
    >
      {/* グラデーションオーバーレイ */}
      {gradient && (
        <div className={cn('absolute inset-0 opacity-10', gradient)} />
      )}
      
      {/* ガラス効果の光沢 */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
      
      {/* コンテンツ */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

// ガラス効果のヘッダーコンポーネント
export function GlassHeader({
  title,
  subtitle,
  icon,
  gradient = 'from-blue-600 to-purple-600'
}: {
  title: string
  subtitle?: string
  icon?: ReactNode
  gradient?: string
}) {
  return (
    <div className="relative p-6 border-b border-white/10">
      <div className={cn('absolute inset-0 bg-gradient-to-r opacity-10', gradient)} />
      <div className="relative z-10 flex items-center gap-4">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xl flex items-center justify-center">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}

// ガラス効果のボタンコンポーネント  
export function GlassButton({
  children,
  variant = 'default',
  className,
  onClick,
  disabled,
  type = 'button'
}: {
  children: ReactNode
  variant?: 'default' | 'primary' | 'secondary'
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}) {
  const variantClasses = {
    default: 'bg-white/20 hover:bg-white/30 text-gray-900',
    primary: 'bg-gradient-to-r from-blue-500/80 to-purple-500/80 hover:from-blue-500 hover:to-purple-500 text-white',
    secondary: 'bg-gray-900/20 hover:bg-gray-900/30 text-gray-900'
  }

  return (
    <motion.button
      className={cn(
        'px-6 py-3 rounded-xl backdrop-blur-md border border-white/20',
        'font-semibold transition-all duration-300',
        'shadow-lg hover:shadow-xl',
        variantClasses[variant],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </motion.button>
  )
}