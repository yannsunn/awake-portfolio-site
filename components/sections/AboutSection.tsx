'use client'

import { motion } from 'framer-motion'
import { VALUE_PROPOSITION } from '@/lib/constants'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">{VALUE_PROPOSITION.title}</h2>
            <p className="text-xl text-primary mb-8">{VALUE_PROPOSITION.subtitle}</p>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              {VALUE_PROPOSITION.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {VALUE_PROPOSITION.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="text-primary text-2xl mb-3">✓</div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-gradient-to-r from-primary to-secondary rounded-lg text-white"
          >
            <h3 className="text-2xl font-bold mb-4">なぜ高額でないホームページなのか？</h3>
            <p className="text-lg leading-relaxed">
              数百万円のホームページを作っても、結局使わなくなってしまうケースを多く見てきました。
              弊社では必要な機能に絞り込み、確実に効果の出るホームページを数十万円で制作。
              浮いた予算で設備投資や人材育成など、事業の本質的な成長に投資していただけます。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}