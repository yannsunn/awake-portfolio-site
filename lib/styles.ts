/**
 * 共通スタイル定数
 * プロジェクト全体で統一されたスタイルを管理
 */

export const commonStyles = {
  // シャドウスタイル
  shadow: {
    subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.02)',
    minimal: '0 1px 2px 0 rgba(0, 0, 0, 0.01)',
    hover: '0 4px 12px -2px rgba(0, 0, 0, 0.08)',
  },
  
  // パディング
  padding: {
    section: 'py-12 md:py-16 lg:py-20',
    sectionSm: 'py-8 md:py-12 lg:py-16',
    sectionLg: 'py-16 md:py-20 lg:py-24',
    container: 'px-4 md:px-6 lg:px-8',
  },
  
  // カードスタイル
  card: {
    base: 'bg-white rounded-2xl border border-gray-50',
    glass: 'bg-white/80 backdrop-blur-md border border-gray-50 rounded-2xl p-8',
    hover: 'transition-all duration-300 hover:translate-y-[-6px]',
  },
  
  // ボタンスタイル
  button: {
    primary: 'bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5',
    secondary: 'bg-white border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-lg font-medium transition-all duration-300 hover:border-[var(--accent)] hover:bg-gray-50',
  },
  
  // テキストスタイル
  text: {
    heading: 'text-4xl md:text-5xl font-bold text-gray-900',
    subheading: 'text-lg md:text-xl text-gray-600',
    body: 'text-base text-gray-600 leading-relaxed',
  },
} as const

// スタイルヘルパー関数
export const getCardStyle = (withShadow = true) => {
  return withShadow 
    ? { className: commonStyles.card.base, style: { boxShadow: commonStyles.shadow.subtle } }
    : { className: commonStyles.card.base }
}

export const getGlassStyle = (withShadow = true) => {
  return withShadow 
    ? { className: commonStyles.card.glass, style: { boxShadow: commonStyles.shadow.subtle } }
    : { className: commonStyles.card.glass }
}