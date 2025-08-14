/**
 * 統一アニメーション定義
 * プロジェクト全体で一貫したアニメーションを管理
 */

export const animations = {
  // フェードイン系
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },
  
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  
  // スケール系
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, type: "spring", bounce: 0.3 },
  },
  
  scaleUp: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { duration: 0.5, type: "spring", bounce: 0.4 },
  },
  
  // ホバー系
  hoverLift: {
    whileHover: { y: -6, transition: { duration: 0.3 } },
  },
  
  hoverScale: {
    whileHover: { scale: 1.05, transition: { duration: 0.3 } },
  },
  
  hoverScaleRotate: {
    whileHover: { scale: 1.05, rotate: 5, transition: { duration: 0.3 } },
  },
  
  // タップ系
  tap: {
    whileTap: { scale: 0.95 },
  },
  
  // コンテナ系（子要素を順番にアニメーション）
  staggerContainer: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
} as const

// アニメーション設定ヘルパー
export const getAnimation = (
  type: keyof typeof animations,
  customTransition?: Record<string, any>
) => {
  const animation = animations[type]
  if (customTransition && 'transition' in animation) {
    return {
      ...animation,
      transition: { ...animation.transition, ...customTransition },
    }
  }
  return animation
}

// ビューポート設定
export const viewportSettings = {
  once: true,
  margin: "-100px",
} as const