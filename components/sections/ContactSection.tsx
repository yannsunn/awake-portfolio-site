'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Section, { SectionHeader } from '@/components/ui/Section'
import { PROFILE } from '@/lib/constants'

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">お問い合わせ</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              プロジェクトのご相談やお問い合わせは、以下のフォームまたは直接ご連絡ください。<br />
              適正価格での確実なホームページ制作について、お気軽にご相談ください。
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">お問い合わせフォーム</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-3 font-semibold text-gray-800 text-sm">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="name" 
                      placeholder="山田 太郎" 
                      className="h-12 border-2 border-gray-200 focus:border-gray-900 rounded-xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-3 font-semibold text-gray-800 text-sm">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="example@email.com" 
                      className="h-12 border-2 border-gray-200 focus:border-gray-900 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-3 font-semibold text-gray-800 text-sm">
                    件名 <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="ホームページ制作のお見積りについて" 
                    className="h-12 border-2 border-gray-200 focus:border-gray-900 rounded-xl"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-3 font-semibold text-gray-800 text-sm">
                    メッセージ <span className="text-red-500">*</span>
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="ご希望やご質問をお聞かせください。予算感や納期などもお知らせいただけると、より具体的なご提案ができます。" 
                    rows={6}
                    className="border-2 border-gray-200 focus:border-gray-900 rounded-xl resize-none"
                  />
                </div>
                <Button className="btn-primary w-full py-4 text-lg font-bold">
                  <span className="mr-2">✉️</span>
                  送信する
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* 連絡先情報 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">連絡先情報</h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white mr-4">
                    <span className="text-lg">✉️</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1 font-semibold">メール</p>
                    <p className="font-bold text-gray-900">{PROFILE.email}</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white mr-4">
                    <span className="text-lg">📞</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1 font-semibold">電話</p>
                    <p className="font-bold text-gray-900">{PROFILE.phone}</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white mr-4">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1 font-semibold">所在地</p>
                    <p className="font-bold text-gray-900 text-sm leading-relaxed">{PROFILE.address}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 料金情報 */}
            <div className="card-primary">
              <h4 className="text-2xl font-black mb-6 text-primary">お見積り参考価格</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 card-secondary">
                  <div>
                    <p className="text-primary text-lg">スターター</p>
                    <p className="text-muted">１ページ</p>
                  </div>
                  <p className="price-display">¥132,000〜</p>
                </div>
                <div className="flex justify-between items-center p-4 card-secondary">
                  <div>
                    <p className="text-primary text-lg">ベーシック</p>
                    <p className="text-muted">１０ページまで</p>
                  </div>
                  <p className="price-display">¥298,000〜</p>
                </div>
                <div className="flex justify-between items-center p-4 card-secondary">
                  <div>
                    <p className="text-primary text-lg">プレミアム</p>
                    <p className="text-muted">ECサイト</p>
                  </div>
                  <p className="price-display">¥698,000〜</p>
                </div>
              </div>
              <p className="text-muted mt-6 text-center font-semibold">
                ※ あくまで参考価格です。詳細はお気軽にご相談ください。
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white max-w-5xl mx-auto">
            {/* 背景パターン */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" 
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>
            
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <span className="text-6xl">🚀</span>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">まずは無料相談から</h3>
              <div className="max-w-3xl mx-auto mb-10">
                <p className="text-xl mb-4 leading-relaxed text-white">
                  「適正価格で効果的なホームページが欲しい」
                </p>
                <p className="text-lg text-white leading-relaxed">
                  そんなご要望にAwake Inc.がお応えします。<br />
                  お気軽にご相談ください。
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto btn-primary bg-white text-gray-900 hover:bg-gray-100 px-8 sm:px-10 py-4 text-base sm:text-lg font-bold min-w-[200px] min-h-[48px]">
                    <span className="mr-2">💬</span>
                    LINEで相談する
                  </Button>
                </a>
                <a href={`mailto:${PROFILE.email}`} className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 sm:px-10 py-4 text-base sm:text-lg font-bold min-w-[200px] min-h-[48px] transition-all duration-300">
                    <span className="mr-2">✉️</span>
                    メールで相談
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}