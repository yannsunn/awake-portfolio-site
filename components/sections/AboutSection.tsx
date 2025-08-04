'use client'

import { motion } from 'framer-motion'
import { VALUE_PROPOSITION } from '@/lib/constants'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">スマートな投資で、最大の効果を</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              なぜAwakeが選ばれるのか
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">費用対効果の最大化</h3>
              <p className="text-gray-600">必要な機能に絞り込み、13.2万円〜の適正価格を実現</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">確実な成果</h3>
              <p className="text-gray-600">SEO対策・レスポンシブ対応を標準装備し、集客に直結</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">スピード納品</h3>
              <p className="text-gray-600">シンプルな構成により、最短1週間で公開可能</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">継続的なサポート</h3>
              <p className="text-gray-600">公開後の更新・改善も柔軟に対応</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-gray-800 rounded-lg text-white"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">スマートな選択で、ビジネスを成長させる</h3>
            <p className="text-lg leading-relaxed text-white">
              本当に必要な機能に絞り込んだ効率的なWeb制作により、適正価格での高品質なサイトを実現。
              コストを抑えることで、お客様は浮いた予算を設備投資、人材育成、マーケティングなど、
              事業の本質的な成長に投資していただけます。これこそが真の費用対効果です。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}