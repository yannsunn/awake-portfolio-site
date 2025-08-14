'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { animations } from '@/lib/animations'

// スクロール位置を取得するフック
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollProgress
}

// パララックス効果用フック
export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      setOffset(scrolled * speed)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return offset
}

// 要素の表示状態を監視するフック
export function useScrollReveal(options?: {
  threshold?: number
  rootMargin?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: options?.rootMargin || '-100px' as any
  })

  return { ref, isInView }
}

// アニメーション定義を再エクスポート（互換性維持）
export const fadeInUp = animations.fadeInUp
export const fadeInDown = animations.fadeInDown
export const fadeInLeft = animations.fadeInLeft
export const fadeInRight = animations.fadeInRight
export const scaleIn = animations.scaleIn
export const staggerContainer = animations.staggerContainer
export const staggerItem = animations.staggerItem