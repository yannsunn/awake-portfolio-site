import { Metadata } from 'next'
import Link from 'next/link'
import Card, { CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import Button from '@/components/common/Button'
import Section, { SectionHeader } from '@/components/ui/Section'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'サービス一覧 | 株式会社Awake',
  description: '株式会社Awakeが提供するホームページ制作、AIコンサルティング、Amazon代理店サービスの詳細をご紹介します。',
}

const processSteps = [
  {
    step: '01',
    title: 'ヒアリング',
    description: 'お客様の課題やご要望を詳しくお聞きします'
  },
  {
    step: '02',
    title: '提案・見積り',
    description: '最適なソリューションをご提案いたします'
  },
  {
    step: '03',
    title: '設計・開発',
    description: '経験豊富なチームが高品質な成果物を制作します'
  },
  {
    step: '04',
    title: '納品・サポート',
    description: '納品後も継続的なサポートを提供します'
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section background="light" padding="xl">
        <SectionHeader
          title="私たちのサービス"
          description="お客様のビジネス成長を支援する3つの主要サービスをご提供しています。最新技術と豊富な経験を活かし、一緒に未来を創造しましょう。"
        />
      </Section>

      {/* Services Grid */}
      <Section padding="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service) => (
            <Card key={service.id} variant="elevated" className="h-full">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.id}`}>
                  <Button variant="outline" className="w-full">
                    詳細を見る
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section background="light" padding="xl">
        <SectionHeader
          title="サービス提供の流れ"
          description="お客様により良いサービスをお届けするための4つのステップ"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gray-300 -z-10"></div>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="xl">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            お客様のビジネス課題を解決します
          </h2>
          <p className="text-blue-100 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            どんな小さなご相談でもお気軽にお問い合わせください。
            専門スタッフが丁寧にヒアリングし、最適なソリューションをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                無料相談を申し込む
              </Button>
            </Link>
            <Link href="/works">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                実績を見る
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}