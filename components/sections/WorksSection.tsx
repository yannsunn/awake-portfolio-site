'use client'

import { useState, memo, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Card, { CardContent } from '@/components/common/Card'
import Button from '@/components/common/Button'
import { WORKS } from '@/lib/constants'
import type { Project } from '@/lib/types'
import { animationVariants } from '@/lib/utils'

const Dialog = lazy(() => import('@/components/ui/dialog').then(mod => ({ default: mod.Dialog })))
const DialogContent = lazy(() => import('@/components/ui/dialog').then(mod => ({ default: mod.DialogContent })))
const DialogDescription = lazy(() => import('@/components/ui/dialog').then(mod => ({ default: mod.DialogDescription })))
const DialogHeader = lazy(() => import('@/components/ui/dialog').then(mod => ({ default: mod.DialogHeader })))
const DialogTitle = lazy(() => import('@/components/ui/dialog').then(mod => ({ default: mod.DialogTitle })))


interface ProjectCardProps {
  project: Project
  onClick: () => void
}

const ProjectCard: React.FC<ProjectCardProps> = memo(({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className="cursor-pointer group relative" 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      <div 
        className="relative overflow-hidden h-full flex flex-col rounded-xl transition-all duration-500"
        style={{
          background: isHovered 
            ? "rgba(255, 255, 255, 0.98)" 
            : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(229, 231, 235, 0.3)",
          boxShadow: isHovered 
            ? "0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)" 
            : "0 10px 25px -8px rgba(0, 0, 0, 0.08)"
        }}
      >
        <div className="relative overflow-hidden aspect-[16/10] group">
          <motion.div 
            className="absolute inset-0"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={project.imageUrl} 
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              onError={() => {
                console.warn(`Failed to load image: ${project.imageUrl}`)
              }}
            />
          </motion.div>
          
          {/* 令和風グラデーションオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
          
          {/* 価格タグ - 和モダンスタイル */}
          <div className="absolute top-3 right-3 z-10">
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur-md opacity-50" />
              <span className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xs px-4 py-2 rounded-lg font-bold tabular-nums shadow-xl backdrop-blur-sm border border-white/20">
                {project.price}
              </span>
            </motion.div>
          </div>
          {/* ホバーオーバーレイ - 和モダンエフェクト */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* 背景ブラー効果 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur-[2px]" />
            
            <div className="relative text-center z-10">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <p className="text-white/90 text-sm font-medium mb-3 tracking-wider">
                  詳細を見る
                </p>
                {project.url && (
                  <motion.button
                    className="relative group/btn overflow-hidden bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full font-medium text-sm border border-white/30 hover:border-white/50 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.url, '_blank');
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">サイトを見る →</span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500/40 to-purple-500/40"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
        <CardContent className="p-6 flex-1 flex flex-col relative">
          {/* 装飾的な背景パターン */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-3xl" />
          </div>
          
          <div className="flex-1 relative">
            <motion.h3 
              className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {project.title}
            </motion.h3>
            
            <motion.div 
              className="flex flex-wrap items-center gap-2 text-sm mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-indigo-600 font-medium">{project.category}</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500">{project.duration}</span>
              {project.pages && (
                <>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500">{project.pages}</span>
                </>
              )}
            </motion.div>
            
            <motion.p 
              className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {project.description}
            </motion.p>
          </div>
        
        {project.marketPrice && (
          <motion.div 
            className="mb-4 p-4 rounded-xl relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(249, 250, 251, 0.8), rgba(243, 244, 246, 0.5))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(229, 231, 235, 0.3)"
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5" />
            <div className="flex justify-between items-center relative">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">他社相場</p>
                <p className="text-base text-gray-400 line-through tabular-nums">{project.marketPrice}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium text-indigo-600 uppercase tracking-wider mb-1">弊社価格</p>
                <p className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tabular-nums">{project.price}</p>
              </div>
            </div>
          </motion.div>
        )}
        
        {project.features && (
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex flex-wrap gap-2">
              {project.features.slice(0, 3).map((feature, index) => (
                <motion.span 
                  key={index}
                  className="relative overflow-hidden bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-700 text-xs px-3 py-1.5 rounded-full font-medium border border-indigo-200/30 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
        
        {project.result && (
          <motion.div 
            className="pt-4 mt-auto relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <div className="flex items-center pt-4">
              <motion.div 
                className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xs font-bold">✓</span>
              </motion.div>
              <span className="text-sm text-gray-700 font-medium">{project.result}</span>
            </div>
          </motion.div>
        )}
        </CardContent>
      </div>
    </motion.div>
  )
})

ProjectCard.displayName = 'ProjectCard'

export default function WorksSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <section id="portfolio" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          {...animationVariants.fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-black mb-6">制作実績</h2>
          <p className="text-lg text-[var(--gray-600)] max-w-3xl mx-auto leading-relaxed">
            これまでに制作したホームページの実績をご紹介します。<br />
            すべて「適正価格で確実な効果」にこだわった案件です。
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {WORKS.map(project => (
            <ProjectCard key={project.id} project={project} onClick={() => setActiveProject(project)} />
          ))}
        </motion.div>

        {/* プロジェクト詳細モーダル */}
        <Suspense fallback={<div className="fixed inset-0 bg-black/50 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div></div>}>
        <Dialog open={!!activeProject} onOpenChange={(open) => !open && setActiveProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {activeProject && (
              <>
                <DialogHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <DialogTitle className="text-2xl">{activeProject.title}</DialogTitle>
                      <DialogDescription className="text-base text-gray-600">
                        {activeProject.category} • 制作期間: {activeProject.duration}
                      </DialogDescription>
                      {activeProject.pages && (
                        <p className="text-sm text-gray-500 mt-1">{activeProject.pages}</p>
                      )}
                    </div>
                    {activeProject.url && (
                      <a 
                        href={activeProject.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
                      >
                        🔗 サイトを見る
                      </a>
                    )}
                  </div>
                </DialogHeader>
                <div className="mt-4">
                  <div 
                    className="relative w-full h-[400px] rounded-xl mb-8 cursor-pointer overflow-hidden group shadow-lg"
                    onClick={() => activeProject.url && window.open(activeProject.url, '_blank')}
                  >
                    <Image
                      src={activeProject.imageUrl} 
                      alt={activeProject.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 80vw"
                      loading="lazy"
                      onError={() => {
                        console.warn(`Failed to load modal image: ${activeProject.imageUrl}`)
                      }}
                    />
                    {activeProject.url && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8">
                        <span className="text-white font-medium text-lg">
                          クリックしてサイトを見る →
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {activeProject.marketPrice && (
                    <div className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                      <h3 className="text-lg font-bold mb-4">価格比較</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-700 mb-2">他社相場</p>
                          <p className="text-2xl text-gray-500 line-through tabular-nums">{activeProject.marketPrice}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-700 mb-2 font-medium">弊社参考価格</p>
                          <p className="text-3xl font-bold text-gray-900 tabular-nums">{activeProject.price}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-4 text-center">
                        ※内容によってご相談可能です
                      </p>
                    </div>
                  )}
                  
                  <p className="text-lg mb-6 leading-relaxed">{activeProject.longDescription}</p>
                  
                  {activeProject.features && (
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">主要機能</h3>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.features.map((feature, index) => (
                          <span 
                            key={index}
                            className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {activeProject.breakdown && (
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">制作内訳</h3>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">{activeProject.breakdown}</p>
                    </div>
                  )}
                  
                  {activeProject.result && (
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">実績・効果</h3>
                      <p className="text-green-600 font-medium">{activeProject.result}</p>
                    </div>
                  )}
                  
                  <div className="flex justify-end space-x-4 pt-6 border-t">
                    <Button variant="outline" onClick={() => setActiveProject(null)} className="btn-outline">
                      閉じる
                    </Button>
                    <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#00B900] text-white hover:bg-[#00A000] px-8 py-4 rounded-[var(--border-radius)] font-medium transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[var(--shadow-lg)] border-2 border-[#00B900]">
                        LINEで相談する
                      </Button>
                    </a>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
        </Suspense>
      </div>
    </section>
  )
}