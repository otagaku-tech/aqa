'use client'

import { useLanguage } from '../LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-bg-secondary to-white">
      {/* Background shapes */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-primary opacity-30 rounded-full -top-20 -right-20 animate-float" />
        <div className="absolute w-60 h-60 md:w-72 md:h-72 bg-primary opacity-30 rounded-full -bottom-16 -left-16 animate-float" style={{ animationDelay: '-5s' }} />
        <div className="absolute w-40 h-40 md:w-48 md:h-48 bg-primary opacity-30 rounded-full top-1/2 left-1/4 animate-float" style={{ animationDelay: '-10s' }} />
        <div className="absolute w-48 h-48 md:w-56 md:h-56 bg-primary opacity-30 rounded-full bottom-1/4 right-1/6 animate-float" style={{ animationDelay: '-15s' }} />
      </div>

      <div className="container-custom text-center relative z-10 py-20">
        <h1 className="mb-8">
          <span className="block text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-4 animate-fade-in-up whitespace-pre-line">
            {t.hero.title}
          </span>
          <span className="block font-en text-lg sm:text-xl md:text-2xl font-medium tracking-widest text-primary-dark animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            {t.hero.subtitle}
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-text-secondary mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          {t.hero.description}
        </p>
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-3 text-text-secondary hover:text-primary-dark transition-colors animate-fade-in-up"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          <span className="font-en text-sm font-medium tracking-wider">{t.hero.cta}</span>
          <svg className="w-6 h-6 animate-bounce-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  )
}
