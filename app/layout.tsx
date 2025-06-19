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
  title: '株式会社Awake | 革新的なソリューションで企業の成長を支援',
  description: '株式会社Awakeは、ホームページ制作、AIコンサルティング、Amazon代理店サービスを通じて、企業の成長を支援する革新的なソリューションを提供します。',
  keywords: 'ホームページ制作,AIコンサルティング,Amazon代理店,Webサイト制作,デジタルマーケティング',
  openGraph: {
    title: '株式会社Awake | 革新的なソリューションで企業の成長を支援',
    description: '株式会社Awakeは、ホームページ制作、AIコンサルティング、Amazon代理店サービスを通じて、企業の成長を支援する革新的なソリューションを提供します。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社Awake | 革新的なソリューションで企業の成長を支援',
    description: '株式会社Awakeは、ホームページ制作、AIコンサルティング、Amazon代理店サービスを通じて、企業の成長を支援する革新的なソリューションを提供します。',
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