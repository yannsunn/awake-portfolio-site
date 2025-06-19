'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import Section, { SectionHeader } from '@/components/ui/Section'
import { COMPANY_INFO } from '@/lib/constants'

export default function ContactSection() {
  const contactMethods = [
    {
      icon: '📞',
      title: 'お電話でのお問い合わせ',
      description: '平日 9:00-18:00',
      contact: COMPANY_INFO.phone,
      action: `tel:${COMPANY_INFO.phone.replace(/-/g, '')}`
    },
    {
      icon: '✉️',
      title: 'メールでのお問い合わせ',
      description: '24時間受付',
      contact: COMPANY_INFO.email,
      action: `mailto:${COMPANY_INFO.email}`
    },
    {
      icon: '📍',
      title: 'オフィス所在地',
      description: '東京都渋谷区',
      contact: COMPANY_INFO.address,
      action: '#'
    }
  ]

  return (
    <Section id="contact" background="light" padding="xl">
      <SectionHeader
        subtitle="Contact Us"
        title="お問い合わせ"
        description="ご質問やご相談がございましたら、お気軽にお問い合わせください。お客様のビジネス課題の解決に向けて、最適なソリューションをご提案いたします。"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{method.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {method.description}
                    </p>
                    <a 
                      href={method.action}
                      className="text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      {method.contact}
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <Card variant="elevated" className="p-8 text-center bg-gradient-to-br from-primary to-secondary text-white">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">
                無料相談を受付中
              </h3>
              <p className="text-blue-100 leading-relaxed">
                プロジェクトに関するご質問やお見積りなど、
                どんな小さなことでもお気軽にご相談ください。
                専門スタッフが丁寧にお答えいたします。
              </p>
            </div>

            <div className="space-y-4">
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full bg-white text-primary border-white hover:bg-gray-100 shadow-lg"
                >
                  お問い合わせフォーム
                </Button>
              </Link>
              
              <div className="text-blue-100 text-sm">
                または
              </div>
              
              <a href={`tel:${COMPANY_INFO.phone.replace(/-/g, '')}`}>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="w-full text-white border border-white/30 hover:bg-white/10"
                >
                  📞 {COMPANY_INFO.phone}
                </Button>
              </a>
            </div>

            {/* Response Time */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="flex items-center justify-center space-x-4 text-sm text-blue-100">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  平均24時間以内に回答
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  無料相談実施中
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}