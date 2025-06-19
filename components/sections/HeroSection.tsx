'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { PROFILE, VALUE_PROPOSITION } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-4 text-gray-800">{PROFILE.name}</h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-8">
            Webとテクノロジーで、ビジネスを加速する
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              必要十分な機能で、確実な成果を。
            </p>
            <p className="text-2xl font-bold text-gray-800 mb-10">
              13万2000円から始めるプロフェッショナルなWeb制作
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="#portfolio">
                <Button 
                  size="lg"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 text-lg rounded-lg"
                >
                  実績を見る
                </Button>
              </Link>
              <a href="https://lin.ee/1bcTOVj" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg rounded-lg"
                >
                  LINEで無料相談
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}