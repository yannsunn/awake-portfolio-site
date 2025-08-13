'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ParticleBackground from '@/components/ui/ParticleBackground'
import { useParallax } from '@/hooks/useScrollAnimation'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { PROFILE, VALUE_PROPOSITION } from '@/lib/constants'

export default function HeroSection() {
  const parallaxOffset = useParallax(0.3)
  
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
            alt="Hero Background"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/60" />
      </div>
      
      {/* パーティクル背景 */}
      <ParticleBackground
        particleCount={30}
        color="rgba(59, 130, 246, 0.3)"
        speed={0.3}
      />
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
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
            className="text-responsive-lg font-medium text-[var(--secondary)] mb-8 md:mb-12 tracking-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Webとテクノロジーで、ビジネスを加速する
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mb-10 md:mb-14"
          >
            <p className="text-responsive-xl text-[var(--primary)] mb-6 md:mb-8 leading-relaxed font-medium">
              必要十分な機能で、効果的なサイトを。
            </p>
            <div className="flex items-center justify-center gap-3 md:gap-4 font-bold" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
              <span className="tabular-nums bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">¥132,000</span>
              <span className="text-responsive-base text-[var(--secondary)] font-normal">から始める</span>
            </div>
            <p className="text-responsive-base text-[var(--secondary)] mt-6 font-medium">プロフェッショナルなWeb制作</p>
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
                  className="btn-secondary w-full sm:w-auto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  実績を見る
                </motion.button>
              </Link>
              
              <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <motion.button 
                  className="btn-primary glow-effect w-full sm:w-auto bg-gradient-to-r from-[#06c755] to-[#04a948] hover:from-[#04a948] hover:to-[#06c755]"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  LINEで無料相談
                </motion.button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}