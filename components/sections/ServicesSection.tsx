'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const SERVICES = [
  {
    id: 1,
    title: "ホームページ制作",
    subtitle: "Web Development",
    description: "企業サイトから個人サイトまで、目的に合わせた最適なWebサイトを制作します",
    icon: "🌐",
    features: [
      "レスポンシブデザイン",
      "SEO最適化",
      "高速表示",
      "セキュリティ対策"
    ],
    price: "13.2万円〜",
    duration: "1週間〜",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
    popular: false
  },
  {
    id: 2,
    title: "ECサイト構築",
    subtitle: "E-Commerce",
    description: "売れるネットショップを構築。決済から在庫管理まで一括サポート",
    icon: "🛒",
    features: [
      "カート機能",
      "決済システム",
      "在庫管理",
      "売上分析"
    ],
    price: "69.8万円〜",
    duration: "1ヶ月〜",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    popular: true
  },
  {
    id: 3,
    title: "LP制作",
    subtitle: "Landing Page",
    description: "コンバージョン率を最大化する、効果的なランディングページを制作",
    icon: "📱",
    features: [
      "A/Bテスト対応",
      "高速表示",
      "CTA最適化",
      "分析ツール導入"
    ],
    price: "19.8万円〜",
    duration: "1週間〜",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    popular: false
  },
  {
    id: 4,
    title: "システム開発",
    subtitle: "System Development",
    description: "業務効率化を実現するカスタムシステムを開発します",
    icon: "⚙️",
    features: [
      "要件定義",
      "カスタム開発",
      "API連携",
      "保守サポート"
    ],
    price: "要相談",
    duration: "2ヶ月〜",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
    borderColor: "border-orange-200",
    popular: false
  },
  {
    id: 5,
    title: "Webアプリ開発",
    subtitle: "Web Application",
    description: "ユーザー体験を重視した、高機能なWebアプリケーションを開発",
    icon: "💻",
    features: [
      "SPA開発",
      "リアルタイム機能",
      "クラウド対応",
      "スケーラブル設計"
    ],
    price: "98万円〜",
    duration: "2ヶ月〜",
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-50 to-blue-50",
    borderColor: "border-indigo-200",
    popular: false
  },
  {
    id: 6,
    title: "保守・運用",
    subtitle: "Maintenance",
    description: "安定稼働を支える継続的なメンテナンスとサポート",
    icon: "🛡️",
    features: [
      "定期更新",
      "セキュリティ対策",
      "バックアップ",
      "24時間監視"
    ],
    price: "月額3万円〜",
    duration: "継続",
    color: "from-teal-500 to-green-500",
    bgColor: "from-teal-50 to-green-50",
    borderColor: "border-teal-200",
    popular: false
  }
]

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden relative">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-green-100 to-teal-100 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full mb-4"
          >
            SERVICES
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            サービス一覧
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            お客様のニーズに合わせた多様なサービスで、
            <br className="hidden md:block" />
            ビジネスの成長を総合的にサポートします
          </p>
        </motion.div>

        {/* サービスカードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative"
            >
              {/* 人気バッジ */}
              {service.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  className="absolute -top-3 right-4 z-20"
                >
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                    人気No.1
                  </span>
                </motion.div>
              )}

              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <div className={`h-full bg-gradient-to-br ${service.bgColor} border-2 ${service.borderColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative group`}>
                  {/* カードヘッダー */}
                  <div className={`bg-gradient-to-r ${service.color} p-6 relative overflow-hidden`}>
                    {/* 背景パターン */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" 
                        style={{
                          backgroundImage: `linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))`,
                          backgroundSize: '20px 20px'
                        }}
                      />
                    </div>

                    <div className="relative z-10">
                      {/* アイコン */}
                      <motion.div
                        animate={{ 
                          rotate: hoveredId === service.id ? [0, -10, 10, 0] : 0,
                          scale: hoveredId === service.id ? 1.1 : 1
                        }}
                        transition={{ duration: 0.5 }}
                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4"
                      >
                        <span className="text-3xl">{service.icon}</span>
                      </motion.div>

                      {/* タイトル */}
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-sm font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* カードボディ */}
                  <div className="p-6">
                    {/* 説明 */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* 機能リスト */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-6 h-6 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* 価格と期間 */}
                    <div className="pt-6 border-t border-gray-200">
                      <div className="flex justify-between items-end mb-4">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">価格</p>
                          <p className="text-2xl font-bold text-gray-900">{service.price}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500 mb-1">納期</p>
                          <p className="text-lg font-semibold text-gray-700">{service.duration}</p>
                        </div>
                      </div>

                      {/* CTAボタン */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300`}
                      >
                        詳細を見る
                      </motion.button>
                    </div>
                  </div>

                  {/* ホバーエフェクト */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            どのサービスが最適かお悩みの方はお気軽にご相談ください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              無料相談を始める
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg hover:border-gray-400 transition-all duration-300"
            >
              料金プランを見る
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}