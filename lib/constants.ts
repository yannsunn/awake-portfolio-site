import type { Profile, Project, SkillCategory, NavigationItem, ValueProposition } from './types'

export const PROFILE: Profile = {
  name: 'Awake Inc.',
  title: 'ホームページ制作',
  description: '適正価格での確実なホームページ制作でビジネスを加速させます。',
  email: 'shop@awakeinc.co.jp',
  phone: '050-7115-4948',
  address: '〒207-0013 東京都東大和市向原5-1129-61 渡辺ビル1F',
}

export const WORKS: Project[] = [
  {
    id: 1,
    title: "コーポレートサイト",
    category: "ホームページ制作",
    description: "会社概要・サービス詳細・FAQ・お問い合わせを統合。",
    longDescription: "Awake Inc.のメインコーポレートサイト。トップページ、会社概要、3つのサービス詳細（HP制作/AIコンサル/Amazon代理店）、FAQ、LINE連携お問い合わせフォームを含む約7ページ構成。オリジナルUIデザインとSEO最適化により、企業ブランディングと集客を両立。",
    imageUrl: "/images/screenshots/awake-corp-screenshot.png",
    url: "https://www.awakeinc.co.jp/",
    pages: "約7ページ",
    marketPrice: null,
    price: "39万8000円",
    duration: "2-3週間",
    features: ["LINE連携フォーム", "オリジナルUI", "SEO最適化"],
    result: "問い合わせ数が増加",
    breakdown: "静的ページ×6、問い合わせフォーム実装、オリジナルUIデザイン+20%、SEO初期設定+10%"
  },
  {
    id: 2,
    title: "アパレルECサイト",
    category: "ホームページ制作",
    description: "OEM・ODM対応。商品管理・決済・在庫管理を統合したフルスペックサイト。",
    longDescription: "アパレル業界向けの本格的ECサイト。商品一覧（カードレイアウト+フィルタ）、動的商品詳細、OEM・ODM案内、小ロット対応、カート・決済機能、在庫管理API連携を実装。B2B・B2C両対応で、複雑な商品管理要件にも対応可能。",
    imageUrl: "/images/screenshots/apparel-ec-screenshot.png",
    url: "https://apparel.awakeinc.co.jp/",
    pages: "約8ページ+動的機能",
    marketPrice: null,
    price: "98万円",
    duration: "3-4週間",
    features: ["商品DB連携", "決済システム", "在庫管理API"],
    result: "オンライン売上と業務効率が改善",
    breakdown: "商品DB&決済連携、静的説明ページ×4、UI/UX設計+25%、在庫管理API連携・管理画面"
  },
  {
    id: 3,
    title: "製造業LP",
    category: "ホームページ制作",
    description: "金属加工業向け。製品ギャラリー・実績訴求に特化したデザイン。",
    longDescription: "Vintage Iron Works様向けの製造業特化LP。ヒーロー・実績・CTA構成のランディングページ、Lightbox+モーダル付き製品ギャラリー、会社概要、簡易お問い合わせフォームを4ページ構成で実装。画像最適化とLazy-loadで高速表示を実現。",
    imageUrl: "/images/screenshots/manufacturing-lp-screenshot.png",
    url: "https://vintage-iron-works-example.awakeinc.co.jp/",
    pages: "約4ページ（LP+ギャラリー）",
    marketPrice: null,
    price: "24万9800円",
    duration: "1-2週間",
    features: ["Lightboxギャラリー", "画像最適化", "LP設計"],
    result: "製品問い合わせが増加",
    breakdown: "LPデザイン/コピー、ギャラリー実装、画像最適化/Lazy-load、フォーム&SMTP設定"
  },
  {
    id: 4,
    title: "FP個人サイト",
    category: "ホームページ制作",
    description: "LINE相談への導線に特化。",
    longDescription: "ファイナンシャルプランナー様向けの個人事業サイト。トップ（ヒーロー+訴求）、サービス一覧、プロフィール、LINE相談（深いCTAセクション）の4ページ構成。LINE公式アカウント連携により、相談予約の導線を最適化。",
    imageUrl: "/images/screenshots/fp-site-screenshot.png",
    url: "https://yuikosuke-website.vercel.app/",
    pages: "約4ページ",
    marketPrice: null,
    price: "19万8000円",
    duration: "1-2週間",
    features: ["LINE公式連携", "CTA最適化", "SEO対策"],
    result: "LINE相談からの成約が増加",
    breakdown: "静的ページ×3、LINE公式アカウント呼び出し、SEO最適化・OGP設定"
  },
  {
    id: 5,
    title: "プロフィールサイト",
    category: "ホームページ制作",
    description: "1ページ完結型。Instagram・Google Map埋め込み対応。",
    longDescription: "個人事業主様向けの1ページ完結型プロフィールサイト。About/経歴/事業内容/ギャラリー/実績/アクセス/問い合わせを1スクロールページに統合。Instagram・Google Map埋め込み、スクロールアニメーション実装で視覚的なインパクトを実現。",
    imageUrl: "/images/screenshots/profile-site-screenshot.png",
    url: "https://kota-maruyama-profile.vercel.app/",
    pages: "1スクロールページ",
    marketPrice: null,
    price: "13万2000円",
    duration: "1週間",
    features: ["SNS埋め込み", "スクロールアニメ", "レスポンシブ"],
    result: "プロフィール経由での問い合わせが増加",
    breakdown: "シングルページデザイン、画像ギャラリー/SNS埋め込み、レスポンシブ最適化&スクロールアニメ"
  },
  {
    id: 6,
    title: "ランディングページ",
    category: "ホームページ制作",
    description: "シンプルで効果的なランディングページ。コンバージョン重視の設計。",
    longDescription: "商品・サービスの魅力を的確に伝えるランディングページ。ヒーローセクション、特徴紹介、お客様の声、CTAボタンを戦略的に配置し、訪問者を確実にコンバージョンへ導きます。A/Bテスト対応で継続的な改善が可能。",
    imageUrl: "/images/screenshots/landing-page-screenshot.png",
    url: "https://fanciful-kringle-cce8bb.netlify.app/",
    pages: "1ページ",
    marketPrice: null,
    price: "15万8000円",
    duration: "1週間",
    features: ["高速表示", "CTA最適化", "A/Bテスト対応"],
    result: "コンバージョンが改善",
    breakdown: "LP設計・コピーライティング、レスポンシブ対応、高速化最適化"
  }
]

export const SKILLS: SkillCategory[] = [
  {
    category: 'ホームページ制作',
    items: ['HTML/CSS', 'JavaScript', 'WordPress', 'レスポンシブデザイン', 'SEO対策', 'UI/UXデザイン']
  }
]

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: '/', label: 'ホーム' },
  { href: '#portfolio', label: 'ポートフォリオ' },
  { href: '#pricing', label: '料金' },
  { href: '#contact', label: 'お問い合わせ' },
]

export const VALUE_PROPOSITION: ValueProposition = {
  title: "高額でない、確実なホームページ制作",
  subtitle: "余った予算で事業投資を",
  description: "数百万円の高額なホームページを作っても使わなくなってしまっては意味がありません。弊社は必要な機能に絞り込んだ13万2000円からのホームページで、会社の顔としての役割を確実に果たします。浮いた予算は他の事業投資に回して、総合的な成長を実現しませんか？",
  benefits: [
    "必要最小限の機能で確実な効果",
    "制作費を大幅に削減",
    "浮いた予算で他の投資が可能",
    "メンテナンスが簡単で長期利用可能",
    "SEO対策・レスポンシブ対応は標準装備"
  ]
}