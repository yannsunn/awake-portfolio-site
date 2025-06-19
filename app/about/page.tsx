import { Metadata } from 'next'
import Section, { SectionHeader } from '@/components/ui/Section'
import Card from '@/components/common/Card'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '会社情報 | 株式会社Awake',
  description: '株式会社Awakeの会社概要、企業理念、沿革をご紹介します。革新的なソリューションで企業の成長を支援する私たちの想いをお伝えします。',
}

export default function AboutPage() {
  const companyData = [
    { label: '会社名', value: COMPANY_INFO.name },
    { label: '英文社名', value: COMPANY_INFO.nameEn },
    { label: '設立', value: COMPANY_INFO.founded },
    { label: '資本金', value: COMPANY_INFO.capital },
    { label: '従業員数', value: COMPANY_INFO.employees },
    { label: '所在地', value: COMPANY_INFO.address },
    { label: '電話番号', value: COMPANY_INFO.phone },
    { label: 'メールアドレス', value: COMPANY_INFO.email },
  ]

  const values = [
    {
      title: 'Innovation（革新）',
      description: '最新技術を活用し、常に新しい価値を創造し続けます。',
      icon: '💡'
    },
    {
      title: 'Excellence（卓越）',
      description: '品質へのこだわりと継続的な改善により、最高のサービスを提供します。',
      icon: '⭐'
    },
    {
      title: 'Partnership（協働）',
      description: 'お客様との信頼関係を築き、共に成長していくパートナーシップを大切にします。',
      icon: '🤝'
    },
    {
      title: 'Growth（成長）',
      description: '個人とチーム、そしてお客様と共に持続的な成長を目指します。',
      icon: '📈'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section background="light" padding="xl">
        <SectionHeader
          title="私たちについて"
          description="株式会社Awakeは、革新的なデジタルソリューションを通じて、企業の成長と変革を支援する会社です。"
        />
      </Section>

      {/* Company Overview */}
      <Section padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">会社概要</h2>
            <div className="space-y-4">
              {companyData.map((item, index) => (
                <div key={index} className="flex border-b border-gray-100 pb-2">
                  <div className="w-24 font-medium text-gray-700 flex-shrink-0">
                    {item.label}
                  </div>
                  <div className="text-gray-900">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">代表メッセージ</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                デジタル技術の急速な発展により、ビジネス環境は日々変化しています。
                私たちは、この変化を機会と捉え、お客様の課題解決に最適なソリューションを提供することで、
                共に成長していきたいと考えています。
              </p>
              <p>
                技術力だけでなく、お客様との対話を大切にし、
                真のパートナーとして長期的な関係を築いていくことが私たちの使命です。
              </p>
              <p className="font-medium text-gray-900">
                代表取締役 山田太郎
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Company Values */}
      <Section background="light" padding="xl">
        <SectionHeader
          title="企業理念・価値観"
          description="私たちが大切にしている4つの価値観をご紹介します。"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} variant="elevated" padding="lg">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* History */}
      <Section padding="xl">
        <SectionHeader
          title="沿革"
          description="株式会社Awakeの歩みをご紹介します。"
        />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-20 flex-shrink-0 font-bold text-primary">
                2023年
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">株式会社Awake設立</h4>
                <p className="text-gray-600">
                  ホームページ制作、AIコンサルティング、Amazon代理店サービスを主軸として事業を開始
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-20 flex-shrink-0 font-bold text-primary">
                2024年
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">事業拡大</h4>
                <p className="text-gray-600">
                  累計100社以上のお客様にサービスを提供、チーム体制を強化
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}