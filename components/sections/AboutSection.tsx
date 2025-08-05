'use client'

import { motion } from 'framer-motion'
import { VALUE_PROPOSITION, SKILLS } from '@/lib/constants'

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
            <h2 className="text-4xl font-bold mb-6 text-gray-800">サービス内容</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              適正価格で確実な効果を重視したホームページ制作
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
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">継続的なサポート</h3>
              <p className="text-gray-600">公開後の更新・改善も柔軟に対応</p>
            </motion.div>
          </motion.div>

          {/* サービス詳細 */}
          {SKILLS.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <div className="bg-white border border-gray-200 rounded-[var(--border-radius)] p-8 shadow-[var(--shadow-md)]">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {skillCategory.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-50 px-4 py-3 rounded-lg text-sm font-medium text-gray-700"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}