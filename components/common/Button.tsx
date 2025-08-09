import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 transform active:scale-95',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] text-white hover:shadow-xl hover:-translate-y-0.5 focus:ring-[var(--accent)]': variant === 'primary',
            'bg-white border-2 border-gray-200 text-gray-700 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-gray-50 hover:shadow-lg focus:ring-[var(--accent)]': variant === 'secondary',
            'border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white hover:shadow-lg hover:-translate-y-0.5 focus:ring-[var(--accent)] bg-transparent': variant === 'outline',
            'text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-400': variant === 'ghost',
            'px-4 py-2 text-sm min-h-[36px]': size === 'sm',
            'px-6 py-3 text-base min-h-[44px]': size === 'md',
            'px-8 py-4 text-lg min-h-[52px]': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button