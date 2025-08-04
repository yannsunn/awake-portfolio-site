'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { PROFILE, VALUE_PROPOSITION } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* メッシュグラデーション背景 */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      
      {/* 動的パーティクル */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full floating-animation opacity-60" style={{animationDelay: '0s'}} />
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-300 rounded-full floating-animation opacity-80" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-blue-300 rounded-full floating-animation opacity-50" style={{animationDelay: '2s'}} />
        <div className="absolute top-60 right-20 w-1.5 h-1.5 bg-indigo-300 rounded-full floating-animation opacity-70" style={{animationDelay: '3s'}} />
      </div>
      
      {/* グラスモルフィズムオーバーレイ */}
      <div className="absolute inset-0 glass-effect" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* ブランドマーク */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="w-24 h-24 mx-auto mb-8 premium-gradient rounded-3xl flex items-center justify-center pulse-glow"
          >
            <span className="text-white text-3xl font-black">A</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="text-gradient-premium">{PROFILE.name}</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl sm:text-2xl md:text-4xl font-light text-white mb-12 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Webとテクノロジーで、ビジネスを加速する
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="glass-dark rounded-3xl p-8 mb-12"
            >
              <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed font-light">
                必要十分な機能で、確実な成果を。
              </p>
              <div className="flex items-center justify-center gap-4 text-4xl md:text-5xl font-black text-white">
                <span className="tabular-nums">¥132,000</span>
                <span className="text-lg md:text-xl text-gray-300 font-light">から始める</span>
              </div>
              <p className="text-lg text-gray-300 mt-4">プロフェッショナルなWeb制作</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="#portfolio" className="w-full sm:w-auto group">
                <motion.button 
                  className="card-premium w-full sm:w-auto px-10 py-5 text-lg font-bold text-gray-900 rounded-2xl transition-all duration-300 group-hover:scale-105"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-3">🎆</span>
                  実績を見る
                </motion.button>
              </Link>
              
              <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group">
                <motion.button 
                  className="glass-effect w-full sm:w-auto px-10 py-5 text-lg font-bold text-white rounded-2xl transition-all duration-300 border border-white/30 group-hover:bg-white/20"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-3">💬</span>
                  LINEで無料相談
                </motion.button>
              </a>
            </motion.div>
          </div>
        </motion.div>
        
        {/* フローティングアイコン */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/60"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-2xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}