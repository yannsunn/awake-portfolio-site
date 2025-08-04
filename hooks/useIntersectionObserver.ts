import { useEffect, useRef, useState } from 'react'
import type { UseIntersectionObserverOptions, UseIntersectionObserverReturn } from '@/lib/types'

/**
 * Intersection Observer APIを使用した要素の可視性を監視するカスタムフック
 * アニメーションのトリガーやLazy Loadingに使用
 */
export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true
}: UseIntersectionObserverOptions = {}): UseIntersectionObserverReturn => {
  const [inView, setInView] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting
        setInView(isIntersecting)
        setEntry(entry)

        // triggerOnceがtrueの場合、一度表示されたら監視を停止
        if (isIntersecting && triggerOnce) {
          observer.unobserve(element)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, inView, entry }
}