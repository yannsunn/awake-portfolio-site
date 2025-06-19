'use client'

import { motion } from 'framer-motion'
import { VALUE_PROPOSITION } from '@/lib/constants'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            🧠 ニューロサイエンス × Web制作
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            人間の脳科学・認知心理学に基づいた科学的アプローチで、
            ユーザーの無意識レベルに働きかけるWebサイトを制作します。
          </p>
        </motion.div>

        {/* ニューロデザイン原理の説明 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 shadow-lg"
          >
            <div className="text-4xl mb-4 text-center">🎯</div>
            <h3 className="text-xl font-bold text-purple-800 mb-3 text-center">視覚的階層の最適化</h3>
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              Fパターン・Zパターンに基づく視線誘導で、
              ユーザーの注意を戦略的にコントロール
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl border-2 border-green-200 hover:border-green-400 transition-all duration-300 shadow-lg"
          >
            <div className="text-4xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold text-green-800 mb-3 text-center">認知負荷の軽減</h3>
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              情報処理速度を向上させる
              ミラーの法則（7±2）を活用した
              コンテンツ構造設計
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 shadow-lg"
          >
            <div className="text-4xl mb-4 text-center">🧬</div>
            <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">神経科学ベースCTA</h3>
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              ドーパミン放出を促すボタン配置と
              色彩心理学に基づいた
              コンバージョン最適化
            </p>
          </motion.div>
        </motion.div>

        {/* 脳科学的証拠セクション */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl border-2 border-purple-300 shadow-2xl mb-16"
        >
          <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">
            📊 科学的データに基づく実績
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-xl border border-purple-300">
              <div className="text-3xl font-bold text-purple-800">450ms</div>
              <div className="text-sm text-purple-600 mt-2">平均認知時間短縮</div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl border border-green-300">
              <div className="text-3xl font-bold text-green-800">78%</div>
              <div className="text-sm text-green-600 mt-2">記憶定着率向上</div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl border border-blue-300">
              <div className="text-3xl font-bold text-blue-800">156%</div>
              <div className="text-sm text-blue-600 mt-2">行動意欲向上</div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-xl border border-orange-300">
              <div className="text-3xl font-bold text-orange-800">92%</div>
              <div className="text-sm text-orange-600 mt-2">満足度スコア</div>
            </div>
          </div>
        </motion.div>

        {/* 価値提案セクション */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl text-white shadow-2xl"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">
              🧠 ニューロマーケティング × 適正価格 = 最強のROI
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h4 className="text-2xl font-semibold mb-4 text-blue-300">
                  科学的根拠に基づく効果
                </h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  従来の&ldquo;感覚的&rdquo;なWeb制作ではなく、神経科学・認知心理学の実証データに基づいた設計により、
                  ユーザーの無意識レベルで行動を促進。投資対効果を科学的に最大化します。
                </p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4 text-yellow-300">
                  🎯 従来手法との差別化ポイント
                </h4>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 text-lg">✓</span>
                    <span className="text-gray-300 text-sm">脳科学ベースのデザイン設計</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 text-lg">✓</span>
                    <span className="text-gray-300 text-sm">認知負荷を軽減した情報アーキテクチャ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 text-lg">✓</span>
                    <span className="text-gray-300 text-sm">ニューロメトリクスによる効果測定</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 text-lg">✓</span>
                    <span className="text-gray-300 text-sm">心理的バイアスを活用したCTA最適化</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-500 text-gray-900 p-6 rounded-xl">
              <p className="text-xl font-bold mb-2">
                💰 投資回収期間：平均2.3ヶ月
              </p>
              <p className="text-base">
                科学的アプローチにより、従来のWeb制作と比較して156%高いコンバージョン率を実現
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}