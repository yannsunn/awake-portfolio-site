'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import Section, { SectionHeader } from '@/components/ui/Section'
import { PROFILE } from '@/lib/constants'

const contactSchema = z.object({
  name: z.string().min(1, 'お名前を入力してください'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  subject: z.string().min(1, '件名を入力してください'),
  message: z.string().min(10, 'メッセージは10文字以上で入力してください'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || '送信に失敗しました')
      }

      setSubmitSuccess(true)
      reset()

      // Google Analytics イベント送信
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'Contact',
          event_label: data.subject,
        })
      }
    } catch (error) {
      console.error('送信エラー:', error)
      alert(
        '送信に失敗しました。お手数ですが、LINEまたはメールで直接お問い合わせください。'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: '✉️',
      title: 'Email',
      description: 'プロジェクトについてお気軽にご相談ください',
      contact: PROFILE.email,
      action: `mailto:${PROFILE.email}`
    }
  ]

  if (submitSuccess) {
    return (
      <div className="pt-20">
        <Section padding="xl">
          <div className="max-w-md mx-auto text-center">
            <Card variant="elevated" padding="lg">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                送信完了
              </h2>
              <p className="text-gray-600 mb-6">
                お問い合わせありがとうございます。24時間以内にご返信いたします。
              </p>
              <Button onClick={() => setSubmitSuccess(false)}>
                別のお問い合わせをする
              </Button>
            </Card>
          </div>
        </Section>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section background="light" padding="xl">
        <SectionHeader
          title="お問い合わせ"
          description="ホームページ制作についてご相談やご質問がございましたら、お気軽にお問い合わせください。"
        />
      </Section>

      <Section padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card variant="elevated" padding="lg">
              <h2 className="text-2xl font-bold mb-6">お問い合わせフォーム</h2>

              {/* クイック問い合わせオプション */}
              <div className="mb-8 p-5 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl">
                <p className="text-sm font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  お急ぎの方はこちら（30秒で相談開始）
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://lin.ee/hHdqEXB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#06C755] text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-[#05b34c] transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                    </svg>
                    LINEで相談
                  </a>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="flex-1 bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-bold text-center hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    メールで相談
                  </a>
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                  <span className="h-px flex-1 bg-gray-300"></span>
                  または、下記フォームから詳細をご記入ください
                  <span className="h-px flex-1 bg-gray-300"></span>
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    placeholder="山田 太郎"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    件名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('subject')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    placeholder="ホームページ制作のお見積りについて"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    メッセージ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent resize-vertical"
                    placeholder="ご希望やご質問をお聞かせください。予算感や納期などもお知らせいただけると、より具体的なご提案ができます。"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
                ※ 通常24時間以内にご返信いたします
              </div>
            </Card>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">その他の連絡方法</h2>
            
            {contactMethods.map((method, index) => (
              <Card key={index} variant="elevated" className="p-6">
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
                      target={method.action.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      {method.contact}
                    </a>
                  </div>
                </div>
              </Card>
            ))}

            {/* Available for Work */}
            <Card variant="bordered" className="p-6 text-center bg-gray-50">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-semibold text-gray-900 mb-2">
                新規プロジェクト受付中
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                現在新しいホームページ制作のご依頼をお受けしています。
                お気軽にご相談ください。
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  受付中
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  全国対応
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}