'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LineConsultationButton from './LineConsultationButton'

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // モバイルデバイスの検出
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    // スクロール位置に基づいて表示/非表示を切り替え
    const handleScroll = () => {
      // ヒーローセクションを過ぎたら表示
      const heroHeight = window.innerHeight
      const scrollPosition = window.scrollY

      setIsVisible(scrollPosition > heroHeight * 0.5)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // モバイルでない、または表示条件を満たさない場合は非表示
  if (!isMobile) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          style={{
            paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          }}
        >
          <div className="bg-white border-t border-gray-200 shadow-2xl p-4">
            <div className="flex gap-3">
              <LineConsultationButton
                variant="large"
                className="flex-1 justify-center"
              />
              <a
                href="#contact"
                className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
