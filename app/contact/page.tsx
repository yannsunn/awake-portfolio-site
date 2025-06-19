'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import Section, { SectionHeader } from '@/components/ui/Section'
import { COMPANY_INFO } from '@/lib/constants'

const contactSchema = z.object({
  name: z.string().min(1, 'お名前を入力してください'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, 'サービスを選択してください'),
  message: z.string().min(10, 'お問い合わせ内容は10文字以上で入力してください'),
})

type ContactFormData = z.infer<typeof contactSchema>

const services = [
  'ホームページ制作',
  'AIコンサルティング',
  'Amazon代理店',
  'その他のご相談'
]

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
      // ここで実際のフォーム送信処理を実装
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitSuccess(true)
      reset()
    } catch (error) {
      console.error('送信エラー:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

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
                お問い合わせありがとうございます。
                24時間以内にご連絡いたします。
              </p>
              <Button onClick={() => setSubmitSuccess(false)}>
                新しいお問い合わせ
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
          description="ご質問やご相談がございましたら、お気軽にお問い合わせください。お客様のビジネス課題の解決に向けて、最適なソリューションをご提案いたします。"
        />
      </Section>

      <Section padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card variant="elevated" padding="lg">
              <h2 className="text-2xl font-bold mb-6">お問い合わせフォーム</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="山田太郎"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="example@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    会社名
                  </label>
                  <input
                    type="text"
                    {...register('company')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="株式会社○○○"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="03-0000-0000"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ご希望のサービス <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('service')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                    placeholder="お問い合わせ内容をできるだけ詳しくお書きください"
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
            <h2 className="text-2xl font-bold mb-6">その他のお問い合わせ方法</h2>
            
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
                      className="text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      {method.contact}
                    </a>
                  </div>
                </div>
              </Card>
            ))}

            {/* FAQ Link */}
            <Card variant="bordered" className="p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">
                よくあるご質問
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                お問い合わせ前にこちらもご確認ください
              </p>
              <Button variant="outline">
                FAQを見る
              </Button>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}