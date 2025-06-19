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
  price: string
  duration: string
  features?: string[]
  result?: string
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
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{project.category} | {project.duration}</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">{project.description}</p>
        
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
                  <DialogTitle className="text-2xl">{activeProject.title}</DialogTitle>
                  <DialogDescription className="text-base text-gray-600">
                    {activeProject.category} • {activeProject.price} • 制作期間: {activeProject.duration}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-8xl text-gray-400">
                      {activeProject.category === 'ホームページ制作' ? '🌐' : '🤖'}
                    </div>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">{activeProject.longDescription}</p>
                  <div className="flex justify-end space-x-4">
                    <Button variant="outline" onClick={() => setActiveProject(null)}>
                      閉じる
                    </Button>
                    <Button className="bg-black hover:bg-gray-800 text-white">
                      お問い合わせ
                    </Button>
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