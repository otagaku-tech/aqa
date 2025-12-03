'use client'

import { LanguageProvider } from '@/components/LanguageContext'
import SplashScreen from '@/components/SplashScreen'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Service from '@/components/sections/Service'
import News from '@/components/sections/News'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <LanguageProvider>
      <SplashScreen />
      <Header />
      <main>
        <Hero />
        <About />
        <Service />
        <News />
        <CTA />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

