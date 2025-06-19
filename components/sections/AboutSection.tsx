'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/common/Button'
import Section, { SectionHeader } from '@/components/ui/Section'
import { COMPANY_INFO } from '@/lib/constants'

export default function AboutSection() {
  const stats = [
    { label: '設立年', value: COMPANY_INFO.founded },
    { label: '資本金', value: COMPANY_INFO.capital },
    { label: '従業員数', value: COMPANY_INFO.employees }
  ]

  return (
    <Section id="about" padding="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            subtitle="About Us"
            title="私たちについて"
            description=""
            centered={false}
          />
          
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-lg">
              {COMPANY_INFO.name}は、革新的なデジタルソリューションを通じて、
              企業の成長と変革を支援する会社です。
            </p>
            <p>
              ホームページ制作からAIコンサルティング、Amazon代理店サービスまで、
              幅広い領域でお客様のビジネス課題を解決します。
              最新技術と豊富な経験を活かし、一人ひとりのお客様に最適なソリューションを提供いたします。
            </p>
            <p>
              私たちの使命は、テクノロジーの力でお客様の夢を実現し、
              より良い未来を共に創造することです。
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6 my-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/about">
              <Button>詳しく見る</Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-white/10"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">私たちのビジョン</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                テクノロジーで世界をより良く。
                革新的なソリューションを通じて、
                お客様と共に未来を創造していきます。
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-accent text-2xl font-bold">Innovation</div>
                  <div className="text-sm text-blue-100">革新</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-accent text-2xl font-bold">Excellence</div>
                  <div className="text-sm text-blue-100">卓越</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-accent text-2xl font-bold">Partnership</div>
                  <div className="text-sm text-blue-100">協働</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-accent text-2xl font-bold">Growth</div>
                  <div className="text-sm text-blue-100">成長</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}