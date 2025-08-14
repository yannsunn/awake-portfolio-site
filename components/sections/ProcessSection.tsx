'use client'

import { motion } from 'framer-motion'
import Section, { SectionHeader } from '@/components/ui/Section'
import Card from '@/components/common/Card'
import { commonStyles } from '@/lib/styles'

const PROCESS_STEPS = [
  {
    step: "01",
    title: "ヒアリング",
    description: "お客様のご要望やご予算を詳しくお聞かせください。",
    details: "無料相談で事業内容、目標、ご予算を丁寧にヒアリング",
    icon: "💬",
    stepColor: "text-[var(--accent)]"
  },
  {
    step: "02", 
    title: "提案・見積もり",
    description: "最適なプランをご提案し、明確な見積もりをお出しします。",
    details: "3営業日以内に詳細な提案書と正式見積もりを提出",
    icon: "📋",
    stepColor: "text-[var(--primary)]"
  },
  {
    step: "03",
    title: "デザイン制作",
    description: "お客様のブランドに合わせたデザインを制作します。",
    details: "デザイン案を2-3パターン作成し、お客様と詳細を調整",
    icon: "🎨",
    stepColor: "text-[var(--accent)]"
  },
  {
    step: "04",
    title: "開発・実装",
    description: "レスポンシブ対応とSEO対策を施して実装します。",
    details: "コーディング・機能実装・テスト・最適化を並行実施",
    icon: "⚙️",
    stepColor: "text-[var(--primary)]"
  },
  {
    step: "05",
    title: "公開・納品",
    description: "本番環境での動作確認後、正式に公開します。",
    details: "最終チェック・お客様確認・本番公開・操作説明",
    icon: "🚀",
    stepColor: "text-[var(--accent)]"
  },
  {
    step: "06",
    title: "アフターサポート",
    description: "公開後の更新や改善もしっかりサポートします。",
    details: "運用サポート・更新作業・改善提案を継続的に提供",
    icon: "🤝",
    stepColor: "text-[var(--primary)]"
  }
]

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-gradient-to-b from-white/50 via-gray-50/30 to-white/50 overflow-hidden relative">
      {/* 背景装飾 - グラデーションメッシュ */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] rounded-full blur-3xl opacity-15 animate-pulse-slow" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full blur-3xl opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] rounded-full blur-3xl opacity-10 animate-pulse-slow" style={{ animationDelay: '4s' }} />
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
            className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-full mb-4"
          >
            PROCESS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            制作プロセス
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            お客様に安心してご依頼いただけるよう、
            <br className="hidden md:block" />
            明確で透明性の高い制作フローをご用意しています
          </p>
        </motion.div>

        {/* プロセスカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ perspective: "1000px" }}
              className="relative group"
            >
              <motion.div
                whileHover={{ 
                  y: -8,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="h-full glass glass-hover transition-all duration-300 relative overflow-hidden" style={{boxShadow: commonStyles.shadow.subtle}}>
                  {/* 背景パターン */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" 
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                      }}
                    />
                  </div>
                  
                  {/* ステップ番号（背景） */}
                  <div className="absolute -top-8 -right-8 text-8xl font-black text-white/10 select-none">
                    {step.step}
                  </div>
                  
                  {/* コンテンツ */}
                  <div className="relative z-10">
                    {/* アイコン */}
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                      className="w-20 h-20 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/20"
                    >
                      <span className="text-3xl text-white">{step.icon}</span>
                    </motion.div>
                    
                    {/* ステップラベル */}
                    <div className="inline-block bg-[var(--primary)] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                      STEP {step.step}
                    </div>
                    
                    {/* タイトル */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    {/* 説明 */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* 詳細 */}
                    <div className="glass-minimal" style={{boxShadow: commonStyles.shadow.subtle}}>
                      <p className="text-sm text-gray-700 font-medium">
                        {step.details}
                      </p>
                    </div>
                    
                    {/* プログレスバー */}
                    <div className="mt-6 relative">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${((index + 1) / PROCESS_STEPS.length) * 100}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* ホバーエフェクト */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">制作期間の目安</h3>
            <p className="text-gray-600">プランごとの標準的な制作期間です</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                plan: "スターター",
                duration: "1週間",
                price: "13万2000円",
                features: ["1ページ", "基本SEO", "レスポンシブ対応"]
              },
              {
                plan: "ベーシック",
                duration: "2週間",
                price: "29万8000円",
                features: ["10ページまで", "CMS導入", "高度なSEO"]
              },
              {
                plan: "プレミアム",
                duration: "1ヶ月",
                price: "69万8000円〜",
                features: ["無制限", "EC機能", "カスタム開発"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="glass glass-hover transition-all duration-300" style={{boxShadow: commonStyles.shadow.subtle}}>
                  {/* プランラベル */}
                  <div className="inline-block bg-[var(--primary)] text-white text-sm font-bold px-4 py-2 rounded-full mb-4 backdrop-blur-md border border-white/20">
                    {item.plan}
                  </div>
                  
                  {/* 期間 */}
                  <div className="mb-4">
                    <div className="text-4xl font-black text-gray-900 mb-2">
                      {item.duration}
                    </div>
                    <div className="text-xl font-semibold text-gray-700">
                      {item.price}
                    </div>
                  </div>
                  
                  {/* 特徴 */}
                  <div className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-[var(--accent)] rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* ホバーエフェクト */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}