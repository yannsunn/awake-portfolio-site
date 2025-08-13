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
      className="cursor-pointer group h-full" 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div 
        className="relative overflow-hidden flex flex-col rounded-lg transition-all duration-300 h-full"
        style={{
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(229, 231, 235, 0.4)",
          boxShadow: isHovered 
            ? "0 12px 24px -6px rgba(0, 0, 0, 0.12)" 
            : "0 4px 12px -2px rgba(0, 0, 0, 0.06)",
          minHeight: "450px"
        }}
      >
        <div className="relative overflow-hidden aspect-[16/10] flex-shrink-0">
          <div className="absolute inset-0">
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
          </div>
          
          {/* シンプルな価格タグ */}
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-[var(--accent)] text-white text-xs px-3 py-1.5 rounded-md font-semibold tabular-nums">
              {project.price}
            </span>
          </div>
          {/* シンプルなホバーオーバーレイ */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <p className="text-white text-sm font-medium mb-2">
                クリックで詳細を見る
              </p>
              {project.url && (
                <motion.button
                  className="bg-white/90 text-gray-900 px-4 py-2 rounded-lg font-medium text-xs hover:bg-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.url, '_blank');
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  サイトを見る →
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
            {project.title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-800 mb-3">
            <span className="font-semibold">{project.category}</span>
            <span className="text-gray-700 font-bold">•</span>
            <span className="font-medium">{project.duration}</span>
            {project.pages && (
              <>
                <span className="text-gray-700 font-bold">•</span>
                <span className="font-medium">{project.pages}</span>
              </>
            )}
          </div>
          
          <p className="text-sm text-gray-800 leading-relaxed mb-4 h-[3.75rem] overflow-hidden line-clamp-3">
            {project.description}
          </p>
        
          {project.marketPrice && (
            <div className="mb-4 p-3 rounded-lg" style={{
              background: "rgba(249, 250, 251, 0.8)",
              border: "1px solid rgba(229, 231, 235, 0.5)"
            }}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">他社相場</p>
                  <p className="text-sm text-gray-600 line-through tabular-nums font-medium">{project.marketPrice}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-[var(--accent-dark)] uppercase tracking-wider mb-1">弊社価格</p>
                  <p className="text-lg font-black text-[var(--accent)] tabular-nums">{project.price}</p>
                </div>
              </div>
            </div>
          )}
        
          {project.features && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-1.5">
                {project.features.slice(0, 3).map((feature, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2.5 py-1 rounded font-semibold"
                    style={{
                      background: "rgba(59, 130, 246, 0.15)",
                      color: "var(--accent-dark)",
                      border: "1px solid rgba(59, 130, 246, 0.3)"
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
        
          {project.result && (
            <div className="border-t border-gray-400/20 pt-3 mt-auto">
              <div className="flex items-start">
                <div className="w-5 h-5 bg-green-600 text-white rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-xs text-gray-900 font-semibold line-clamp-2">{project.result}</span>
              </div>
            </div>
          )}
        </div>
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
                    className="relative w-full h-[400px] rounded-xl mb-8 cursor-pointer overflow-hidden group border border-gray-50"
                    style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02)'}}
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