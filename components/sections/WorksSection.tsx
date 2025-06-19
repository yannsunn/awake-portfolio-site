'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Card, { CardContent } from '@/components/common/Card'
import Button from '@/components/common/Button'
import { WORKS } from '@/lib/constants'

interface Project {
  id: number
  title: string
  category: string
  description: string
  longDescription: string
  imageUrl: string
  url?: string
  pages?: string
  marketPrice?: string
  price: string
  duration: string
  features?: string[]
  result?: string
  breakdown?: string
}

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-gray-400">
            {project.category === 'ホームページ制作' ? '🌐' : '🤖'}
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="bg-black text-white text-xs px-2 py-1 rounded">
            {project.price}
          </span>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
            詳細を見る
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
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
              <span className="text-green-600">弊社価格:</span>
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
}

export default function WorksSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">制作実績</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            これまでに制作したホームページの実績をご紹介します。
            すべて「適正価格で確実な効果」にこだわった案件です。
          </p>
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
                  <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-8xl text-gray-400">🌐</div>
                  </div>
                  
                  {activeProject.marketPrice && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold mb-2">価格比較</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-red-600">他社相場:</span>
                        <span className="text-red-600 line-through text-lg">{activeProject.marketPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-600 font-semibold">弊社価格:</span>
                        <span className="text-green-600 font-bold text-xl">{activeProject.price}</span>
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
                    <a href="https://manager.line.biz/account/@100usiub/setting?target=account-name" target="_blank" rel="noopener noreferrer">
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