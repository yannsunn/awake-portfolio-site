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
    <Section id="pricing" background="light" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">料金プラン</h2>
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
            className="relative"
            whileHover={{ y: -8 }}
          >
            {plan.recommended && (
              <motion.div 
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-2 text-sm font-bold rounded-full shadow-lg">
                  ✨ 一番人気
                </span>
              </motion.div>
            )}
            <div className={`relative h-full overflow-hidden rounded-2xl ${plan.recommended ? 'transform scale-105' : ''}`}>
              {/* 背景グラデーション */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} ${plan.recommended ? 'opacity-100' : 'opacity-50'}`} />
              
              {/* コンテンツ */}
              <div className="relative p-8 text-center h-full flex flex-col">
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-3 ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.recommended ? 'text-gray-200' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>
                
                <div className="mb-8">
                  <div className={`text-5xl font-black mb-2 tabular-nums ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>
                    ¥{plan.price.toLocaleString()}
                  </div>
                  <p className={`text-sm ${plan.recommended ? 'text-gray-300' : 'text-gray-500'}`}>
                    {plan.originalPrice}
                  </p>
                </div>
              
                <ul className="space-y-4 mb-8 text-left flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * featureIndex }}
                    >
                      <div className={`w-5 h-5 rounded-full mr-4 flex items-center justify-center ${
                        plan.recommended ? 'bg-white/20' : 'bg-gray-200'
                      }`}>
                        <span className={`text-xs font-bold ${
                          plan.recommended ? 'text-white' : 'text-gray-700'
                        }`}>✓</span>
                      </div>
                      <span className={`text-sm font-medium ${
                        plan.recommended ? 'text-white' : 'text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              
                <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer" className="block">
                  <Button 
                    className={`w-full py-4 font-bold text-lg transition-all duration-300 ${
                      plan.recommended 
                        ? 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl' 
                        : 'btn-primary'
                    }`}
                  >
                    <span className="mr-2">💬</span>
                    LINEで相談する
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-12 rounded-2xl shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
          {/* 背景パターン */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}
            />
          </div>
          
          <div className="relative">
            <h3 className="text-3xl font-bold mb-8 text-white">その他のサービス</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center">
                  <div className="text-left">
                    <h4 className="font-bold text-white text-lg mb-1">AIチャットボット</h4>
                    <p className="text-gray-300 text-sm">自動対応システム</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-white tabular-nums">¥398,000</p>
                    <p className="text-gray-300 text-sm">〜</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center">
                  <div className="text-left">
                    <h4 className="font-bold text-white text-lg mb-1">受託開発</h4>
                    <p className="text-gray-300 text-sm">カスタムシステム</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-white">要相談</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-8">
              <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 text-lg font-bold">
                  <span className="mr-2">💬</span>
                  詳しく相談する
                </Button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}