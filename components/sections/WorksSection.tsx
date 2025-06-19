'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Card, { CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import Button from '@/components/common/Button'
import Section, { SectionHeader } from '@/components/ui/Section'

const works = [
  {
    id: 1,
    title: 'コーポレートサイトリニューアル',
    category: 'Web制作',
    description: 'IT企業様のコーポレートサイトを最新のデザインとパフォーマンスで全面リニューアル',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/work1.jpg',
    link: '/works/corporate-renewal'
  },
  {
    id: 2,
    title: 'AI チャットボット導入支援',
    category: 'AIコンサルティング',
    description: 'カスタマーサポート業務の効率化を目的としたAIチャットボットの設計・導入',
    tags: ['OpenAI', 'Python', 'AWS'],
    image: '/images/work2.jpg',
    link: '/works/ai-chatbot'
  },
  {
    id: 3,
    title: 'Amazon売上最適化プロジェクト',
    category: 'Amazon代理店',
    description: 'データ分析による商品ランキング向上と売上300%アップを実現',
    tags: ['Amazon SEO', 'データ分析', 'PPC広告'],
    image: '/images/work3.jpg',
    link: '/works/amazon-optimization'
  }
]

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
        subtitle="Our Works"
        title="実績・事例"
        description="これまでに手がけた代表的なプロジェクトをご紹介します。お客様の課題解決と成果にコミットした実績の数々をぜひご覧ください。"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {works.map((work, index) => (
          <motion.div key={work.id} variants={cardVariants}>
            <Card variant="elevated" className="h-full group overflow-hidden">
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 mb-4 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {work.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-gray-400">
                    {index === 0 ? '🌐' : index === 1 ? '🤖' : '📦'}
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {work.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 leading-relaxed flex-1">
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

                <Link href={work.link}>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                  >
                    詳細を見る
                  </Button>
                </Link>
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
        <Link href="/works">
          <Button size="lg" className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            すべての実績を見る
          </Button>
        </Link>
      </motion.div>
    </Section>
  )
}