export const PROFILE = {
  name: 'Awake',
  title: 'ホームページ制作専門',
  description: '高額でない、確実で効果的なホームページを制作',
  email: 'contact@awake-portfolio.com',
  phone: '03-0000-0000',
  address: '東京都',
  github: 'https://github.com/awake',
  twitter: 'https://twitter.com/awake',
  linkedin: 'https://linkedin.com/in/awake',
}

export const WORKS = [
  {
    id: 1,
    title: "コーポレートサイト",
    category: "ホームページ制作",
    description: "中小企業向けのシンプルで効果的なコーポレートサイト。必要な機能に絞り込んでコストを抑制。",
    longDescription: "中小企業のお客様向けに、会社の顔となるコーポレートサイトを制作しました。過度な機能は省き、本当に必要な要素（会社概要、サービス紹介、お問い合わせ）に集中することで、制作費を大幅に削減。浮いた予算でお客様は他の事業投資に回すことができました。レスポンシブ対応、SEO対策も標準搭載で、月間問い合わせ数が3倍に増加しました。",
    imageUrl: "/images/work1.jpg",
    category: "ホームページ制作",
    price: "30万円",
    duration: "2週間"
  },
  {
    id: 2,
    title: "飲食店サイト",
    category: "ホームページ制作", 
    description: "地域密着型の飲食店向けサイト。予約システムとメニュー紹介を効率的に実装。",
    longDescription: "地域密着型の飲食店様向けに、お客様のニーズに合わせたシンプルなホームページを制作。高額なシステムは使わず、必要最小限の予約機能とメニュー表示で十分な効果を実現。数百万円の大型サイトではなく、数十万円の実用的なサイトにより、浮いた資金で店舗改装や新メニュー開発に投資することができました。",
    imageUrl: "/images/work2.jpg",
    category: "ホームページ制作",
    price: "25万円",
    duration: "10日"
  },
  {
    id: 3,
    title: "建設会社サイト",
    category: "ホームページ制作",
    description: "実績重視の建設会社向けサイト。施工事例を効果的に見せる構成で受注増加を実現。",
    longDescription: "建設会社様の強みである施工実績を前面に押し出したサイト設計。過度な動画や複雑なアニメーションは避け、確実に成果の出る構成に集中。制作費を抑えることで、お客様は営業活動や設備投資により多くの予算を振り分けることができました。結果として年間受注件数が40%増加し、ROIの高い投資となりました。",
    imageUrl: "/images/work3.jpg",
    category: "ホームページ制作", 
    price: "40万円",
    duration: "3週間"
  },
  {
    id: 4,
    title: "美容院サイト",
    category: "ホームページ制作",
    description: "おしゃれな美容院のブランディングサイト。予約導線を最適化して集客力向上。",
    longDescription: "美容院のブランドイメージを大切にしながら、無駄なコストを削減したサイト制作。高額なCMSや複雑な機能は使わず、本当に必要な情報とオンライン予約機能のみに絞り込み。浮いた制作費で店内改装や機器購入に投資でき、総合的な集客力向上を実現しました。",
    imageUrl: "/images/work4.jpg",
    category: "ホームページ制作",
    price: "35万円", 
    duration: "2週間"
  },
  {
    id: 5,
    title: "AIチャットボット",
    category: "AI開発",
    description: "カスタマーサポート向けの効率的なAIチャットボット。2年の経験を活かした実用的なシステム。",
    longDescription: "2年間のAI開発経験を活かし、実用性重視のチャットボットを開発。高額なAIプラットフォームは使わず、オープンソースのツールを組み合わせることで大幅なコスト削減を実現。お客様は浮いた予算で人材育成や他のIT投資に回すことができ、総合的な業務効率化を達成しました。",
    imageUrl: "/images/work5.jpg",
    category: "AI開発",
    price: "50万円",
    duration: "1ヶ月"
  },
  {
    id: 6,
    title: "ECサイト（簡易版）",
    category: "ホームページ制作",
    description: "小規模事業者向けの必要最小限のECサイト。過度な機能を省いてコスト効率を重視。",
    longDescription: "小規模事業者様向けに、本当に必要な機能だけに絞った効率的なECサイトを構築。複雑なシステムや高額なプラットフォーム利用料を避け、シンプルながら確実に売上につながる仕組みを実現。浮いた初期投資を商品開発やマーケティングに振り向けることで、事業全体の成長を支援しました。",
    imageUrl: "/images/work6.jpg",
    category: "ホームページ制作",
    price: "60万円",
    duration: "1ヶ月"
  }
]

export const SKILLS = [
  {
    category: 'ホームページ制作',
    items: ['HTML/CSS', 'JavaScript', 'WordPress', 'レスポンシブデザイン', 'SEO対策', 'UI/UXデザイン']
  },
  {
    category: 'AI開発（2年経験）',
    items: ['チャットボット開発', '自然言語処理', 'Python', 'オープンソースAI', 'データ分析']
  }
]

export const NAVIGATION_ITEMS = [
  { href: '/', label: 'ホーム' },
  { href: '#portfolio', label: 'ポートフォリオ' },
  { href: '#about', label: 'について' },
  { href: '/contact', label: 'お問い合わせ' },
]

export const VALUE_PROPOSITION = {
  title: "高額でない、確実なホームページ制作",
  subtitle: "余った予算で事業投資を",
  description: "数百万円の高額なホームページを作っても使わなくなってしまっては意味がありません。弊社は必要な機能に絞り込んだ数十万円のホームページで、会社の顔としての役割を確実に果たします。浮いた予算は他の事業投資に回して、総合的な成長を実現しませんか？",
  benefits: [
    "必要最小限の機能で確実な効果",
    "制作費を大幅に削減",
    "浮いた予算で他の投資が可能",
    "メンテナンスが簡単で長期利用可能",
    "SEO対策・レスポンシブ対応は標準装備"
  ]
}