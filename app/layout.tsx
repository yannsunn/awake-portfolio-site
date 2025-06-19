import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  variable: '--font-noto-sans-jp'
})

export const metadata: Metadata = {
  title: 'Awake Inc. - 適正価格でのホームページ制作',
  description: '13万2000円からの確実なホームページ制作。必要な機能に絞り込んだ適正価格で、ビジネスを加速させます。1週間〜1ヶ月でスピード納品。',
  keywords: 'ホームページ制作,ウェブサイト制作,適正価格,格安,東京,Awake Inc.,HP制作,Web制作',
  openGraph: {
    title: 'Awake Inc. - 適正価格でのホームページ制作',
    description: '13万2000円からの確実なホームページ制作。必要な機能に絞り込んだ適正価格で、ビジネスを加速させます。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Awake Inc. - 適正価格でのホームページ制作',
    description: '13万2000円からの確実なホームページ制作。必要な機能に絞り込んだ適正価格で、ビジネスを加速させます。',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}