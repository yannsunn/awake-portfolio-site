'use client'

import { motion } from 'framer-motion'
import Section, { SectionHeader } from '@/components/ui/Section'
import Card from '@/components/common/Card'
import { SKILLS } from '@/lib/constants'

export default function SkillsSection() {
  return (
    <Section id="skills" background="white" padding="xl">
      <SectionHeader
        title="サービス内容"
        description="弊社が提供できるサービスは以下の2つに特化しています。どちらも「高額でない、確実な効果」を重視したアプローチです。"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
      >
        {SKILLS.map((skillCategory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" className="h-full text-center p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white">
                  {index === 0 ? '🌐' : '🤖'}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {skillCategory.category}
                </h3>
              </div>
              
              <div className="space-y-3">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-50 px-4 py-3 rounded-lg text-sm font-medium text-gray-700"
                  >
                    {skill}
                  </div>
                ))}
              </div>

              {index === 0 && (
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>制作費：13万2000円〜60万円</strong><br />
                    必要な機能に絞り込んで確実な効果を実現
                  </p>
                </div>
              )}

              {index === 1 && (
                <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>39万8000円〜</strong><br />
                    高額なプラットフォームを使わず実用的なAIシステムを構築
                  </p>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">なぜこの2つに特化？</h3>
          <p className="text-gray-600 leading-relaxed">
            ホームページ制作は確実にお客様の成果につながる分野です。
            AI開発も実用的なシステムを構築できます。
            それ以外の受託開発は信頼できる別の法人様にお任せすることで、
            お客様により良いサービスを提供できると考えています。
          </p>
        </div>
      </motion.div>
    </Section>
  )
}