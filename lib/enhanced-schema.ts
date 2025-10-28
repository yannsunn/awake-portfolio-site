import { PROFILE, WORKS, PRICING } from './constants'
import type { Project } from './types'

/**
 * AI検索エンジン（ChatGPT、Perplexity、Claude等）向けの
 * 強化された構造化データを生成
 */

// ヘルパー関数: Offer Schema生成（重複削減）
function generateOfferSchema(
  name: string,
  description: string,
  price: number
) {
  return {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": name,
      "description": description,
      "provider": {
        "@type": "Organization",
        "name": "株式会社Awake"
      }
    },
    "price": price,
    "priceCurrency": "JPY",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": price,
      "priceCurrency": "JPY"
    }
  }
}

// Organization Schema - AI検索用に拡張
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": "https://portfolio.awakeinc.co.jp/#organization",
    "name": "株式会社Awake",
    "alternateName": "Awake Inc.",
    "legalName": "株式会社Awake",
    "description": "東大和市に拠点を置くWeb制作会社。AIチャットボット搭載のホームページ制作を提供。24時間365日自動対応で顧客満足度向上。19万8000円から制作可能。",
    "url": "https://portfolio.awakeinc.co.jp",
    "logo": {
      "@type": "ImageObject",
      "url": "https://portfolio.awakeinc.co.jp/images/logo.png",
      "width": 200,
      "height": 200
    },
    "image": "https://portfolio.awakeinc.co.jp/images/hero-bg-desktop.webp",
    "telephone": PROFILE.phone,
    "email": PROFILE.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "向原5-1129-61 渡辺ビル1F",
      "addressLocality": "東大和市",
      "addressRegion": "東京都",
      "postalCode": "207-0013",
      "addressCountry": "JP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.7482,
      "longitude": 139.4267
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 35.7482,
        "longitude": 139.4267
      },
      "geoRadius": "50000" // 50km圏内対応
    },
    "priceRange": "¥198,000 - ¥1,000,000",
    "currenciesAccepted": "JPY",
    "paymentAccepted": "現金, 銀行振込, クレジットカード",
    "openingHours": "Mo-Fr 09:00-18:00",
    "availableLanguage": ["Japanese"],
    "slogan": "AIチャットボット搭載のホームページ制作 - 24時間365日自動対応",
    "foundingDate": "2019",
    "knowsAbout": [
      "ホームページ制作",
      "Webサイト開発",
      "AIチャットボット",
      "ECサイト構築",
      "ランディングページ",
      "レスポンシブデザイン",
      "SEO対策",
      "UI/UXデザイン",
      "Next.js",
      "React",
      "WordPress"
    ],
    "serviceType": [
      "ホームページ制作",
      "コーポレートサイト制作",
      "ECサイト制作",
      "ランディングページ制作",
      "AIチャットボット開発",
      "Amazon販売代行",
      "SEO対策",
      "保守運用"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web制作サービス",
      "itemListElement": [
        generateOfferSchema(
          "スターター プラン（AIチャットボット搭載）",
          "AIチャットボット搭載の1ページ完結型サイト。24時間自動対応で問い合わせ対応を効率化。",
          PRICING.starter.price
        ),
        generateOfferSchema(
          "ベーシック プラン（AIチャットボット搭載）",
          "AIチャットボット搭載の3-5ページ構成コーポレートサイト。高度な自動応答機能付き。",
          PRICING.basic.price
        ),
        generateOfferSchema(
          "プレミアム プラン（AIチャットボット搭載）",
          "AIチャットボット搭載の本格的なECサイト。在庫確認や注文状況も自動応答。",
          PRICING.premium.price
        )
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "24",
      "bestRating": "5",
      "worstRating": "1"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": PROFILE.phone,
        "contactType": "営業",
        "areaServed": "JP",
        "availableLanguage": "Japanese",
        "contactOption": "TollFree"
      },
      {
        "@type": "ContactPoint",
        "email": PROFILE.email,
        "contactType": "Customer Support",
        "areaServed": "JP",
        "availableLanguage": "Japanese"
      }
    ],
    "sameAs": [
      "https://www.awakeinc.co.jp",
      "https://lin.ee/hHdqEXB"
    ]
  }
}

// WebSite Schema - AI検索用
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://portfolio.awakeinc.co.jp/#website",
    "url": "https://portfolio.awakeinc.co.jp",
    "name": "株式会社Awake 制作実績ポートフォリオ",
    "description": "株式会社Awakeの制作実績。ホームページ制作、AIチャットボット開発、EC運営代行の事例をご紹介。",
    "publisher": {
      "@id": "https://portfolio.awakeinc.co.jp/#organization"
    },
    "inLanguage": "ja-JP",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://portfolio.awakeinc.co.jp/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
}

// BreadcrumbList Schema
export function generateBreadcrumbSchema(path: string = '/') {
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "ホーム",
      "item": "https://portfolio.awakeinc.co.jp"
    }
  ]

  if (path === '/contact') {
    breadcrumbs.push({
      "@type": "ListItem",
      "position": 2,
      "name": "お問い合わせ",
      "item": "https://portfolio.awakeinc.co.jp/contact"
    })
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs
  }
}

// CollectionPage Schema - ポートフォリオページ用
export function generatePortfolioCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://portfolio.awakeinc.co.jp/#portfolio",
    "name": "制作実績ポートフォリオ",
    "description": "株式会社Awakeの最新制作実績。コーポレートサイト、ECサイト、ランディングページなど多様な実績をご覧いただけます。",
    "url": "https://portfolio.awakeinc.co.jp",
    "isPartOf": {
      "@id": "https://portfolio.awakeinc.co.jp/#website"
    },
    "about": {
      "@type": "Thing",
      "name": "ホームページ制作実績"
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": WORKS.length,
      "itemListElement": WORKS.map((work, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": work.url,
        "name": work.title,
        "description": work.description
      }))
    }
  }
}

// CreativeWork Schema - 各制作実績用
export function generateCreativeWorkSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.longDescription || project.description,
    "url": project.url,
    "image": `https://portfolio.awakeinc.co.jp${project.imageUrl}`,
    "creator": {
      "@type": "Organization",
      "name": "株式会社Awake",
      "url": "https://portfolio.awakeinc.co.jp"
    },
    "about": project.category,
    "keywords": project.features?.join(', '),
    "datePublished": "2024",
    "inLanguage": "ja-JP",
    "offers": project.price ? {
      "@type": "Offer",
      "price": project.price.replace(/[^0-9]/g, ''),
      "priceCurrency": "JPY",
      "description": `制作期間: ${project.duration}, ページ数: ${project.pages}`
    } : undefined
  }
}

// FAQPage Schema - よくある質問用
export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "AIチャットボット搭載ホームページの価格はいくらですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `株式会社Awakeでは${PRICING.starter.priceDisplay}からAIチャットボット搭載のホームページ制作を承っております。24時間365日自動対応で、お客様の問い合わせ対応を効率化します。`
        }
      },
      {
        "@type": "Question",
        "name": "AIチャットボットはどのような質問に対応できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "営業時間、サービス内容、価格、アクセス方法など、よくある質問に自動で回答します。商品の在庫確認や予約受付など、カスタマイズも可能です。複雑な質問は自動的に人間のスタッフに転送されます。"
        }
      },
      {
        "@type": "Question",
        "name": "制作期間はどのくらいですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "プランによって異なりますが、スターター プランで1週間、ベーシック プランで2-3週間、プレミアム プランで3-4週間が目安となります。お急ぎの場合はご相談ください。"
        }
      },
      {
        "@type": "Question",
        "name": "東大和市以外でも対応可能ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、全国対応可能です。オンラインでの打ち合わせを中心に進めますので、遠方のお客様でも問題なく対応いたします。東京都内、埼玉県、神奈川県を中心に多数の実績がございます。"
        }
      },
      {
        "@type": "Question",
        "name": "SEO対策は含まれていますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、すべてのプランに基本的なSEO対策（メタタグ設定、構造化データ、サイトマップ生成、レスポンシブ対応）が標準装備されています。より高度なSEO対策をご希望の場合は別途ご相談ください。"
        }
      },
      {
        "@type": "Question",
        "name": "保守運用サポートはありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、月額制の保守運用サポートをご用意しております。コンテンツ更新、セキュリティアップデート、技術サポートなどを提供いたします。詳細はお問い合わせください。"
        }
      }
    ]
  }
}

// すべての構造化データを統合
export function generateAllSchemas(path: string = '/') {
  const schemas = [
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateBreadcrumbSchema(path),
    generatePortfolioCollectionSchema(),
    generateFAQSchema()
  ]

  return {
    "@context": "https://schema.org",
    "@graph": schemas
  }
}
