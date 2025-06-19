'use client'

import { motion } from 'framer-motion'
import Section, { SectionHeader } from '@/components/ui/Section'
import Card from '@/components/common/Card'
import { SKILLS } from '@/lib/constants'

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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function SkillsSection() {
  return (
    <Section id="skills" background="light" padding="xl">
      <SectionHeader
        subtitle="Skills"
        title="What I Do"
        description="長年の経験を通じて習得した技術スタックです。常に新しい技術を学び、プロジェクトに最適なツールを選択しています。"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {SKILLS.map((skillCategory, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card variant="elevated" className="h-full text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white">
                  {index === 0 ? '🎨' : index === 1 ? '⚙️' : '🛠️'}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {skillCategory.category}
                </h3>
              </div>
              
              <div className="space-y-3">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          これらの技術を活用して、パフォーマンスが高く、ユーザビリティに優れた
          ウェブアプリケーションの開発を行っています。
          プロジェクトの要件に応じて、最適な技術スタックを選択し、
          品質の高いソリューションを提供します。
        </p>
      </motion.div>
    </Section>
  )
}