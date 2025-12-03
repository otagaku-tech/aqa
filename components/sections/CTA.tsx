'use client'

import Link from 'next/link'
import { useLanguage } from '../LanguageContext'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-32 bg-bg-primary text-center">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 whitespace-pre-line">
          {t.cta.title}
        </h2>
        <p className="text-text-secondary mb-10">{t.cta.description}</p>
        <Link href="/contact" className="btn-primary">
          <span>{t.cta.button}</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

