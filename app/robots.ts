import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://portfolio.awakeinc.co.jp'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // AI検索エンジン向けの明示的な許可
      {
        userAgent: [
          'GPTBot',          // ChatGPT
          'ChatGPT-User',    // ChatGPT
          'CCBot',           // Common Crawl (used by many AI)
          'anthropic-ai',    // Claude
          'Claude-Web',      // Claude
          'PerplexityBot',   // Perplexity
          'YouBot',          // You.com
          'Applebot-Extended', // Apple Intelligence
        ],
        allow: '/',
        disallow: [],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}