import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import JsonLd from '@/components/common/JsonLd'
import ScrollProgress from '@/components/common/ScrollProgress'
import { generateMetadata as generateMeta } from '@/lib/utils'
import { PROFILE } from '@/lib/constants'

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
    'Awake Inc. - 適正価格でのホームページ制作',
    '13万2000円からのホームページ制作サービス。必要な機能に絞り込んだ適正価格でご提供します。1週間〜1ヶ月程度での制作を目指します。'
  ),
  keywords: ['ホームページ制作', 'ウェブサイト制作', '適正価格', '格安', '東京', 'Awake Inc.', 'HP制作', 'Web制作'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": PROFILE.name,
    "description": PROFILE.description,
    "url": "https://portfolio.awakeinc.co.jp",
    "logo": "https://portfolio.awakeinc.co.jp/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": PROFILE.phone,
      "contactType": "Customer Service",
      "areaServed": "JP",
      "availableLanguage": "Japanese"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "JP",
      "addressLocality": "東京都",
      "streetAddress": PROFILE.address
    },
    "sameAs": [
      "https://lin.ee/hHdqEXB"
    ]
  }

  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="min-h-screen flex flex-col">
        <JsonLd data={jsonLdData} />
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