import { Metadata } from 'next'
import Link from 'next/link'
import Card, { CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import Button from '@/components/common/Button'
import Section, { SectionHeader } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: '実績・事例 | 株式会社Awake',
  description: '株式会社Awakeが手がけたプロジェクトの実績・事例をご紹介します。お客様の課題解決と成果にコミットした事例をご覧ください。',
}

const allWorks = [
  {
    id: 1,
    title: 'コーポレートサイトリニューアル',
    category: 'Web制作',
    client: 'A社（IT企業）',
    period: '2024年1月-3月',
    description: 'IT企業様のコーポレートサイトを最新のデザインとパフォーマンスで全面リニューアル。ユーザビリティの向上により、問い合わせ数が150%増加しました。',
    results: ['問い合わせ数150%増加', 'ページ表示速度50%向上', 'モバイル対応100%達成'],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    image: '/images/work1.jpg'
  },
  {
    id: 2,
    title: 'AI チャットボット導入支援',
    category: 'AIコンサルティング',
    client: 'B社（小売業）',
    period: '2023年10月-12月',
    description: 'カスタマーサポート業務の効率化を目的としたAIチャットボットの設計・導入。24時間対応により顧客満足度の向上を実現しました。',
    results: ['対応時間24時間化', 'サポート工数30%削減', '顧客満足度20%向上'],
    tags: ['OpenAI', 'Python', 'AWS', 'React'],
    image: '/images/work2.jpg'
  },
  {
    id: 3,
    title: 'Amazon売上最適化プロジェクト',
    category: 'Amazon代理店',
    client: 'C社（アパレル）',
    period: '2023年8月-継続中',
    description: 'データ分析による商品ランキング向上と売上300%アップを実現。継続的な改善により安定した成長を維持しています。',
    results: ['売上300%アップ', 'ランキング上位維持', '広告効率40%改善'],
    tags: ['Amazon SEO', 'データ分析', 'PPC広告', 'Excel'],
    image: '/images/work3.jpg'
  },
  {
    id: 4,
    title: 'ECサイト構築プロジェクト',
    category: 'Web制作',
    client: 'D社（食品製造）',
    period: '2023年6月-8月',
    description: '食品製造業様のECサイトを新規構築。決済システムの最適化により、カート離脱率を25%削減しました。',
    results: ['カート離脱率25%削減', '売上200%増加', 'リピート率30%向上'],
    tags: ['Shopify', 'JavaScript', 'Stripe', 'Google Analytics'],
    image: '/images/work4.jpg'
  },
  {
    id: 5,
    title: 'データ活用コンサルティング',
    category: 'AIコンサルティング',
    client: 'E社（製造業）',
    period: '2023年4月-7月',
    description: '製造業様の生産性向上を目的としたデータ活用支援。機械学習による予測分析で品質管理の効率化を実現しました。',
    results: ['品質管理効率20%向上', '不良品率50%削減', 'コスト15%削減'],
    tags: ['Python', 'Machine Learning', 'PostgreSQL', 'Docker'],
    image: '/images/work5.jpg'
  },
  {
    id: 6,
    title: 'ブランド戦略支援',
    category: 'Amazon代理店',
    client: 'F社（美容・健康）',
    period: '2023年2月-5月',
    description: '美容・健康商品のブランド戦略をAmazonで展開。ブランドストーリーの構築により、認知度とロイヤリティの向上を実現しました。',
    results: ['ブランド認知度80%向上', 'リピート購入率45%増加', 'レビュー評価4.5星維持'],
    tags: ['Amazon Brand Registry', 'A+ Content', 'Video Marketing', 'Analytics'],
    image: '/images/work6.jpg'
  }
]

const categories = ['すべて', 'Web制作', 'AIコンサルティング', 'Amazon代理店']

export default function WorksPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section background="light" padding="xl">
        <SectionHeader
          title="実績・事例"
          description="これまでに手がけた代表的なプロジェクトをご紹介します。お客様の課題解決と成果にコミットした実績の数々をぜひご覧ください。"
        />
      </Section>

      {/* Category Filter */}
      <Section padding="md">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? 'primary' : 'outline'}
              className="min-w-[120px]"
            >
              {category}
            </Button>
          ))}
        </div>
      </Section>

      {/* Works Grid */}
      <Section padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allWorks.map((work) => (
            <Card key={work.id} variant="elevated" className="overflow-hidden group">
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {work.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 text-gray-800 text-xs px-2 py-1 rounded">
                    {work.period}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-gray-400">
                    {work.category === 'Web制作' ? '🌐' : 
                     work.category === 'AIコンサルティング' ? '🤖' : '📦'}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {work.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500 mt-1">
                    クライアント: {work.client}
                  </p>
                </CardHeader>

                <CardContent className="p-0">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {work.description}
                  </p>

                  {/* Results */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">主な成果</h4>
                    <ul className="space-y-1">
                      {work.results.map((result, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-600">
                          <span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {work.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                  >
                    詳細を見る
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="light" padding="xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-gray-600">プロジェクト実績</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600">顧客満足度</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">3年</div>
            <div className="text-gray-600">平均サポート期間</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24h</div>
            <div className="text-gray-600">平均対応時間</div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="xl">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            あなたのプロジェクトを成功に導きます
          </h2>
          <p className="text-blue-100 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            これらの実績は、お客様との信頼関係と継続的な改善の結果です。
            あなたのビジネス課題も一緒に解決しませんか？
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              無料相談を申し込む
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  )
}