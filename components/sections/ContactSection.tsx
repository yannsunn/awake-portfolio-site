'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import Section, { SectionHeader } from '@/components/ui/Section'
import { PROFILE } from '@/lib/constants'

export default function ContactSection() {
  const contactMethods = [
    {
      icon: '✉️',
      title: 'Email',
      description: 'プロジェクトについてお気軽にご相談ください',
      contact: PROFILE.email,
      action: `mailto:${PROFILE.email}`
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      description: 'プロフェッショナルなネットワーキング',
      contact: 'LinkedIn Profile',
      action: PROFILE.linkedin
    },
    {
      icon: '🐙',
      title: 'GitHub',
      description: 'コードとプロジェクトをご覧ください',
      contact: 'GitHub Profile',
      action: PROFILE.github
    }
  ]

  return (
    <Section id="contact" background="light" padding="xl">
      <SectionHeader
        subtitle="Get In Touch"
        title="Let's Work Together"
        description="新しいプロジェクトについて話し合いたい、質問がある、または単に挨拶したい場合は、お気軽にご連絡ください。"
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
                    <p className="text-gray-600 text-sm mb-3">
                      {method.description}
                    </p>
                    <a 
                      href={method.action}
                      target={method.action.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
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
                Ready to Start?
              </h3>
              <p className="text-blue-100 leading-relaxed">
                アイデアを現実に変えませんか？
                ご質問やプロジェクトのご相談など、
                どんなことでもお気軽にお聞かせください。
                一緒に素晴らしいものを作りましょう！
              </p>
            </div>

            <div className="space-y-4">
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full bg-white text-primary border-white hover:bg-gray-100 shadow-lg"
                >
                  Send Message
                </Button>
              </Link>
              
              <div className="text-blue-100 text-sm">
                または
              </div>
              
              <a href={`mailto:${PROFILE.email}`}>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="w-full text-white border border-white/30 hover:bg-white/10"
                >
                  ✉️ {PROFILE.email}
                </Button>
              </a>
            </div>

            {/* Response Info */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="flex items-center justify-center space-x-4 text-sm text-blue-100">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  通常24時間以内に返信
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  無料相談可能
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}