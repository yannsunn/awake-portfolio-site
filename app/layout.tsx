import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import JsonLd from '@/components/common/JsonLd'
import ScrollProgress from '@/components/common/ScrollProgress'
import GoogleAnalytics from '@/components/common/GoogleAnalytics'
import { generateMetadata as generateMeta } from '@/lib/utils'
import { generateAllSchemas } from '@/lib/enhanced-schema'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
})

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: false,
})

export const metadata: Metadata = {
  ...generateMeta(
    '制作実績 | Awake Inc. - ホームページ制作・AIチャットボット開発事例',
    '株式会社Awakeの制作実績。ホームページ制作、AIチャットボット開発、EC運営代行の事例をご紹介。東大和市の実績豊富なweb制作会社です。'
  ),
  keywords: ['ホームページ制作実績', 'web制作事例', 'AIチャットボット導入事例', '東大和市', '株式会社Awake', 'ポートフォリオ', 'ECサイト制作', 'ランディングページ制作'],
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
      </body>
    </html>
  )
}