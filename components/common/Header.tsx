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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.95)",
        backdropFilter: isScrolled ? "blur(16px)" : "blur(12px)",
        WebkitBackdropFilter: isScrolled ? "blur(16px)" : "blur(12px)",
        borderBottom: isScrolled ? "1px solid rgba(229, 231, 235, 0.8)" : "1px solid rgba(229, 231, 235, 0.5)",
        boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.07)" : "none"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
            {PROFILE.name}
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-1 lg:space-x-2">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.href}>
                {item.href.startsWith('#') ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      'px-4 py-2 text-sm lg:text-base font-medium text-gray-600 hover:text-[var(--accent)] transition-all duration-200 rounded-lg hover:bg-gray-50',
                      pathname === item.href && 'text-[var(--accent)] bg-gray-50'
                    )}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'px-4 py-2 text-sm lg:text-base font-medium text-gray-600 hover:text-[var(--accent)] transition-all duration-200 rounded-lg hover:bg-gray-50',
                      pathname === item.href && 'text-[var(--accent)] bg-gray-50'
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
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="メニューを開く"
        >
          <motion.span
            className="block w-5 h-0.5 bg-gray-700 transition-all duration-300"
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 4 : 0,
            }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-gray-700 transition-all duration-300"
            animate={{
              opacity: isMenuOpen ? 0 : 1,
            }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-gray-700 transition-all duration-300"
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
            className="md:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-lg"
          >
            <div className="py-6 px-4 space-y-1">
              {NAVIGATION_ITEMS.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      'block px-4 py-3 text-base font-medium text-gray-600 hover:text-[var(--accent)] hover:bg-gray-50 rounded-lg transition-all duration-200 text-left w-full',
                      pathname === item.href && 'text-[var(--accent)] bg-gray-50'
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
                      'block px-4 py-3 text-base font-medium text-gray-600 hover:text-[var(--accent)] hover:bg-gray-50 rounded-lg transition-all duration-200',
                      pathname === item.href && 'text-[var(--accent)] bg-gray-50'
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