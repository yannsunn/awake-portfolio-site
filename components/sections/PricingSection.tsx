'use client'

import { motion } from 'framer-motion'
import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import Section, { SectionHeader } from '@/components/ui/Section'
import Link from 'next/link'

const PRICING_PLANS = [
  {
    name: "スターター",
    price: "13万2000円",
    description: "個人事業主・フリーランス向け",
    features: [
      "5ページまで",
      "レスポンシブ対応",
      "基本的なSEO対策",
      "お問い合わせフォーム",
      "納期：1-2週間"
    ],
    recommended: false,
    color: "border-gray-200"
  },
  {
    name: "ベーシック",
    price: "29万8000円",
    description: "中小企業・店舗向け",
    features: [
      "10ページまで",
      "CMS（更新システム）",
      "高度なSEO対策",
      "アクセス解析設置",
      "納期：2-3週間"
    ],
    recommended: false,
    color: "border-gray-200"
  },
  {
    name: "スタンダード",
    price: "39万8000円",
    description: "機能付きビジネスサイト",
    features: [
      "15ページまで",
      "予約・問い合わせ機能",
      "CMS（更新システム）",
      "高度なSEO対策",
      "アクセス解析設置",
      "納期：3-4週間"
    ],
    recommended: true,
    color: "border-gray-800 ring-2 ring-gray-800"
  },
  {
    name: "プレミアム",
    price: "69万8000円〜",
    description: "ECサイト（簡易版）",
    features: [
      "ページ数無制限",
      "EC機能（決済・在庫管理）",
      "予約システム",
      "カスタム機能",
      "納期：1-2ヶ月"
    ],
    recommended: false,
    color: "border-gray-200"
  }
]

export default function PricingSection() {
  return (
    <Section id="pricing" background="light" padding="xl">
      <SectionHeader
        title="料金プラン"
        description="お客様のニーズに合わせた明確な料金体系。追加費用なしの安心価格です。"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        {PRICING_PLANS.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-800 text-white px-4 py-1 text-sm font-medium rounded-full">
                  おすすめ
                </span>
              </div>
            )}
            <Card 
              variant="elevated" 
              className={`h-full p-8 text-center ${plan.color} ${plan.recommended ? 'scale-105' : ''}`}
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
              </div>
              
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="#contact">
                <Button 
                  className={`w-full py-3 ${
                    plan.recommended 
                      ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  相談する
                </Button>
              </Link>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4">その他のサービス</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium">AIチャットボット</span>
              <span className="text-gray-800 font-bold">39.8万円〜</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium">その他受託開発</span>
              <span className="text-gray-800 font-bold">要相談</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}