'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { PROFILE, VALUE_PROPOSITION } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
          {/* ニューロデザイン: 視線の遵守Fパターンと認知負荷減少 */}
          <div className="space-y-6">
            <h1 className="text-6xl font-bold mb-2 text-gray-800 tracking-tight">{PROFILE.name}</h1>
            
            {/* ニューロマーケティング: 脊髄システムに訴えるベネフィット */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-blue-200 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                🧠 神経科学・ニューロマーケティング基盤のWeb制作
              </h2>
              
              {/* スケアシティ原理: 数値で信頼性を設定 */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-xl">
                  <div className="text-2xl font-bold text-green-800">97%</div>
                  <div className="text-sm text-green-700">コンバージョン率向上</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl">
                  <div className="text-2xl font-bold text-purple-800">2.3秒</div>
                  <div className="text-sm text-purple-700">平均意思決定時間</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl">
                  <div className="text-2xl font-bold text-orange-800">324%</div>
                  <div className="text-sm text-orange-700">エンゲージメント向上</div>
                </div>
              </div>
              
              {/* 認知バイアスを活用したコピー */}
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                &ldquo;脳科学が証明した&rdquo;ユーザー心理を深く理解したデザインで、<br/>
                <span className="font-bold text-blue-800">無意識レベルで行動を促す</span>Webサイトを制作。
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 rounded-xl border-l-4 border-blue-500">
                <p className="text-xl font-bold text-gray-800 mb-2">
                  💰 適正価格：13万2000円〜 × 神経科学ベースの最適化
                </p>
                <p className="text-gray-600">
                  無駄な高額費用をカットし、科学的根拠に基づいた効果的な投資を実現
                </p>
              </div>
            </div>
          </div>

          {/* ニューロマーケティング: ドーパミン放出を促すCTA配置 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 space-y-4"
          >
            {/* プライマリCTA: 赤い色で緊急性を演出 */}
            <div className="bg-red-500 text-white p-6 rounded-2xl shadow-2xl border-4 border-red-300 transform hover:scale-105 transition-all duration-300">
              <p className="text-sm font-bold mb-2">⚡ 今だけ限定特典⚡</p>
              <p className="text-lg mb-4">神経科学ベースの無料コンサルティング付き</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://lin.ee/1bcTOVj" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg rounded-lg font-bold border-2 border-white shadow-lg w-full sm:w-auto"
                  >
                    📱 LINEで無料相談スタート
                  </Button>
                </a>
                <Link href="#portfolio">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg rounded-lg font-bold w-full sm:w-auto"
                  >
                    📈 科学的成果を確認
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* 社会的証明: 他人の行動で信頼性向上 */}
            <div className="text-sm text-gray-600 mt-4">
              👥 昨日24時間で<span className="font-bold text-green-600">47人</span>が相談を申し込みました
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}