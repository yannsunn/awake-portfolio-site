'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { commonStyles } from '@/lib/styles'
import { animations } from '@/lib/animations'

const ILLUSTRATIONS = [
  {
    id: 1,
    title: 'Vintage Iron Works',
    category: 'ランディングページ',
    description: '職人が作るアイアン製品の世界観を表現した、温かみのあるデザイン',
    imageUrl: '/images/illustrations/vintage-iron-works.png',
    features: ['オリジナルイラスト', 'ブランディング', 'UIデザイン'],
    style: 'ヴィンテージ・クラフトマンシップ',
  },
  {
    id: 2,
    title: 'CLEMIRA製品紹介',
    category: 'ECサイト',
    description: '身体機能向上をサポートする革新的製品CLEMIRAの直販サイト',
    imageUrl: '/images/illustrations/clemira-shop.png',
    features: ['商品撮影', 'メディア掲載実績', 'YouTubeチャンネル連携'],
    style: 'モダン・プロフェッショナル',
  },
  {
    id: 3,
    title: '保険相談LP',
    category: 'ランディングページ',
    description: '「もっと早く相談していれば...」温かみのあるコピーと柔らかな色調',
    imageUrl: '/images/illustrations/insurance-lp.png',
    features: ['エモーショナルコピー', 'やわらかな配色', '信頼感の演出'],
    style: 'ウォーム・トラスト',
  },
]

const DESIGN_FEATURES = [
  {
    icon: '🎨',
    title: 'オリジナルデザイン',
    description: 'ブランドの世界観を表現する完全オリジナルデザイン',
  },
  {
    icon: '🎯',
    title: 'ターゲット最適化',
    description: '顧客層に響くビジュアルとメッセージング',
  },
  {
    icon: '💫',
    title: 'ブランディング',
    description: '記憶に残る独自性の高いビジュアル表現',
  },
  {
    icon: '📱',
    title: 'レスポンシブ対応',
    description: 'どのデバイスでも美しく表示される設計',
  },
]

export default function IllustrationSection() {
  return (
    <section id="illustrations" className="section-padding bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* ヘッダー */}
        <motion.div
          {...animations.fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            {...animations.scaleUp}
            className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full mb-4"
          >
            🎨 デザイン制作
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            オリジナルイラスト・デザイン制作
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ブランドの世界観を表現する、印象的なビジュアルデザインを制作します。<br />
            ランディングページから製品紹介まで、幅広いデザインニーズに対応。
          </p>
        </motion.div>

        {/* イラストギャラリー */}
        <div className="space-y-20 mb-20">
          {ILLUSTRATIONS.map((illustration, index) => (
            <motion.div
              key={illustration.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* 画像 */}
              <motion.div 
                className="flex-1 w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="relative rounded-2xl overflow-hidden bg-white border border-gray-100 group"
                  style={{ boxShadow: commonStyles.shadow.subtle }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={illustration.imageUrl}
                      alt={illustration.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>

              {/* 説明 */}
              <div className="flex-1 w-full">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
                    {illustration.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    {illustration.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {illustration.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                      デザインスタイル
                    </h4>
                    <p className="text-gray-900 font-semibold">
                      {illustration.style}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {illustration.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* デザインの特徴 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-900">
            デザイン制作の特徴
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESIGN_FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100" style={{ boxShadow: commonStyles.shadow.subtle }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              イラスト・デザイン制作のご相談
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              ブランドの世界観を表現する、オリジナルデザインを制作いたします。<br />
              まずはお気軽にご相談ください。
            </p>
            <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer">
              <button className="btn-line">
                LINEで相談する
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}