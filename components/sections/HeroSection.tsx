'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/common/Button'
import { PROFILE, VALUE_PROPOSITION } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-6 text-gray-800">{PROFILE.name}</h1>
          <h2 className="text-2xl text-gray-600 mb-8">{PROFILE.title}</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              {PROFILE.description}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="#portfolio">
                <Button 
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-lg"
                >
                  ポートフォリオを見る
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}