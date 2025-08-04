import Link from 'next/link'
import { PROFILE, NAVIGATION_ITEMS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {currentYear} {PROFILE.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {NAVIGATION_ITEMS.slice(0, -1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm hover:text-gray-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}