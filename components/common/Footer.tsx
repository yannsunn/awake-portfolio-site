import Link from 'next/link'
import { COMPANY_INFO, NAVIGATION_ITEMS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">
              {COMPANY_INFO.nameEn}
            </div>
            <h3 className="text-lg font-semibold mb-2">{COMPANY_INFO.name}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {COMPANY_INFO.description}
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>所在地: {COMPANY_INFO.address}</p>
              <p>設立: {COMPANY_INFO.founded}</p>
              <p>資本金: {COMPANY_INFO.capital}</p>
              <p>従業員数: {COMPANY_INFO.employees}</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">サイトマップ</h4>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>TEL: {COMPANY_INFO.phone}</p>
              <p>Email: {COMPANY_INFO.email}</p>
            </div>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-4 py-2 rounded text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                お問い合わせフォーム
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}