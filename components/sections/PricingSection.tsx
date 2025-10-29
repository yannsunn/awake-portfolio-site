'use client'

import { motion } from 'framer-motion'
import { commonStyles } from '@/lib/styles'
import { PRICING } from '@/lib/constants'
import BackgroundDecorations from '@/components/common/BackgroundDecorations'
import SectionHeader from '@/components/common/SectionHeader'
import AnimatedCard from '@/components/common/AnimatedCard'
import LineConsultationButton from '@/components/common/LineConsultationButton'

const PRICING_PLANS = [
  {
    name: "スターター",
    price: PRICING.starter.priceJPY,
    originalPrice: PRICING.starter.priceDisplay,
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
    price: PRICING.basic.priceJPY,
    originalPrice: PRICING.basic.priceDisplay,
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
    price: PRICING.premium.priceJPY,
    originalPrice: PRICING.premium.priceDisplay,
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
    <section id="pricing" className="relative section-padding bg-gradient-to-b from-white/50 via-gray-50/30 to-white/50 overflow-hidden">
      <BackgroundDecorations variant="pricing" opacity={10} />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative">
        <div className="text-center mb-12 md:mb-16">
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
              
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">料金プラン</h2>
            <p className="text-base md:text-lg text-[var(--gray-600)] max-w-3xl mx-auto leading-relaxed">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
              whileHover={{ y: -8, scale: 1.01 }}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 text-base font-bold rounded-full shadow-lg">
                    おすすめ
                  </span>
                </div>
              )}
              <div className={`h-full relative overflow-hidden rounded-2xl ${
                plan.recommended 
                  ? 'bg-white border-4 border-orange-500 shadow-2xl' 
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}>
                {/* ホバー時のグラデーションオーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="text-center h-full flex flex-col relative z-10 p-8">
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {plan.name}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {plan.description}
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="mb-10"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.15, type: "spring", bounce: 0.3 }}
                  >
                    <div className={`text-4xl sm:text-5xl font-black mb-3 tabular-nums ${
                      plan.recommended ? 'text-orange-500' : 'text-gray-900'
                    }`}>
                      ¥{plan.price.toLocaleString()}
                    </div>
                    <p className="text-sm uppercase tracking-wide font-bold text-gray-700">
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
                          className={`w-10 h-10 rounded-xl mr-4 flex items-center justify-center transition-all duration-300 border ${
                            plan.recommended 
                              ? 'bg-orange-100 text-orange-600 border-orange-300' 
                              : 'bg-gray-100 text-gray-700 border-gray-300'
                          }`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-sm font-bold">✓</span>
                        </motion.div>
                        <span className="text-base font-semibold text-gray-900 transition-colors duration-300">
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
                        className="btn-line glow-effect w-full"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          LINEで相談する
                        </span>
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
          className="mt-12 md:mt-16 lg:mt-20 text-center"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-50 max-w-6xl mx-auto" style={{boxShadow: commonStyles.shadow.subtle}}>
            {/* 動的背景エフェクト */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-3 h-3 bg-[var(--accent)] rounded-full animate-float opacity-20" style={{animationDelay: '0s'}} />
              <div className="absolute top-20 right-20 w-2 h-2 bg-[var(--accent)] rounded-full animate-float opacity-30" style={{animationDelay: '1s'}} />
              <div className="absolute bottom-16 left-20 w-4 h-4 bg-[var(--accent)] rounded-full animate-float opacity-25" style={{animationDelay: '2s'}} />
            </div>
            
            {/* パターン背景 */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" 
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #6b7280 1px, transparent 1px)`,
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
                
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">その他のサービス</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div 
                  className="bg-white p-8 rounded-2xl border border-gray-50 group transition-all"
                  style={{boxShadow: commonStyles.shadow.subtle}}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-purple-600 transition-colors">
                        AIチャットボット
                      </h4>
                      <p className="text-gray-600 text-base">自動対応システム</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-black text-gray-900 tabular-nums group-hover:scale-110 transition-transform">¥398,000</p>
                      <p className="text-gray-500 text-sm">〜</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-8 rounded-2xl border border-gray-50 group transition-all"
                  style={{boxShadow: commonStyles.shadow.subtle}}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-blue-600 transition-colors">
                        受託開発
                      </h4>
                      <p className="text-gray-600 text-base">カスタムシステム</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-black text-gray-900 group-hover:scale-110 transition-transform">要相談</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer">
                  <button className="btn-line glow-effect px-12">
                    <span className="relative z-10 flex items-center justify-center">
                      LINEで相談する
                    </span>
                  </button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* プラン比較テーブル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-black text-white text-center">
                プラン比較表
              </h3>
              <p className="text-blue-100 text-center mt-2">
                各プランの詳細な機能比較
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 font-bold text-gray-900">機能</th>
                    <th className="text-center py-4 px-6 font-bold text-gray-700">
                      スターター
                    </th>
                    <th className="text-center py-4 px-6 font-bold bg-orange-50 text-orange-700 relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                          おすすめ
                        </span>
                      </div>
                      ベーシック
                    </th>
                    <th className="text-center py-4 px-6 font-bold text-gray-700">
                      プレミアム
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* 価格 */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">価格</td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-2xl font-black text-gray-900">
                        ¥{PRICING.starter.priceJPY.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center bg-orange-50">
                      <span className="text-2xl font-black text-orange-600">
                        ¥{PRICING.basic.priceJPY.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-2xl font-black text-gray-900">
                        ¥{PRICING.premium.priceJPY.toLocaleString()}
                      </span>
                    </td>
                  </tr>

                  {/* ページ数 */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">ページ数</td>
                    <td className="py-4 px-6 text-center text-gray-700">1ページ</td>
                    <td className="py-4 px-6 text-center bg-orange-50 font-bold text-gray-900">
                      10ページまで
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700">無制限</td>
                  </tr>

                  {/* レスポンシブ対応 */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">レスポンシブ対応</td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-green-600 text-2xl">✓</span>
                    </td>
                    <td className="py-4 px-6 text-center bg-orange-50">
                      <span className="text-green-600 text-2xl">✓</span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-green-600 text-2xl">✓</span>
                    </td>
                  </tr>

                  {/* SEO対策 */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">SEO対策</td>
                    <td className="py-4 px-6 text-center text-gray-600 text-sm">基本</td>
                    <td className="py-4 px-6 text-center bg-orange-50 font-bold text-gray-900">
                      高度
                    </td>
                    <td className="py-4 px-6 text-center font-bold text-gray-900">
                      最高レベル
                    </td>
                  </tr>

                  {/* CMS */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">
                      CMS（更新システム）
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-gray-400 text-xl">−</span>
                    </td>
                    <td className="py-4 px-6 text-center bg-orange-50">
                      <span className="text-green-600 text-2xl">✓</span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-green-600 text-2xl">✓</span>
                    </td>
                  </tr>

                  {/* お問い合わせフォーム */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">
                      お問い合わせフォーム
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-green-600 text-2xl">✓</span>
                    </td>
                    <td className="py-4 px-6 text-center bg-orange-50">
                      <span className="text-green-600 text-2xl">✓</span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-green-600 text-2xl">✓</span>
                    </td>
                  </tr>

                  {/* アクセス解析 */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">アクセス解析</td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-gray-400 text-xl">−</span>
                    </td>
                    <td className="py-4 px-6 text-center bg-orange-50">
                      <span className="text-green-600 text-2xl">✓</span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-green-600 text-2xl">✓</span>
                    </td>
                  </tr>

                  {/* EC機能 */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">
                      EC機能（決済・在庫管理）
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-gray-400 text-xl">−</span>
                    </td>
                    <td className="py-4 px-6 text-center bg-orange-50">
                      <span className="text-gray-400 text-xl">−</span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-green-600 text-2xl">✓</span>
                    </td>
                  </tr>

                  {/* 予約システム */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">予約システム</td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-gray-400 text-xl">−</span>
                    </td>
                    <td className="py-4 px-6 text-center bg-orange-50">
                      <span className="text-gray-400 text-xl">−</span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-green-600 text-2xl">✓</span>
                    </td>
                  </tr>

                  {/* カスタム機能 */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">カスタム機能</td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-gray-400 text-xl">−</span>
                    </td>
                    <td className="py-4 px-6 text-center bg-orange-50">
                      <span className="text-gray-400 text-xl">−</span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-green-600 text-2xl">✓</span>
                    </td>
                  </tr>

                  {/* 納期 */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">納期</td>
                    <td className="py-4 px-6 text-center text-gray-700">1-2週間</td>
                    <td className="py-4 px-6 text-center bg-orange-50 font-bold text-gray-900">
                      2-3週間
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700">1-2ヶ月</td>
                  </tr>

                  {/* CTAボタン */}
                  <tr>
                    <td className="py-6 px-6 font-medium text-gray-900">お申し込み</td>
                    <td className="py-6 px-6 text-center">
                      <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer">
                        <button className="bg-gray-700 text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-800 transition-colors text-sm">
                          相談する
                        </button>
                      </a>
                    </td>
                    <td className="py-6 px-6 text-center bg-orange-50">
                      <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer">
                        <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors shadow-lg">
                          相談する
                        </button>
                      </a>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer">
                        <button className="bg-gray-700 text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-800 transition-colors text-sm">
                          相談する
                        </button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}