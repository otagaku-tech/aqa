'use client'

import { LanguageProvider, useLanguage } from '@/components/LanguageContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SplashScreen from '@/components/SplashScreen'
import type { Metadata } from 'next'

function PrivacyContent() {
  const { t } = useLanguage()
  const { sections } = t.privacy

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-bg-secondary">
          <div className="container-custom">
            <div className="text-center">
              <span className="section-label">Privacy Policy</span>
              <h1 className="section-title mt-4">{t.privacy.title}</h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-text-secondary mb-12 text-lg">{t.privacy.intro}</p>

              {/* Section 1: Collection */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-text-primary mb-4">{sections.collection.title}</h2>
                <p className="text-text-secondary">{sections.collection.content}</p>
              </div>

              {/* Section 2: Purpose */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-text-primary mb-4">{sections.purpose.title}</h2>
                <p className="text-text-secondary mb-4">{sections.purpose.content}</p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary">
                  {sections.purpose.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Section 3: Third Party */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-text-primary mb-4">{sections.thirdParty.title}</h2>
                <p className="text-text-secondary">{sections.thirdParty.content}</p>
              </div>

              {/* Section 4: Security */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-text-primary mb-4">{sections.security.title}</h2>
                <p className="text-text-secondary">{sections.security.content}</p>
              </div>

              {/* Section 5: Disclosure */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-text-primary mb-4">{sections.disclosure.title}</h2>
                <p className="text-text-secondary">{sections.disclosure.content}</p>
              </div>

              {/* Section 6: Cookies */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-text-primary mb-4">{sections.cookies.title}</h2>
                <p className="text-text-secondary">{sections.cookies.content}</p>
              </div>

              {/* Section 7: Changes */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-text-primary mb-4">{sections.changes.title}</h2>
                <p className="text-text-secondary">{sections.changes.content}</p>
              </div>

              {/* Section 8: Contact */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-text-primary mb-4">{sections.contact.title}</h2>
                <p className="text-text-secondary">{sections.contact.content}</p>
              </div>

              <p className="text-text-muted mt-12 pt-8 border-t border-primary/30">{t.privacy.updated}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default function PrivacyPage() {
  return (
    <LanguageProvider>
      <SplashScreen />
      <PrivacyContent />
    </LanguageProvider>
  )
}

