'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const TESTIMONIALS = [
  {
    id: 1,
    name: "田中 太郎",
    company: "株式会社サンプル",
    role: "代表取締役",
    content: "制作費用を大幅に抑えながら、期待以上のクオリティのサイトを作っていただきました。SEO対策もバッチリで、お問い合わせが3倍に増えました。",
    rating: 5,
    avatar: "👨‍💼",
    projectType: "コーポレートサイト",
    result: "お問い合わせ3倍増",
    bgColor: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200"
  },
  {
    id: 2,
    name: "佐藤 花子",
    company: "美容サロン Bloom",
    role: "オーナー",
    content: "予算内で理想通りのデザインを実現してくれました。スマホ対応も完璧で、若いお客様からの予約が増えています。本当に感謝しています。",
    rating: 5,
    avatar: "👩‍💼",
    projectType: "店舗サイト",
    result: "予約数2.5倍増",
    bgColor: "from-pink-50 to-purple-50",
    borderColor: "border-pink-200"
  },
  {
    id: 3,
    name: "鈴木 一郎",
    company: "個人事業主",
    role: "コンサルタント",
    content: "個人事業主でも手が届く価格で、プロフェッショナルなサイトを作成していただきました。納期も早く、対応も丁寧で大満足です。",
    rating: 5,
    avatar: "👨‍💻",
    projectType: "個人サイト",
    result: "信頼性向上",
    bgColor: "from-green-50 to-emerald-50",
    borderColor: "border-green-200"
  },
  {
    id: 4,
    name: "山田 次郎",
    company: "ECショップ運営",
    role: "店長",
    content: "ECサイトの構築をお願いしました。使いやすい管理画面と、お客様にも好評なデザインで売上が1.8倍になりました。",
    rating: 5,
    avatar: "🛍️",
    projectType: "ECサイト",
    result: "売上1.8倍",
    bgColor: "from-orange-50 to-red-50",
    borderColor: "border-orange-200"
  },
  {
    id: 5,
    name: "高橋 美穂",
    company: "NPO法人みらい",
    role: "理事長",
    content: "限られた予算の中で、団体の活動を効果的に伝えるサイトを作っていただきました。寄付も増え、活動の幅が広がりました。",
    rating: 5,
    avatar: "🌱",
    projectType: "NPOサイト",
    result: "寄付金増加",
    bgColor: "from-teal-50 to-cyan-50",
    borderColor: "border-teal-200"
  },
  {
    id: 6,
    name: "伊藤 健太",
    company: "フィットネスジム FIT",
    role: "経営者",
    content: "競合他社との差別化ができる素晴らしいサイトになりました。会員登録数が大幅に増え、投資効果を実感しています。",
    rating: 5,
    avatar: "💪",
    projectType: "ジムサイト",
    result: "会員数40%増",
    bgColor: "from-purple-50 to-indigo-50",
    borderColor: "border-purple-200"
  }
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden relative">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20" />
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
            className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-semibold rounded-full mb-4"
          >
            TESTIMONIALS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            お客様の声
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            実際にご利用いただいたお客様から、
            <br className="hidden md:block" />
            嬉しいお声をたくさんいただいています
          </p>
        </motion.div>

        {/* テスティモニアルカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <div className={`h-full bg-gradient-to-br ${testimonial.bgColor} border ${testimonial.borderColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                  {/* 背景パターン */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="currentColor" />
                      <circle cx="50" cy="50" r="30" fill="currentColor" />
                      <circle cx="50" cy="50" r="20" fill="currentColor" />
                    </svg>
                  </div>

                  {/* 評価星 */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="text-yellow-500 text-xl"
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>

                  {/* コンテンツ */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed relative">
                    <span className="absolute -top-2 -left-2 text-4xl text-gray-300 opacity-50">"</span>
                    <p className="relative z-10 pl-4">
                      {testimonial.content}
                    </p>
                    <span className="absolute -bottom-6 right-0 text-4xl text-gray-300 opacity-50">"</span>
                  </blockquote>

                  {/* プロジェクトタイプと結果 */}
                  <div className="flex gap-2 mb-6">
                    <span className="px-3 py-1 bg-white/80 rounded-full text-xs font-semibold text-gray-700">
                      {testimonial.projectType}
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-semibold">
                      {testimonial.result}
                    </span>
                  </div>

                  {/* プロフィール */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200/50">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-md">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.company} / {testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* ホバーエフェクト */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
            あなたのビジネスも成功事例の仲間入りを
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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