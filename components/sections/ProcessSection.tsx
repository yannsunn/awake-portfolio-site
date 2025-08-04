'use client'

import { motion } from 'framer-motion'
import Section, { SectionHeader } from '@/components/ui/Section'
import Card from '@/components/common/Card'

const PROCESS_STEPS = [
  {
    step: "01",
    title: "ヒアリング",
    description: "お客様のご要望やご予算を詳しくお聞かせください。",
    details: "無料相談で事業内容、目標、ご予算を丁寧にヒアリング",
    icon: "💬"
  },
  {
    step: "02", 
    title: "提案・見積もり",
    description: "最適なプランをご提案し、明確な見積もりをお出しします。",
    details: "3営業日以内に詳細な提案書と正式見積もりを提出",
    icon: "📋"
  },
  {
    step: "03",
    title: "デザイン制作",
    description: "お客様のブランドに合わせたデザインを制作します。",
    details: "デザイン案を2-3パターン作成し、お客様と詳細を調整",
    icon: "🎨"
  },
  {
    step: "04",
    title: "開発・実装",
    description: "レスポンシブ対応とSEO対策を施して実装します。",
    details: "コーディング・機能実装・テスト・最適化を並行実施",
    icon: "⚙️"
  },
  {
    step: "05",
    title: "公開・納品",
    description: "本番環境での動作確認後、正式に公開します。",
    details: "最終チェック・お客様確認・本番公開・操作説明",
    icon: "🚀"
  },
  {
    step: "06",
    title: "アフターサポート",
    description: "公開後の更新や改善もしっかりサポートします。",
    details: "運用サポート・更新作業・改善提案を継続的に提供",
    icon: "🔧"
  }
]

export default function ProcessSection() {
  return (
    <Section id="process" background="white" padding="xl">
      <SectionHeader
        title="制作プロセス"
        description="お客様に安心してご依頼いただけるよう、明確で透明性の高い制作フローをご用意しています。"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card variant="elevated" className="h-full p-8 text-center relative overflow-hidden">
                {/* Background Number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 leading-none">
                  {step.step}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="inline-block bg-gray-800 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                    STEP {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{step.description}</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500">{step.details}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">制作期間の目安</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-lg font-bold mb-2">スターター</div>
                <div className="text-2xl font-bold">1週間</div>
                <div className="text-sm opacity-90">13万2000円</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-lg font-bold mb-2">ベーシック</div>
                <div className="text-2xl font-bold">2週間</div>
                <div className="text-sm opacity-90">29万8000円</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-lg font-bold mb-2">プレミアム</div>
                <div className="text-2xl font-bold">1ヶ月</div>
                <div className="text-sm opacity-90">69万8000円〜</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}