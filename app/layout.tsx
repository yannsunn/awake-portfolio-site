import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import JsonLd from '@/components/common/JsonLd'
import ScrollProgress from '@/components/common/ScrollProgress'
import GoogleAnalytics from '@/components/common/GoogleAnalytics'
import StickyMobileCTA from '@/components/common/StickyMobileCTA'
import { generateMetadata as generateMeta } from '@/lib/utils'
import { generateAllSchemas } from '@/lib/enhanced-schema'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  preload: true,
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  preload: true,
})

export const metadata: Metadata = {
  ...generateMeta(
    'AIチャットボット搭載ホームページ制作 | Awake Inc. - 19.8万円から',
    'AIチャットボット搭載のホームページ制作。24時間365日自動対応で顧客満足度向上。19万8000円から制作可能。東大和市の実績豊富なweb制作会社です。'
  ),
  keywords: ['AIチャットボット搭載', 'ホームページ制作', 'チャットボット開発', '自動応答', '東大和市', '株式会社Awake', 'AI自動化', 'web制作', '19万8000円'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // AI検索エンジン（ChatGPT, Perplexity, Claude等）向けの
  // 強化された構造化データを使用
  const enhancedSchema = generateAllSchemas('/')

  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="min-h-screen flex flex-col">
        <JsonLd data={enhancedSchema} />
        <ScrollProgress />
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  )
}