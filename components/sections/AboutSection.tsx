'use client'

import { motion } from 'framer-motion'
import { VALUE_PROPOSITION, SKILLS } from '@/lib/constants'

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">サービス内容</h2>
            <p className="text-base md:text-lg text-[var(--gray-600)] mb-8 md:mb-12 leading-relaxed">
              適正価格で確実な効果を重視したホームページ制作
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              
              <h3 className="text-xl font-semibold mb-3 text-[var(--gray-800)]">費用対効果の最大化</h3>
              <p className="text-[var(--gray-600)]">必要な機能に絞り込み、13.2万円〜の適正価格を実現</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              
              <h3 className="text-xl font-semibold mb-3 text-[var(--gray-800)]">確実な成果</h3>
              <p className="text-[var(--gray-600)]">SEO対策・レスポンシブ対応を標準装備し、集客に直結</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              
              <h3 className="text-xl font-semibold mb-3 text-[var(--gray-800)]">スピード納品</h3>
              <p className="text-[var(--gray-600)]">シンプルな構成により、最短1週間で公開可能</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              
              <h3 className="text-xl font-semibold mb-3 text-[var(--gray-800)]">継続的なサポート</h3>
              <p className="text-[var(--gray-600)]">公開後の更新・改善も柔軟に対応</p>
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
                      className="bg-gray-100 px-4 py-3 rounded-lg text-sm font-medium text-gray-800 border border-gray-200"
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