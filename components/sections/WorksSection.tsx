'use client'

import { useState, memo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { WORKS } from '@/lib/constants'
import { commonStyles } from '@/lib/styles'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = memo(({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 border-2 border-transparent hover:border-blue-500"
      style={{boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'}}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -12, scale: 1.03 }}
    >
      {/* 画像セクション */}
      <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 rounded-t-2xl">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-115"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        
        {/* 価格バッジ */}
        <div className="absolute top-4 right-4 z-10">
          <motion.div
            className="glass px-4 py-2 rounded-full border border-white/30"
            style={{boxShadow: commonStyles.shadow.subtle}}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <span className="text-sm font-bold text-gray-900">{project.price}</span>
          </motion.div>
        </div>

        {/* ホバーオーバーレイ */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full">
            {project.url && (
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                onClick={(e) => e.stopPropagation()}
              >
                サイトを見る
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      {/* コンテンツセクション */}
      <div className="p-6">
        {/* カテゴリー & 期間 */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="px-2 py-1 glass-minimal text-blue-700 font-medium backdrop-blur-sm" style={{boxShadow: commonStyles.shadow.subtle}}>
            {project.category}
          </span>
          <span>{project.duration}</span>
          {project.pages && (
            <>
              <span>•</span>
              <span>{project.pages}</span>
            </>
          )}
        </div>

        {/* タイトル */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        {/* 説明 */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* 価格比較（あれば） */}
        {project.marketPrice && (
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">他社相場</p>
              <p className="text-sm text-gray-400 line-through">{project.marketPrice}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">弊社価格</p>
              <p className="text-lg font-bold text-blue-600">{project.price}</p>
            </div>
          </div>
        )}

        {/* 機能タグ */}
        {project.features && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.features.slice(0, 3).map((feature, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* 成果 */}
        {project.result && (
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm text-gray-700 font-medium">{project.result}</span>
            </div>
          </div>
        )}
      </div>
    </motion.article>
  )
})

ProjectCard.displayName = 'ProjectCard'

export default function WorksSection() {
  return (
    <section id="portfolio" className="section-padding-lg bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-full mb-6 shadow-lg"
          >
            ⭐ PORTFOLIO
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6">
            制作実績
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
            これまでに制作したホームページの実績をご紹介します。
            <br />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2 inline-block">
              すべて適正価格での効果的な制作
            </span>
          </p>
        </motion.div>

        {/* プロジェクトグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {WORKS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            その他の実績も多数ございます
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all"
            style={{boxShadow: commonStyles.shadow.subtle}}
          >
            お問い合わせはこちら
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}