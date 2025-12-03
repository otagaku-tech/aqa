'use client'

import { useLanguage } from '../LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 md:py-32 bg-bg-secondary relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-label">{t.about.label}</span>
          <h2 className="section-title mt-4">{t.about.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="flex justify-center order-first lg:order-last">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-primary rounded-full animate-pulse-slow" />
              <div className="absolute w-48 h-48 md:w-56 md:h-56 border-2 border-dashed border-primary rounded-full animate-rotate-slow opacity-50" />
              <div className="absolute inset-0 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}>
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-dark rounded-full" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-dark rounded-full" />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary-dark rounded-full" />
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary-dark rounded-full" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-xl font-medium text-text-primary">
              {t.about.lead}
              <span className="text-primary-dark font-bold">{t.about.highlight}</span>
              {t.about.leadEnd}
            </p>
            <p className="text-text-secondary leading-relaxed">{t.about.p1}</p>
            <p className="text-text-secondary leading-relaxed">{t.about.p2}</p>
            <p className="text-text-secondary leading-relaxed bg-primary-light/50 p-4 rounded-lg border-l-4 border-primary-dark">
              {t.about.p3}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

