// プロジェクト関連の型定義
export interface Project {
  id: number
  title: string
  category: 'ホームページ制作' | 'AI開発' | 'その他'
  description: string
  longDescription: string
  imageUrl: string
  url?: string
  pages?: string
  marketPrice?: string
  price: string
  duration: string
  features?: string[]
  result?: string
  breakdown?: string
}

// プロフィール/会社情報の型定義
export interface Profile {
  name: string
  title: string
  description: string
  email: string
  phone: string
  address: string
}

// ナビゲーション項目の型定義
export interface NavigationItem {
  href: string
  label: string
}

// スキル関連の型定義
export interface SkillCategory {
  category: string
  items: string[]
}

// 価値提案の型定義
export interface ValueProposition {
  title: string
  subtitle: string
  description: string
  benefits: string[]
}

// フォーム関連の型定義
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface FormErrors {
  [key: string]: string
}

export interface FormState {
  data: ContactFormData
  errors: FormErrors
  isSubmitting: boolean
  isSubmitted: boolean
}

// API レスポンスの型定義
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface ContactApiResponse extends ApiResponse {
  data?: {
    id: string
    timestamp: string
  }
}

// メタデータの型定義
export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
}

// アニメーション関連の型定義
export interface AnimationVariant {
  initial: Record<string, any>
  animate: Record<string, any>
  transition?: Record<string, any>
  exit?: Record<string, any>
}

export interface MotionProps {
  initial?: string | Record<string, any>
  animate?: string | Record<string, any>
  exit?: string | Record<string, any>
  transition?: Record<string, any>
  variants?: Record<string, AnimationVariant>
  whileHover?: Record<string, any>
  whileTap?: Record<string, any>
  whileInView?: Record<string, any>
  viewport?: {
    once?: boolean
    amount?: number
    margin?: string
  }
}

// ローカルストレージ関連の型定義
export interface StorageItem<T = any> {
  value: T
  timestamp: number
  expires?: number
}

// エラー関連の型定義
export interface AppError {
  code: string
  message: string
  details?: any
  timestamp: Date
}

// 設定関連の型定義
export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter?: string
    github?: string
    linkedin?: string
  }
}

// ユーティリティ型
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type Required<T, K extends keyof T> = T & RequiredFields<Pick<T, K>>
type RequiredFields<T> = {
  [P in keyof T]-?: T[P]
}

// 共通のプロパティ型
export interface BaseEntity {
  id: string | number
  createdAt?: Date
  updatedAt?: Date
}

// コンポーネントプロップス型
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface ClickableComponentProps extends BaseComponentProps {
  onClick?: () => void
  disabled?: boolean
}

// Hook返り値の型定義
export interface UseModalReturn {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export interface UseFormReturn<T> {
  data: T
  errors: FormErrors
  isSubmitting: boolean
  isValid: boolean
  handleChange: (field: keyof T, value: any) => void
  handleSubmit: (onSubmit: (data: T) => Promise<void>) => Promise<void>
  reset: () => void
  setError: (field: keyof T, message: string) => void
  clearError: (field: keyof T) => void
}

// 環境変数の型定義
export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test'
  NEXT_PUBLIC_BASE_URL: string
  NEXT_PUBLIC_API_URL?: string
  NEXT_PUBLIC_ANALYTICS_ID?: string
}

// パフォーマンス関連の型定義
export interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  interactionTime: number
  cumulativeLayoutShift: number
  firstContentfulPaint: number
  largestContentfulPaint: number
}

// 検索・フィルタリング関連の型定義
export interface SearchFilters {
  category?: string
  priceRange?: [number, number]
  sortBy?: 'price' | 'date' | 'popularity'
  sortOrder?: 'asc' | 'desc'
}

export interface PaginationParams {
  page: number
  limit: number
  total?: number
}

// イベント関連の型定義
export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

// カスタムフック用の型定義
export interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLElement>
  inView: boolean
  entry?: IntersectionObserverEntry
}

// テーマ関連の型定義（将来的なダークモード対応）
export interface Theme {
  colors: {
    primary: string
    secondary: string
    background: string
    text: string
    border: string
  }
  fonts: {
    body: string
    heading: string
  }
  breakpoints: {
    sm: string
    md: string
    lg: string
    xl: string
  }
}

// レスポンシブデザイン関連の型定義
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>