'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { NAVIGATION_ITEMS, PROFILE } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-gray-100"
      animate={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.95)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(8px)",
        boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="text-xl font-bold text-gray-800">{PROFILE.name}</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.href}>
                {item.href.startsWith('#') ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      'text-gray-600 hover:text-black transition-colors cursor-pointer',
                      pathname === item.href && 'text-black font-medium'
                    )}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'text-gray-600 hover:text-black transition-colors cursor-pointer',
                      pathname === item.href && 'text-black font-medium'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
          aria-label="メニューを開く"
        >
          <motion.span
            className="block w-6 h-0.5 bg-gray-700"
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 4 : 0,
            }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-gray-700"
            animate={{
              opacity: isMenuOpen ? 0 : 1,
            }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-gray-700"
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -4 : 0,
            }}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="py-4 space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      'block px-6 py-2 text-gray-600 hover:text-black transition-colors text-left w-full',
                      pathname === item.href && 'text-black font-medium'
                    )}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      'block px-6 py-2 text-gray-600 hover:text-black transition-colors',
                      pathname === item.href && 'text-black font-medium'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}