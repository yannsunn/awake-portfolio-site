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
    <div className="cursor-pointer" onClick={onClick}>
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
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
        <div className="absolute bottom-4 right-4">
          <span className="bg-black text-white text-xs px-2 py-1 rounded">
            {project.price}
          </span>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-center">
            <div className="mb-3 text-lg">詳細を見る</div>
            {project.url && (
              <div className="text-sm border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-200 cursor-pointer"
                   onClick={(e) => {
                     e.stopPropagation();
                     window.open(project.url, '_blank');
                   }}>
                🔗 サイトを見る
              </div>
            )}
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-end items-start mb-2">
          {project.url && (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              🔗
            </a>
          )}
        </div>
        
        <p className="text-sm text-gray-500 mb-2">{project.category} | {project.duration}</p>
        {project.pages && (
          <p className="text-xs text-gray-400 mb-2">{project.pages}</p>
        )}
        <p className="text-sm text-gray-600 leading-relaxed mb-3">{project.description}</p>
        
        {project.marketPrice && (
          <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded">
            <div className="flex justify-between text-xs">
              <span className="text-red-600">他社相場:</span>
              <span className="text-red-600 line-through">{project.marketPrice}</span>
            </div>
            <div className="flex justify-between text-sm font-bold">
              <span className="text-green-600">弊社参考価格:</span>
              <span className="text-green-600">{project.price}</span>
            </div>
          </div>
        )}
        
        {project.features && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {project.features.slice(0, 3).map((feature, index) => (
                <span 
                  key={index}
                  className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {project.result && (
          <div className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
            📈 {project.result}
          </div>
        )}
      </CardContent>
      </Card>
    </div>
  )
})

ProjectCard.displayName = 'ProjectCard'

export default function WorksSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          {...animationVariants.fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">制作実績</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            これまでに制作したホームページの実績をご紹介します。
            すべて「適正価格で確実な効果」にこだわった案件です。
          </p>
        </motion.div>

        {/* 価格相談についての大きな案内 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              💡 弊社価格は参考価格です
            </h3>
            <p className="text-lg text-blue-800 leading-relaxed">
              表示されている弊社価格はあくまで参考価格となります。<br />
              お客様のご要望・ご予算・サイト内容に応じて<span className="font-bold text-xl">柔軟にご相談</span>させていただきます。<br />
              まずはお気軽にLINEでお問い合わせください。
            </p>
            <a href="https://lin.ee/1bcTOVj" target="_blank" rel="noopener noreferrer" className="inline-block mt-6">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                LINEで価格相談する
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {WORKS.map(project => (
            <ProjectCard key={project.id} project={project} onClick={() => setActiveProject(project)} />
          ))}
        </motion.div>

        {/* プロジェクト詳細モーダル */}
        <Dialog open={!!activeProject} onOpenChange={(open) => !open && setActiveProject(null)}>
          <DialogContent className="max-w-4xl">
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
                    className="relative w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6 cursor-pointer overflow-hidden group"
                    onClick={() => activeProject.url && window.open(activeProject.url, '_blank')}
                  >
                    <Image
                      src={activeProject.imageUrl} 
                      alt={activeProject.title}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 80vw"
                      loading="lazy"
                      onError={() => {
                        console.warn(`Failed to load modal image: ${activeProject.imageUrl}`)
                      }}
                    />
                    {activeProject.url && (
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                          🔗 サイトを見る
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {activeProject.marketPrice && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold mb-2">価格比較</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-red-600">他社相場:</span>
                        <span className="text-red-600 line-through text-lg">{activeProject.marketPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-600 font-semibold">弊社参考価格:</span>
                        <span className="text-green-600 font-bold text-xl">{activeProject.price}</span>
                      </div>
                      <div className="text-sm text-gray-600 mt-2 text-center">
                        ※内容によってご相談可能です
                      </div>
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
                  
                  <div className="flex justify-end space-x-4">
                    <Button variant="outline" onClick={() => setActiveProject(null)}>
                      閉じる
                    </Button>
                    <a href="https://lin.ee/1bcTOVj" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-gray-800 hover:bg-gray-700 text-white">
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