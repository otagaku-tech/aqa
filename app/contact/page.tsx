'use client'

import { useState } from 'react'
import { LanguageProvider, useLanguage } from '@/components/LanguageContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SplashScreen from '@/components/SplashScreen'

function ContactContent() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)

    const formData = new FormData(form)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      category: formData.get('category'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'エラーが発生しました')
      }

      // 成功
      setIsSubmitting(false)
      setShowModal(true)
      form.reset()
    } catch (error) {
      setIsSubmitting(false)
      alert(error instanceof Error ? error.message : 'メール送信に失敗しました。時間をおいて再度お試しください。')
    }
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-bg-secondary relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-72 h-72 bg-primary opacity-20 rounded-full -top-20 -right-20 animate-float" />
            <div className="absolute w-60 h-60 bg-primary opacity-20 rounded-full -bottom-16 -left-16 animate-float" style={{ animationDelay: '-5s' }} />
          </div>
          <div className="container-custom relative z-10">
            <div className="text-center">
              <span className="section-label">{t.contact.label}</span>
              <h1 className="section-title mt-4">{t.contact.title}</h1>
            </div>
            <p className="text-center text-text-secondary mt-6 max-w-2xl mx-auto">
              {t.contact.intro}
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Info Cards */}
              <div className="lg:col-span-2 space-y-6">
                <div className="card">
                  <div className="w-12 h-12 mb-4 p-2 bg-primary-light rounded-lg text-primary-dark">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="M22 6l-10 7L2 6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-text-primary mb-2">{t.contact.email.title}</h3>
                  <p className="text-sm text-text-secondary">{t.contact.email.desc}</p>
                </div>

                <div className="card">
                  <div className="w-12 h-12 mb-4 p-2 bg-primary-light rounded-lg text-primary-dark">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-text-primary mb-2">{t.contact.response.title}</h3>
                  <p className="text-sm text-text-secondary">{t.contact.response.desc}</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="lg:col-span-3 card">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                      {t.contact.form.name} <span className="text-primary-dark">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full px-4 py-3 bg-bg-secondary border-2 border-primary/30 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                      {t.contact.form.email} <span className="text-primary-dark">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 bg-bg-secondary border-2 border-primary/30 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-text-primary mb-2">
                      {t.contact.form.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder={t.contact.form.companyPlaceholder}
                      className="w-full px-4 py-3 bg-bg-secondary border-2 border-primary/30 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-semibold text-text-primary mb-2">
                      {t.contact.form.category} <span className="text-primary-dark">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      className="w-full px-4 py-3 bg-bg-secondary border-2 border-primary/30 rounded-xl text-text-primary focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%235a7080' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 12px center',
                        backgroundSize: '20px',
                      }}
                    >
                      <option value="">{t.contact.form.categoryPlaceholder}</option>
                      <option value="service">{t.contact.form.categoryService}</option>
                      <option value="partnership">{t.contact.form.categoryPartnership}</option>
                      <option value="media">{t.contact.form.categoryMedia}</option>
                      <option value="career">{t.contact.form.categoryCareer}</option>
                      <option value="other">{t.contact.form.categoryOther}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                      {t.contact.form.message} <span className="text-primary-dark">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full px-4 py-3 bg-bg-secondary border-2 border-primary/30 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors resize-y min-h-[150px]"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="privacy"
                        required
                        className="w-5 h-5 accent-primary"
                      />
                      <span className="text-sm text-text-secondary">
                        {t.contact.form.privacy} <span className="text-primary-dark">*</span>
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span>{t.contact.form.sending}</span>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>{t.contact.form.submit}</span>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-white/90 backdrop-blur-sm">
          <div className="bg-bg-primary border-2 border-primary rounded-3xl p-10 text-center max-w-md mx-4 shadow-2xl shadow-primary/20">
            <div className="w-16 h-16 mx-auto mb-6 p-4 bg-primary-light rounded-full text-primary-dark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">{t.contact.success.title}</h3>
            <p className="text-text-secondary mb-8">{t.contact.success.message}</p>
            <button
              onClick={() => setShowModal(false)}
              className="btn-primary"
            >
              {t.contact.success.close}
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

export default function ContactPage() {
  return (
    <LanguageProvider>
      <SplashScreen />
      <ContactContent />
    </LanguageProvider>
  )
}

