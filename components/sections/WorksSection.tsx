'use client'

import { useState, memo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Card, { CardContent } from '@/components/common/Card'
import Button from '@/components/common/Button'
import { WORKS } from '@/lib/constants'
import type { Project } from '@/lib/types'
import { animationVariants } from '@/lib/utils'


interface ProjectCardProps {
  project: Project
  onClick: () => void
}

const ProjectCard: React.FC<ProjectCardProps> = memo(({ project, onClick }) => {
  return (
    <motion.div 
      className="cursor-pointer" 
      onClick={onClick}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 h-full border-0 bg-white">
      <div className="relative overflow-hidden aspect-[16/10]">
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
        <div className="absolute top-4 right-4">
          <span className="bg-black/90 backdrop-blur text-white text-sm px-4 py-2 rounded-full font-medium tabular-nums">
            {project.price}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between p-6">
          <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
            <p className="text-sm opacity-90">詳細を見る →</p>
          </div>
          {project.url && (
            <button
              className="bg-white/20 backdrop-blur border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-200 transform translate-y-4 group-hover:translate-y-0"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.url, '_blank');
              }}>
              <span className="text-sm font-medium">サイトを見る</span>
            </button>
          )}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
            <span>{project.category}</span>
            <span className="text-gray-300">•</span>
            <span>{project.duration}</span>
            {project.pages && (
              <>
                <span className="text-gray-300">•</span>
                <span>{project.pages}</span>
              </>
            )}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
        </div>
        
        {project.marketPrice && (
          <div className="mb-4 card-secondary">
            <div className="flex justify-between items-center">
              <div>
                <p className="price-label mb-1">他社相場</p>
                <p className="text-secondary line-through tabular-nums">{project.marketPrice}</p>
              </div>
              <div className="text-right">
                <p className="price-label mb-1">弊社参考価格</p>
                <p className="price-display">{project.price}</p>
              </div>
            </div>
          </div>
        )}
        
        {project.features && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.features.slice(0, 3).map((feature, index) => (
                <span 
                  key={index}
                  className="inline-block bg-gray-900 text-white text-sm px-4 py-2 rounded-lg font-bold"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {project.result && (
          <div className="border-t-2 border-gray-200 pt-4">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-3">
                <span className="text-sm font-bold">✓</span>
              </div>
              <span className="text-primary text-base">{project.result}</span>
            </div>
          </div>
        )}
      </CardContent>
      </Card>
    </motion.div>
  )
})

ProjectCard.displayName = 'ProjectCard'

export default function WorksSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          {...animationVariants.fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">制作実績</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            これまでに制作したホームページの実績をご紹介します。<br />
            すべて「適正価格で確実な効果」にこだわった案件です。
          </p>
        </motion.div>

        {/* 価格相談についての大きな案内 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 mb-16 text-center"
        >
          {/* 背景パターン */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}
            />
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="text-4xl">💡</span>
            </motion.div>
            
            <h3 className="text-3xl font-bold text-white mb-6">
              弊社価格は参考価格です
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              表示されている価格はあくまで参考価格となります。<br />
              お客様のご要望・ご予算・サイト内容に応じて<br />
              <span className="text-2xl font-bold text-white">柔軟にご相談</span>させていただきます。
            </p>
            <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button className="btn-primary bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 text-lg font-bold">
                <span className="mr-2">💬</span>
                LINEで価格相談する
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {WORKS.map(project => (
            <ProjectCard key={project.id} project={project} onClick={() => setActiveProject(project)} />
          ))}
        </motion.div>

        {/* プロジェクト詳細モーダル */}
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
                          <p className="text-sm text-gray-500 mb-2">他社相場</p>
                          <p className="text-2xl text-gray-400 line-through tabular-nums">{activeProject.marketPrice}</p>
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
                      <p className="text-green-600 font-medium">📈 {activeProject.result}</p>
                    </div>
                  )}
                  
                  <div className="flex justify-end space-x-4 pt-6 border-t">
                    <Button variant="outline" onClick={() => setActiveProject(null)} className="btn-outline">
                      閉じる
                    </Button>
                    <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer">
                      <Button className="btn-primary">
                        <span className="mr-2">💬</span>
                        LINEで相談する
                      </Button>
                    </a>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}