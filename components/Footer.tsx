'use client'

import Link from 'next/link'
import { useLanguage } from './LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-bg-secondary border-t-4 border-primary pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="font-en text-3xl font-bold text-primary-dark">aqa</span>
            <p className="mt-3 text-text-secondary">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="font-en text-sm font-semibold tracking-wider text-text-primary mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className="text-text-secondary hover:text-primary-dark transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/#service" className="text-text-secondary hover:text-primary-dark transition-colors">
                  {t.nav.service}
                </Link>
              </li>
              <li>
                <Link href="/#news" className="text-text-secondary hover:text-primary-dark transition-colors">
                  {t.nav.news}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-primary-dark transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-text-secondary hover:text-primary-dark transition-colors">
                  {t.nav.privacy}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-en text-sm font-semibold tracking-wider text-text-primary mb-4">
              Contact
            </h4>
            <Link
              href="/contact"
              className="text-text-secondary hover:text-primary-dark transition-colors"
            >
              {t.footer.contactForm}
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/30 text-center">
          <p className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} aqa. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

