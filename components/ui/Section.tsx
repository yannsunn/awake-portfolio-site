import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'white' | 'light' | 'dark'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Section({ 
  children, 
  className, 
  id,
  background = 'white',
  padding = 'lg'
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full',
        {
          'bg-white': background === 'white',
          'bg-light': background === 'light',
          'bg-dark text-white': background === 'dark',
          'py-8': padding === 'sm',
          'py-12': padding === 'md',
          'py-16': padding === 'lg',
          'py-24': padding === 'xl',
        },
        className
      )}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  className?: string
  centered?: boolean
}

export function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  className,
  centered = true 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      'mb-12',
      centered && 'text-center max-w-3xl mx-auto',
      className
    )}>
      {subtitle && (
        <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}