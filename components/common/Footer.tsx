import Link from 'next/link'
import { PROFILE, NAVIGATION_ITEMS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div>
            <div className="text-2xl font-bold text-primary mb-4">
              {PROFILE.name}
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {PROFILE.description}
            </p>
            <p className="text-gray-300 text-sm">
              {PROFILE.title}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
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

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-2 text-sm">
              <div>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {PROFILE.email}
                </a>
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={PROFILE.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-4 py-2 rounded text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} {PROFILE.name}. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-gray-400">
              Built with Next.js & Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}