import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://aqa.co.jp'),
  title: {
    default: 'aqa | 心震える創造をあなたと共に',
    template: '%s | aqa',
  },
  description: 'aqaはアバター市場を基盤とし、ゲーム、SNS、コンテンツ制作など全ての活動をシームレスに行えるWebサービスの提供を目指します。アバターを通じた新しい自己実現と収益機会を創出します。',
  keywords: ['aqa', 'アバター', 'avatar', 'メタバース', 'metaverse', 'Web3', 'デジタルアイデンティティ', 'ECサイト', 'クリエイター'],
  authors: [{ name: 'aqa' }],
  creator: 'aqa',
  publisher: 'aqa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    alternateLocale: 'en_US',
    url: 'https://aqa.co.jp',
    siteName: 'aqa',
    title: 'aqa | 心震える創造をあなたと共に',
    description: 'aqaはアバター市場を基盤とし、ゲーム、SNS、コンテンツ制作など全ての活動をシームレスに行えるWebサービスの提供を目指します。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'aqa - Create "being moved" with you',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aqa | 心震える創造をあなたと共に',
    description: 'aqaはアバター市場を基盤とし、全ての活動をシームレスに行えるWebサービスの提供を目指します。',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'aqa',
              url: 'https://aqa.co.jp',
              logo: 'https://aqa.co.jp/logo.png',
              description: 'アバター市場を基盤としたWebサービスの提供を目指すスタートアップ',
              sameAs: [],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                url: 'https://aqa.co.jp/contact',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
