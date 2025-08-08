'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { PROFILE, VALUE_PROPOSITION } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 背景画像とパララックス */}
      <motion.div 
        className="absolute inset-0 opacity-50"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ 
          backgroundImage: 'url(/images/hero-bg-small.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* オーバーレイ */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 tracking-tighter leading-[0.9]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", bounce: 0.4 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">{PROFILE.name}</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-700 mb-8 md:mb-12 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Webとテクノロジーで、ビジネスを加速する
          </motion.p>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 md:mb-12 shadow-2xl"
            >
              <p className="text-lg md:text-xl lg:text-2xl text-white mb-4 md:mb-6 leading-relaxed font-light">
                必要十分な機能で、確実な成果を。
              </p>
              <div className="flex items-center justify-center gap-2 md:gap-4 text-3xl md:text-4xl lg:text-5xl font-black text-white">
                <span className="tabular-nums">¥132,000</span>
                <span className="text-lg md:text-xl text-gray-300 font-light">から始める</span>
              </div>
              <p className="text-lg text-gray-300 mt-4">プロフェッショナルなWeb制作</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="#portfolio" className="w-full sm:w-auto group">
                <motion.button 
                  className="w-full sm:w-auto px-10 py-4 text-lg font-bold bg-white text-gray-900 rounded-xl transition-all duration-300 hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  実績を見る
                </motion.button>
              </Link>
              
              <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <motion.button 
                  className="w-full sm:w-auto px-10 py-4 text-lg font-bold bg-[#06c755] text-white rounded-xl transition-all duration-300 hover:bg-[#04a948] hover:shadow-xl"
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