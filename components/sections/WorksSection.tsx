'use client'

import { useState, memo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { WORKS } from '@/lib/constants'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = memo(({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      className="group relative glass glass-hover overflow-hidden transition-all duration-500"
      style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02)'}}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* 画像セクション */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        
        {/* 価格バッジ */}
        <div className="absolute top-4 right-4 z-10">
          <motion.div
            className="glass px-4 py-2 rounded-full border border-white/30"
            style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02)'}}
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
          <span className="px-2 py-1 glass-minimal text-blue-700 font-medium backdrop-blur-sm" style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02)'}}>
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
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
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
    <section id="portfolio" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            制作実績
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            これまでに制作したホームページの実績をご紹介します。
            <br />
            すべて「適正価格での効果的な制作」を心がけた案件です。
          </p>
        </motion.div>

        {/* プロジェクトグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02)'}}
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