'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Section, { SectionHeader } from '@/components/ui/Section'
import { PROFILE } from '@/lib/constants'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="お問い合わせ"
          description="プロジェクトのご相談やお問い合わせは、以下のフォームまたは直接ご連絡ください。高額でない確実なホームページ制作について、お気軽にご相談ください。"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <Input id="name" placeholder="山田 太郎" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <Input id="email" type="email" placeholder="example@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">
                  件名 <span className="text-red-500">*</span>
                </label>
                <Input id="subject" placeholder="ホームページ制作のお見積りについて" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <Textarea 
                  id="message" 
                  placeholder="ご希望やご質問をお聞かせください。予算感や納期などもお知らせいただけると、より具体的なご提案ができます。" 
                  rows={6} 
                />
              </div>
              <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 text-lg">
                送信する
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">連絡先情報</h3>
              <div className="space-y-4 mb-12">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                    ✉
                  </div>
                  <span>{PROFILE.email}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                    📞
                  </div>
                  <span>{PROFILE.phone}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                    📍
                  </div>
                  <span>{PROFILE.address}</span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">お見積りについて</h4>
                <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <span>シンプルなコーポレートサイト</span>
                    <span className="font-medium">25万円〜</span>
                  </div>
                  <div className="flex justify-between">
                    <span>機能付きビジネスサイト</span>
                    <span className="font-medium">35万円〜</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ECサイト（簡易版）</span>
                    <span className="font-medium">60万円〜</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AIチャットボット</span>
                    <span className="font-medium">50万円〜</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">SNS</h3>
              <div className="flex space-x-4">
                <a 
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl hover:bg-gray-200 transition-colors"
                >
                  🐙
                </a>
                <a 
                  href={PROFILE.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl hover:bg-gray-200 transition-colors"
                >
                  🐦
                </a>
                <a 
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl hover:bg-gray-200 transition-colors"
                >
                  💼
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">まずは無料相談から</h3>
            <p className="text-lg mb-6 leading-relaxed">
              「数百万円のホームページは必要ない、でも効果的なサイトは欲しい」<br />
              そんなご要望にお応えします。お気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
                  詳細なお問い合わせフォーム
                </Button>
              </Link>
              <a href={`mailto:${PROFILE.email}`}>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
                  メールで直接相談
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}