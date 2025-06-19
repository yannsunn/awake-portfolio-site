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
  title: 'Awake - Web Developer & Designer Portfolio',
  description: 'クリエイティブなウェブソリューションを創造するAwakeのポートフォリオサイト。Next.js、React、TypeScriptを使用したモダンなウェブ開発とデザインサービスを提供します。',
  keywords: 'Web Developer,Web Designer,Portfolio,Next.js,React,TypeScript,Frontend,UI/UX',
  openGraph: {
    title: 'Awake - Web Developer & Designer Portfolio',
    description: 'クリエイティブなウェブソリューションを創造するAwakeのポートフォリオサイト',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Awake - Web Developer & Designer Portfolio',
    description: 'クリエイティブなウェブソリューションを創造するAwakeのポートフォリオサイト',
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