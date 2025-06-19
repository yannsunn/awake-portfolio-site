import { Metadata } from 'next'
import Link from 'next/link'
import Card, { CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import Button from '@/components/common/Button'
import Section, { SectionHeader } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'お知らせ | 株式会社Awake',
  description: '株式会社Awakeの最新情報、プレスリリース、技術記事などをお届けします。',
}

const newsItems = [
  {
    id: 1,
    title: '新サービス「AI自動化コンサルティング」を開始しました',
    category: 'サービス',
    date: '2024-01-15',
    summary: 'AI技術を活用した業務自動化コンサルティングサービスを新たに開始いたします。',
    featured: true,
    image: '/images/news1.jpg'
  },
  {
    id: 2,
    title: '年末年始休業のお知らせ',
    category: 'お知らせ',
    date: '2023-12-25',
    summary: '2023年12月29日（金）～2024年1月3日（水）まで年末年始休業とさせていただきます。',
    featured: false
  },
  {
    id: 3,
    title: '技術ブログ：Next.js 14の新機能について',
    category: '技術記事',
    date: '2023-12-10',
    summary: 'Next.js 14で追加された新機能と実際の開発での活用方法についてご紹介します。',
    featured: false
  },
  {
    id: 4,
    title: 'Amazon代理店サービスの成果報告',
    category: 'サービス',
    date: '2023-11-20',
    summary: 'Amazon代理店サービスを開始して6ヶ月、お客様の売上向上実績をご報告いたします。',
    featured: true,
    image: '/images/news2.jpg'
  },
  {
    id: 5,
    title: 'セキュリティ対策の強化について',
    category: 'お知らせ',
    date: '2023-11-01',
    summary: 'お客様の情報セキュリティ向上のため、新たなセキュリティ対策を導入いたします。',
    featured: false
  },
  {
    id: 6,
    title: '技術ブログ：TypeScriptでの型安全なAPI設計',
    category: '技術記事',
    date: '2023-10-15',
    summary: 'TypeScriptを活用した型安全なAPI設計のベストプラクティスをご紹介します。',
    featured: false
  }
]

const categories = ['すべて', 'サービス', 'お知らせ', '技術記事']

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'サービス':
      return 'bg-primary text-white'
    case 'お知らせ':
      return 'bg-secondary text-white'
    case '技術記事':
      return 'bg-accent text-white'
    default:
      return 'bg-gray-500 text-white'
  }
}

export default function NewsPage() {
  const featuredNews = newsItems.filter(item => item.featured)
  const regularNews = newsItems.filter(item => !item.featured)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section background="light" padding="xl">
        <SectionHeader
          title="お知らせ"
          description="株式会社Awakeの最新情報、プレスリリース、技術記事などをお届けします。"
        />
      </Section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <Section padding="lg">
          <h2 className="text-2xl font-bold mb-8">注目記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredNews.map((item) => (
              <Card key={item.id} variant="elevated" className="overflow-hidden group">
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 text-gray-800 text-xs px-2 py-1 rounded">
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-gray-400">
                      {item.category === 'サービス' ? '🚀' : 
                       item.category === 'お知らせ' ? '📢' : '💡'}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-gray-600 leading-relaxed text-sm mb-4">
                      {item.summary}
                    </p>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                      詳細を読む
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* Category Filter */}
      <Section padding="md" background="light">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? 'primary' : 'outline'}
              className="min-w-[100px]"
            >
              {category}
            </Button>
          ))}
        </div>
      </Section>

      {/* All News */}
      <Section padding="lg">
        <h2 className="text-2xl font-bold mb-8">すべてのお知らせ</h2>
        <div className="space-y-6">
          {newsItems.map((item) => (
            <Card key={item.id} variant="bordered" className="hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {formatDate(item.date)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary transition-colors cursor-pointer">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Button variant="outline" size="sm">
                      詳細を読む
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              前へ
            </Button>
            <Button size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">
              次へ
            </Button>
          </div>
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section background="light" padding="xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">最新情報をお届け</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            メールマガジンにご登録いただくと、最新のサービス情報や技術記事を
            いち早くお届けします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="メールアドレスを入力"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button className="whitespace-nowrap">
              登録する
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            ※ いつでも配信停止できます
          </p>
        </div>
      </Section>
    </div>
  )
}