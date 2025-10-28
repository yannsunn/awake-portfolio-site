interface BackgroundDecorationsProps {
  variant?: 'default' | 'centered' | 'sides' | 'pricing' | 'process' | 'works'
  opacity?: number
}

export default function BackgroundDecorations({
  variant = 'default',
  opacity = 10
}: BackgroundDecorationsProps) {
  const variants = {
    default: (
      <>
        <div
          className={`absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] rounded-full blur-3xl opacity-${opacity} animate-pulse-slow`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full blur-3xl opacity-${opacity} animate-pulse-slow`}
          style={{ animationDelay: '2s' }}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] rounded-full blur-3xl opacity-5 animate-pulse-slow`}
          style={{ animationDelay: '4s' }}
        />
      </>
    ),
    centered: (
      <>
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-${opacity} animate-pulse-slow`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-${opacity} animate-pulse-slow`}
          style={{ animationDelay: '3s' }}
        />
      </>
    ),
    sides: (
      <>
        <div
          className={`absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-${opacity} animate-pulse-slow`}
        />
        <div
          className={`absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-${opacity} animate-pulse-slow`}
          style={{ animationDelay: '2s' }}
        />
      </>
    ),
    pricing: (
      <>
        <div
          className={`absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] rounded-full blur-3xl opacity-${opacity} animate-pulse-slow`}
        />
        <div
          className={`absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full blur-3xl opacity-${opacity} animate-pulse-slow`}
          style={{ animationDelay: '2s' }}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] rounded-full blur-3xl opacity-5 animate-pulse-slow`}
          style={{ animationDelay: '4s' }}
        />
      </>
    ),
    process: (
      <>
        <div
          className={`absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] rounded-full blur-3xl opacity-15 animate-pulse-slow`}
        />
        <div
          className={`absolute bottom-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full blur-3xl opacity-${opacity} animate-pulse-slow`}
          style={{ animationDelay: '2s' }}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] rounded-full blur-3xl opacity-${opacity} animate-pulse-slow`}
          style={{ animationDelay: '4s' }}
        />
      </>
    ),
    works: (
      <>
        <div
          className={`absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-${opacity} animate-pulse`}
        />
        <div
          className={`absolute bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-${opacity} animate-pulse`}
          style={{ animationDelay: '2s' }}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-5 animate-pulse`}
          style={{ animationDelay: '4s' }}
        />
      </>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {variants[variant]}
    </div>
  )
}
