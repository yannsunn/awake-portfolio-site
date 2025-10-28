'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PROFILE, PRICING } from '@/lib/constants'

export default function HeroSection() {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
      {/* 最適化された背景画像 */}
      <div className="absolute inset-0">
        <picture>
          <source 
            srcSet="/images/hero-bg-mobile.webp"
            media="(max-width: 640px)"
            type="image/webp"
          />
          <source 
            srcSet="/images/hero-bg-tablet.webp"
            media="(max-width: 1024px)"
            type="image/webp"
          />
          <source 
            srcSet="/images/hero-bg-desktop.avif"
            type="image/avif"
          />
          <source 
            srcSet="/images/hero-bg-desktop.webp"
            type="image/webp"
          />
          <img
            src="/images/hero-bg-optimized.jpg"
            alt="株式会社Awake ホームページ制作・AIチャットボット開発サービス - 東大和市のweb制作会社"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          <motion.h1 
            className="font-black mb-4 md:mb-6 tracking-tighter leading-[0.9]"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", bounce: 0.4 }}
          >
            <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent font-bold">{PROFILE.name}</span>
          </motion.h1>
          
          <motion.p
            className="text-responsive-lg font-medium text-[var(--secondary)] mb-4 tracking-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AIチャットボット搭載で、お客様対応を自動化
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8 md:mb-12"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              🤖 AIチャットボット搭載のホームページ制作 🤖
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mb-10 md:mb-14"
          >
            <p className="text-responsive-xl text-[var(--primary)] mb-6 md:mb-8 leading-relaxed font-medium">
              24時間365日、自動で問い合わせ対応。
            </p>
            <div className="flex items-center justify-center gap-3 md:gap-4 font-bold" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
              <span className="tabular-nums bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">¥{PRICING.starter.priceJPY}</span>
              <span className="text-responsive-base text-[var(--secondary)] font-normal">から始める</span>
            </div>
            <p className="text-responsive-base text-[var(--secondary)] mt-6 font-medium">AIチャットボット搭載 + プロフェッショナルなWeb制作</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
            >
              <Link href="#portfolio" className="w-full sm:w-auto group">
                <motion.button 
                  className="relative btn-primary w-full sm:w-auto text-base sm:text-lg font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    ⭐ 制作実績を見る
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </motion.button>
              </Link>
              
              <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <motion.button 
                  className="btn-line glow-effect w-full sm:w-auto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  LINEで相談する
                </motion.button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}