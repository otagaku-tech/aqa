'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from './LanguageContext'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    // Start animation after mount
    setIsAnimating(true)

    // Hide splash screen after animation
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-white transition-opacity duration-700 ${
        !isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center animate-fade-in-up">
        <div className="font-en text-7xl sm:text-8xl md:text-9xl font-bold text-text-primary mb-6 flex items-center justify-center">
          <span className={`splash-letter ${isAnimating ? 'animate' : ''}`}>a</span>
          <span className="text-primary-dark">q</span>
          <span className={`splash-letter ${isAnimating ? 'animate' : ''}`}>a</span>
        </div>
        <p className="text-lg sm:text-xl text-text-secondary animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
          {t.hero.subtitle}
        </p>
      </div>
    </div>
  )
}

