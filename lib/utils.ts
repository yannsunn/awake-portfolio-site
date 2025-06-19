import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// ユーティリティ関数: Tailwind CSSクラスの結合と重複削除
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// パフォーマンス最適化: 価格フォーマット関数
export const formatPrice = (price: string): string => {
  // 数値部分を抽出して3桁区切りにフォーマット
  const numericPrice = price.replace(/[^\d]/g, '')
  if (!numericPrice) return price
  
  const formatted = parseInt(numericPrice).toLocaleString('ja-JP')
  return price.includes('万') ? `${formatted}万円` : `${formatted}円`
}

// アニメーション用の共通バリアント
export const animationVariants = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  },
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
} as const

// 型安全なローカルストレージ操作
export const storage = {
  get: <T>(key: string, fallback?: T): T | null => {
    if (typeof window === 'undefined') return fallback || null
    
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : fallback || null
    } catch {
      return fallback || null
    }
  },
  
  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return
    
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn('Failed to save to localStorage:', error)
    }
  },
  
  remove: (key: string): void => {
    if (typeof window === 'undefined') return
    localStorage.removeItem(key)
  }
}

// デバウンス関数（パフォーマンス最適化）
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// スクロール管理ユーティリティ
export const scrollUtils = {
  toTop: () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  
  toElement: (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  },
  
  getScrollProgress: (): number => {
    const scrollTop = window.pageYOffset
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    return docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
  }
}

// エラーハンドリング
export const handleError = (error: unknown, context?: string): void => {
  const errorMessage = error instanceof Error ? error.message : String(error)
  const fullMessage = context ? `${context}: ${errorMessage}` : errorMessage
  
  console.error(fullMessage)
  
  // プロダクションでのエラー報告（必要に応じて実装）
  if (process.env.NODE_ENV === 'production') {
    // エラー追跡サービスに送信
    // trackError(fullMessage)
  }
}

// SEO用のメタデータ生成
export const generateMetadata = (
  title: string,
  description: string,
  path: string = '',
  image?: string
) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.awakeinc.co.jp'
  const url = `${baseUrl}${path}`
  const defaultImage = `${baseUrl}/images/og-image.jpg`
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Awake Inc.',
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image || defaultImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
  }
}

// パフォーマンス測定ユーティリティ
export const performance = {
  measure: (name: string, fn: () => void) => {
    const start = Date.now()
    fn()
    const end = Date.now()
    console.log(`${name}: ${end - start}ms`)
  },
  
  measureAsync: async (name: string, fn: () => Promise<void>) => {
    const start = Date.now()
    await fn()
    const end = Date.now()
    console.log(`${name}: ${end - start}ms`)
  }
}

// 型ガード
export const isServer = typeof window === 'undefined'
export const isClient = typeof window !== 'undefined'

// フォームバリデーション用ヘルパー
export const validation = {
  email: (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  },
  
  phone: (phone: string): boolean => {
    return /^[\d\-\+\(\)\s]+$/.test(phone)
  },
  
  required: (value: string): boolean => {
    return value.trim().length > 0
  },
  
  minLength: (value: string, min: number): boolean => {
    return value.trim().length >= min
  },
  
  maxLength: (value: string, max: number): boolean => {
    return value.trim().length <= max
  }
}