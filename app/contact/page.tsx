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

  if (submitSuccess) {
    return (
      <div className="pt-20">
        <Section padding="xl">
          <div className="max-w-md mx-auto text-center">
            <Card variant="elevated" padding="lg">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Message Sent!
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for your message. I&apos;ll get back to you within 24 hours.
              </p>
              <Button onClick={() => setSubmitSuccess(false)}>
                Send Another Message
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
          title="Get In Touch"
          description="新しいプロジェクトについて相談したい、質問がある、または単に挨拶したい場合は、お気軽にご連絡ください。"
        />
      </Section>

      <Section padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card variant="elevated" padding="lg">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('subject')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Project inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                    placeholder="Tell me about your project or say hello..."
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
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
                ※ 通常24時間以内にご返信いたします
              </div>
            </Card>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Other Ways to Connect</h2>
            
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
            <Card variant="bordered" className="p-6 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Available for New Projects
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                現在新しいプロジェクトをお受けしています。
                お気軽にご相談ください。
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Available
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Remote OK
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}