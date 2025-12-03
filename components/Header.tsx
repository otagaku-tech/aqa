'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from './LanguageContext'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLang(lang === 'ja' ? 'en' : 'ja')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-md shadow-primary/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="font-en text-3xl font-bold text-primary-dark tracking-wide">
          aqa
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#about"
            className="font-en text-sm font-medium text-text-secondary hover:text-text-primary transition-colors relative group"
          >
            {t.nav.about}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </Link>
          <Link
            href="/#service"
            className="font-en text-sm font-medium text-text-secondary hover:text-text-primary transition-colors relative group"
          >
            {t.nav.service}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </Link>
          <Link
            href="/#news"
            className="font-en text-sm font-medium text-text-secondary hover:text-text-primary transition-colors relative group"
          >
            {t.nav.news}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 bg-primary rounded-full font-en text-sm font-medium text-text-primary hover:bg-primary-dark hover:text-white transition-all hover:-translate-y-0.5"
          >
            {t.nav.contact}
          </Link>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 border-2 border-primary/50 rounded-full font-en text-sm font-semibold text-text-secondary hover:border-primary hover:text-text-primary transition-colors"
            aria-label="Toggle language"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {lang === 'ja' ? 'EN' : 'JP'}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-text-primary transition-all ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-text-primary transition-all ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-text-primary transition-all ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-4/5 max-w-xs h-screen bg-white shadow-xl transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            href="/#about"
            className="font-en text-lg font-medium text-text-secondary hover:text-text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.about}
          </Link>
          <Link
            href="/#service"
            className="font-en text-lg font-medium text-text-secondary hover:text-text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.service}
          </Link>
          <Link
            href="/#news"
            className="font-en text-lg font-medium text-text-secondary hover:text-text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.news}
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 bg-primary rounded-full font-en font-medium text-text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.contact}
          </Link>
          <button
            onClick={() => {
              toggleLanguage()
              setIsMenuOpen(false)
            }}
            className="flex items-center gap-2 px-4 py-2 border-2 border-primary/50 rounded-full font-en font-semibold text-text-secondary"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {lang === 'ja' ? 'EN' : 'JP'}
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  )
}

