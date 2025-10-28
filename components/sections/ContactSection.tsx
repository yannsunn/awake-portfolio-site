'use client'

import { motion } from 'framer-motion'
import Button from '@/components/common/Button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { PROFILE } from '@/lib/constants'
import { commonStyles } from '@/lib/styles'

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
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
            <div className="bg-white p-8 rounded-2xl border border-gray-50" style={{boxShadow: commonStyles.shadow.subtle}}>
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
                <Button variant="primary" size="lg" className="w-full">
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
            <div className="bg-white p-8 rounded-2xl border border-gray-50" style={{boxShadow: commonStyles.shadow.subtle}}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">連絡先情報</h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
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
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
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
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1 font-semibold">所在地</p>
                    <p className="font-bold text-gray-900 text-sm leading-relaxed">{PROFILE.address}</p>
                  </div>
                </motion.div>
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
          className="mt-20 text-center"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-50 max-w-5xl mx-auto" style={{boxShadow: commonStyles.shadow.subtle}}>
            {/* 背景パターン */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" 
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #6b7280 1px, transparent 1px)`,
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
                
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">まずは無料相談から</h3>
              <div className="max-w-3xl mx-auto mb-10">
                <p className="text-xl mb-4 leading-relaxed text-gray-900 font-medium">
                  「適正価格で効果的なホームページが欲しい」
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  そんなご要望にAwake Inc.がお応えします。<br />
                  お気軽にご相談ください。
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="https://lin.ee/hHdqEXB" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="btn-line w-full sm:w-auto min-w-[200px]">
                    
                    LINEで相談する
                  </Button>
                </a>
                <a href={`mailto:${PROFILE.email}`} className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-700 text-gray-900 hover:bg-gray-900 hover:text-white min-w-[200px]">
                    
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