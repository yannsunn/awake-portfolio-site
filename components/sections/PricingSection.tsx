'use client'

import { motion } from 'framer-motion'
import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import Section, { SectionHeader } from '@/components/ui/Section'
import Link from 'next/link'

const PRICING_PLANS = [
  {
    name: "スターター",
    price: "132,000",
    originalPrice: "13万2000円",
    description: "個人事業主・フリーランス向け",
    features: [
      "1ページ",
      "レスポンシブ対応",
      "基本的なSEO対策",
      "お問い合わせフォーム",
      "納期：1-2週間"
    ],
    recommended: false,
    color: "gray",
    gradient: "from-gray-50 to-gray-100"
  },
  {
    name: "ベーシック",
    price: "298,000",
    originalPrice: "29万8000円",
    description: "中小企業・店舗向け",
    features: [
      "10ページまで",
      "CMS（更新システム）",
      "高度なSEO対策",
      "アクセス解析設置",
      "納期：2-3週間"
    ],
    recommended: true,
    color: "black",
    gradient: "from-gray-900 to-gray-800"
  },
  {
    name: "プレミアム",
    price: "698,000",
    originalPrice: "69万8000円〜",
    description: "ECサイト（簡易版）",
    features: [
      "ページ数無制限",
      "EC機能（決済・在庫管理）",
      "予約システム",
      "カスタム機能",
      "納期：1-2ヶ月"
    ],
    recommended: false,
    color: "blue",
    gradient: "from-blue-50 to-blue-100"
  }
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative section-padding bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* 背景エフェクト */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="text-5xl">💎</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gradient-premium">料金プラン</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              お客様のニーズに合わせた明確な料金体系。<br />
              追加費用なしの安心価格です。
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
              whileHover={{ y: -12, scale: 1.02 }}
            >
              {plan.recommended && (
                <motion.div 
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring", bounce: 0.4 }}
                >
                  <span className="premium-gradient text-white px-8 py-3 text-sm font-bold rounded-full shadow-xl pulse-glow">
                    ✨ 一番人気
                  </span>
                </motion.div>
              )}
              <div className={`card-premium h-full relative overflow-hidden ${
                plan.recommended 
                  ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black border-gray-700 transform scale-105' 
                  : 'group-hover:premium-shadow-lg'
              }`}>
                {/* ホバー時のグラデーションオーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-center h-full flex flex-col relative z-10 p-8">
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className={`text-3xl font-black mb-4 ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-lg ${plan.recommended ? 'text-gray-200' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="mb-10"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.15, type: "spring", bounce: 0.3 }}
                  >
                    <div className={`text-5xl sm:text-6xl font-black mb-3 tabular-nums ${
                      plan.recommended ? 'text-white' : 'text-gray-900'
                    }`}>
                      ¥{plan.price.toLocaleString()}
                    </div>
                    <p className={`text-sm uppercase tracking-wide font-bold ${
                      plan.recommended ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                      {plan.originalPrice}
                    </p>
                  </motion.div>
                  <ul className="space-y-5 mb-10 text-left flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                        className="flex items-center group/feature"
                      >
                        <motion.div 
                          className={`w-10 h-10 rounded-xl mr-4 flex items-center justify-center transition-all duration-300 ${
                            plan.recommended 
                              ? 'bg-white text-gray-900 group-hover/feature:scale-110' 
                              : 'bg-gray-900 text-white group-hover/feature:bg-purple-600'
                          }`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-sm font-bold">✓</span>
                        </motion.div>
                        <span className={`text-base font-semibold transition-colors duration-300 ${
                          plan.recommended 
                            ? 'text-white group-hover/feature:text-gray-100' 
                            : 'text-gray-900 group-hover/feature:text-gray-700'
                        }`}>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer" className="block">
                      <button 
                        className={`w-full py-5 px-8 font-bold text-lg rounded-2xl transition-all duration-500 transform relative overflow-hidden ${
                          plan.recommended 
                            ? 'bg-white text-gray-900 hover:bg-gray-100 border-2 border-white shadow-xl hover:shadow-2xl' 
                            : 'bg-gray-900 text-white hover:bg-gray-800 border-2 border-gray-900 hover:border-purple-600'
                        }`}
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          <span className="mr-3 text-xl">💬</span>
                          LINEで相談する
                        </span>
                        {!plan.recommended && (
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* その他のサービス */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 max-w-6xl mx-auto">
            {/* 動的背景エフェクト */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-3 h-3 bg-white rounded-full floating-animation opacity-30" style={{animationDelay: '0s'}} />
              <div className="absolute top-20 right-20 w-2 h-2 bg-purple-300 rounded-full floating-animation opacity-50" style={{animationDelay: '1s'}} />
              <div className="absolute bottom-16 left-20 w-4 h-4 bg-blue-300 rounded-full floating-animation opacity-40" style={{animationDelay: '2s'}} />
            </div>
            
            {/* パターン背景 */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" 
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>
            
            <div className="relative">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="inline-block mb-8"
              >
                <span className="text-6xl filter drop-shadow-lg">⚡</span>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-12 text-white">その他のサービス</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div 
                  className="glass-effect p-8 rounded-2xl border border-white/20 group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center">
                    <div className="text-left">
                      <h4 className="font-bold text-white text-xl mb-2 group-hover:text-purple-200 transition-colors">
                        <span className="mr-3">🤖</span>AIチャットボット
                      </h4>
                      <p className="text-gray-300 text-base">自動対応システム</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-black text-white tabular-nums group-hover:scale-110 transition-transform">¥398,000</p>
                      <p className="text-gray-300 text-sm">〜</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="glass-effect p-8 rounded-2xl border border-white/20 group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center">
                    <div className="text-left">
                      <h4 className="font-bold text-white text-xl mb-2 group-hover:text-blue-200 transition-colors">
                        <span className="mr-3">⚙️</span>受託開発
                      </h4>
                      <p className="text-gray-300 text-base">カスタムシステム</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-black text-white group-hover:scale-110 transition-transform">要相談</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-5 text-xl font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group">
                    <span className="relative z-10 flex items-center justify-center">
                      <span className="mr-3 text-2xl">💬</span>
                      詳しく相談する
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}