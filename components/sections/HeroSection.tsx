'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { PROFILE, VALUE_PROPOSITION } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center bg-white overflow-hidden">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{ 
          backgroundImage: 'url(/images/hero-bg-small.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-white/50"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* ブランドマーク */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-8 bg-gray-900 rounded-2xl flex items-center justify-center"
          >
            <span className="text-white text-2xl font-black">A</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            <span className="text-gradient">{PROFILE.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-12 tracking-wide">
            Webとテクノロジーで、ビジネスを加速する
          </h2>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <p className="text-xl md:text-2xl text-gray-700 mb-4 font-light leading-relaxed">
                必要十分な機能で、確実な成果を。
              </p>
              <div className="flex items-center justify-center gap-4 text-3xl md:text-4xl font-bold">
                <span className="tabular-nums">¥132,000</span>
                <span className="text-lg md:text-xl text-gray-500 font-normal">から始める</span>
              </div>
              <p className="text-lg text-gray-600 mt-2">プロフェッショナルなWeb制作</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link href="#portfolio" className="group">
                <Button 
                  size="lg"
                  className="btn-primary min-w-[200px] group-hover:shadow-2xl"
                >
                  実績を見る
                  <motion.span
                    className="inline-block ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </Button>
              </Link>
              <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer" className="group">
                <Button 
                  size="lg"
                  variant="outline"
                  className="btn-secondary min-w-[200px]"
                >
                  <span className="mr-2">💬</span>
                  LINEで無料相談
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
        
        {/* スクロールインジケーター */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="scroll-indicator" />
        </motion.div>
      </div>
    </section>
  )
}