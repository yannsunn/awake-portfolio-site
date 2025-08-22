'use client'

import { motion } from 'framer-motion'
import { VALUE_PROPOSITION, SKILLS, PRICING } from '@/lib/constants'
import { commonStyles } from '@/lib/styles'

const SERVICE_FEATURES = [
  {
    icon: '💰',
    title: '費用対効果の最大化',
    description: `必要な機能に絞り込み、${PRICING.starter.description}の明確な価格設定`
  },
  {
    icon: '🎯',
    title: '確実な成果',
    description: 'SEO対策・レスポンシブ対応を標準装備'
  },
  {
    icon: '⚡',
    title: 'スピード納品',
    description: 'シンプルな構成により、1週間程度での公開を目指します'
  },
  {
    icon: '🤝',
    title: '継続的なサポート',
    description: '公開後の更新・改善も柔軟に対応'
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50/50 via-white/30 to-gray-50/50 overflow-hidden relative">
      {/* 背景装飾 - グラデーションメッシュ */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] rounded-full blur-3xl opacity-10 animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full blur-3xl opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] rounded-full blur-3xl opacity-5 animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
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
            SERVICE
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            私たちの強み
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            適正価格で効果的なホームページ制作を通じて、
            <br className="hidden md:block" />
            お客様のビジネスをサポートします
          </p>
        </motion.div>

        {/* サービス特徴カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {SERVICE_FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              <div className="h-full glass glass-hover transition-all duration-300 transform hover:-translate-y-2 group p-6" style={{boxShadow: commonStyles.shadow.subtle}}>
                {/* アイコン */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-light)]/20 backdrop-blur-xl rounded-xl flex items-center justify-center mb-6 border border-white/20"
                >
                  <span className="text-2xl text-white">{feature.icon}</span>
                </motion.div>
                
                {/* コンテンツ */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                {/* ホバーエフェクト */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* スキルカード */}
        <div className="space-y-8">
          {SKILLS.map((skillCategory, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-3xl overflow-hidden" style={{boxShadow: commonStyles.shadow.subtle}}>
                {/* カテゴリーヘッダー */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      {categoryIndex === 0 ? '🎨' : categoryIndex === 1 ? '⚙️' : '🚀'}
                    </span>
                    {skillCategory.category}
                  </h3>
                </div>
                
                {/* スキルタグ */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-3">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="relative group"
                      >
                        <div className="glass-minimal px-6 py-3 hover:bg-white/80 transition-all duration-300" style={{boxShadow: commonStyles.shadow.subtle}}>
                          <span className="text-sm font-semibold text-gray-800 relative z-10">
                            {skill}
                          </span>
                          {/* ホバー時のグラデーション */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
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
            お客様のビジネスに最適なソリューションをご提案します
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 glass px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white backdrop-blur-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            無料相談を始める
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}