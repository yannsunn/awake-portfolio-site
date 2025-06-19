'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Card, { CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import Button from '@/components/common/Button'
import Section, { SectionHeader } from '@/components/ui/Section'
import { WORKS } from '@/lib/constants'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

export default function WorksSection() {
  return (
    <Section id="works" background="white" padding="xl">
      <SectionHeader
        subtitle="Portfolio"
        title="My Work"
        description="過去に手がけたプロジェクトの一部をご紹介します。各プロジェクトでは、クライアントの要求を満たすために最新の技術とクリエイティブなアプローチを組み合わせています。"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {WORKS.map((work, index) => (
          <motion.div key={work.id} variants={cardVariants}>
            <Card variant="elevated" className="h-full group overflow-hidden">
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {work.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-gray-400">
                    {work.category === 'Web Development' ? '🌐' : 
                     work.category === 'Design' ? '🎨' : '📱'}
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="flex space-x-4">
                      <a
                        href={work.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 px-3 py-2 rounded text-sm hover:bg-white/30 transition-colors"
                      >
                        Live Demo
                      </a>
                      <a
                        href={work.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 px-3 py-2 rounded text-sm hover:bg-white/30 transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {work.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 leading-relaxed flex-1 text-sm">
                  {work.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={work.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full text-xs group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                    >
                      Demo
                    </Button>
                  </a>
                  <a
                    href={work.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button 
                      variant="ghost" 
                      className="w-full text-xs"
                    >
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-gray-600 mb-6">
          もっと多くのプロジェクトをご覧になりたい方は、GitHubプロフィールをチェックしてください。
        </p>
        <a
          href="https://github.com/awake"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View All Projects on GitHub
          </Button>
        </a>
      </motion.div>
    </Section>
  )
}