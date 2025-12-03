'use client'

import { useLanguage } from '../LanguageContext'
import { newsData, type NewsItem } from '@/lib/news'

export default function News() {
  const { lang, t } = useLanguage()

  return (
    <section id="news" className="py-20 md:py-32 bg-bg-secondary relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-label">{t.news.label}</span>
          <h2 className="section-title mt-4">{t.news.title}</h2>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {newsData.map((item: NewsItem, index: number) => (
            <article
              key={index}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 p-5 bg-bg-primary border-2 border-primary/30 rounded-xl hover:border-primary hover:translate-x-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <time className="font-en text-sm font-semibold text-primary-dark shrink-0 min-w-[100px]">
                {item.date}
              </time>
              <span className="text-xs font-medium px-3 py-1 bg-primary-light text-text-primary rounded-full self-start shrink-0">
                {lang === 'ja' ? item.category : item.categoryEn}
              </span>
              <h3 className="text-text-primary font-medium flex-grow">
                {lang === 'ja' ? item.title : item.titleEn}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

