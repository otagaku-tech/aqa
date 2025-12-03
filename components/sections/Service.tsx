'use client'

import { useLanguage } from '../LanguageContext'

const icons = {
  avatar: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M8 44c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  content: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="6" y="10" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M6 18h36M14 26h8M14 32h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  economy: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
      <path d="M24 14v10l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  ),
  integration: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <path d="M24 4L44 14v20L24 44 4 34V14L24 4z" stroke="currentColor" strokeWidth="2" />
      <path d="M24 4v40M4 14l20 10 20-10M4 34l20-10 20 10" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
}

export default function Service() {
  const { t } = useLanguage()

  const services = [
    { key: 'avatar', icon: icons.avatar, ...t.service.avatar },
    { key: 'content', icon: icons.content, ...t.service.content },
    { key: 'economy', icon: icons.economy, ...t.service.economy },
    { key: 'integration', icon: icons.integration, ...t.service.integration },
  ]

  return (
    <section id="service" className="py-20 md:py-32 bg-bg-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-label">{t.service.label}</span>
          <h2 className="section-title mt-4">{t.service.title}</h2>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-text-secondary">
            {t.service.intro}
            <strong className="text-text-primary">{t.service.introStrong}</strong>
            {t.service.introEnd}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <article key={service.key} className="card text-center">
              <div className="w-16 h-16 mx-auto mb-4 p-3 bg-primary-light rounded-xl text-primary-dark">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">{service.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

