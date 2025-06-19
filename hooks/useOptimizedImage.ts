import { useState, useEffect, useCallback } from 'react'

interface UseOptimizedImageOptions {
  lowQualityUrl?: string
  highQualityUrl: string
  alt: string
  loading?: 'lazy' | 'eager'
}

interface UseOptimizedImageReturn {
  src: string
  alt: string
  loading: 'lazy' | 'eager'
  isLoading: boolean
  hasError: boolean
  onLoad: () => void
  onError: () => void
}

/**
 * 画像の最適化ローディングを管理するカスタムフック
 * プログレッシブ画像ローディングとエラーハンドリングを提供
 */
export const useOptimizedImage = ({
  lowQualityUrl,
  highQualityUrl,
  alt,
  loading = 'lazy'
}: UseOptimizedImageOptions): UseOptimizedImageReturn => {
  const [currentSrc, setCurrentSrc] = useState(lowQualityUrl || highQualityUrl)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [highQualityLoaded, setHighQualityLoaded] = useState(false)

  // 高品質画像のプリロード
  useEffect(() => {
    if (!highQualityLoaded && lowQualityUrl) {
      const img = new Image()
      img.onload = () => {
        setCurrentSrc(highQualityUrl)
        setHighQualityLoaded(true)
        setIsLoading(false)
      }
      img.onerror = () => {
        setHasError(true)
        setIsLoading(false)
      }
      img.src = highQualityUrl
    }
  }, [highQualityUrl, highQualityLoaded, lowQualityUrl])

  const handleLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleError = useCallback(() => {
    setHasError(true)
    setIsLoading(false)
  }, [])

  return {
    src: currentSrc,
    alt,
    loading,
    isLoading,
    hasError,
    onLoad: handleLoad,
    onError: handleError
  }
}