export type Language = 'ja' | 'en'

export const translations = {
  ja: {
    // Navigation
    nav: {
      about: 'About',
      service: 'Service',
      news: 'News',
      contact: 'Contact',
      privacy: 'Privacy',
    },
    // Hero
    hero: {
      title: '心震える創造を\nあなたと共に',
      subtitle: 'Create "being moved" with you',
      description: 'アバターを通じた新しい自己実現の形を創造する',
      cta: 'Discover More',
    },
    // About
    about: {
      label: 'About Us',
      title: '私たちについて',
      lead: 'aqaは、デジタル空間における',
      highlight: '新しい自己表現',
      leadEnd: 'の可能性を追求します。',
      p1: '私たちは「心震える創造」をビジョンに掲げ、ユーザーの皆様と共に、アバターを通じた革新的な体験を創り上げていきます。',
      p2: 'テクノロジーと創造性の融合により、誰もが自分らしく輝ける未来を目指します。',
      p3: '現在、アバターベースのECサイトを開発中です。ユーザーが所有するアバターを活用し、デジタル空間での新しいショッピング体験を提供する予定です。',
    },
    // Service
    service: {
      label: 'Our Service',
      title: 'サービス',
      intro: 'アバター市場を基盤とし、ユーザーが所有するアバターを用いて、',
      introStrong: '全ての活動をシームレスに行える包括的なWebサービス',
      introEnd: 'を開発・提供します。',
      avatar: {
        title: 'アバター活用',
        desc: 'あなただけのアバターで、ゲーム・SNS・情報発信など日常活動を自由自在に',
      },
      content: {
        title: 'コンテンツ制作',
        desc: 'クリエイティブな表現活動をサポートし、あなたの創造性を最大限に引き出す',
      },
      economy: {
        title: '経済活動',
        desc: 'アバターを通じた新しい収益機会を創出し、自己実現と収入を両立',
      },
      integration: {
        title: 'シームレス統合',
        desc: '全てのサービスが一つのプラットフォームで繋がり、境界のない体験を提供',
      },
    },
    // News
    news: {
      label: 'News',
      title: 'お知らせ',
      loading: '読み込み中...',
      empty: 'お知らせはありません。',
      error: 'お知らせの読み込みに失敗しました。',
    },
    // CTA
    cta: {
      title: 'あなたの創造を、\n私たちと共に',
      description: 'ご質問やお問い合わせはお気軽にどうぞ',
      button: 'Contact Us',
    },
    // Footer
    footer: {
      tagline: '心震える創造をあなたと共に',
      navigation: 'Navigation',
      contactForm: 'お問い合わせフォーム',
    },
    // Contact
    contact: {
      label: 'Contact',
      title: 'お問い合わせ',
      intro: 'サービスに関するご質問、ご要望、お仕事のご依頼など、お気軽にお問い合わせください。',
      email: {
        title: 'メールでのお問い合わせ',
        desc: '以下のフォームからお問い合わせいただくか、直接メールをお送りください。',
      },
      response: {
        title: '返信について',
        desc: '通常2〜3営業日以内にご返信いたします。お急ぎの場合はその旨をお書き添えください。',
      },
      form: {
        name: 'お名前',
        namePlaceholder: '山田 太郎',
        email: 'メールアドレス',
        company: '会社名・団体名',
        companyPlaceholder: '株式会社〇〇',
        category: 'お問い合わせ種別',
        categoryPlaceholder: '選択してください',
        categoryService: 'サービスについて',
        categoryPartnership: 'パートナーシップ・提携',
        categoryMedia: '取材・メディア関連',
        categoryCareer: '採用について',
        categoryOther: 'その他',
        message: 'お問い合わせ内容',
        messagePlaceholder: 'お問い合わせ内容をご記入ください',
        privacy: 'プライバシーポリシーに同意する',
        submit: '送信する',
        sending: '送信中...',
      },
      success: {
        title: '送信完了',
        message: 'お問い合わせありがとうございます。内容を確認の上、担当者よりご連絡いたします。',
        close: '閉じる',
      },
    },
    // Privacy
    privacy: {
      title: 'プライバシーポリシー',
      intro: 'aqa（以下「当社」）は、個人情報の保護に関する法令等を遵守し、以下のとおりプライバシーポリシーを定めます。',
      sections: {
        collection: {
          title: '1. 個人情報の収集',
          content: '当社は、お問い合わせまたはサービスのご利用に際し、お名前、メールアドレス、電話番号、会社名などの個人情報をご提供いただく場合があります。',
        },
        purpose: {
          title: '2. 個人情報の利用目的',
          content: '当社は、収集した個人情報を以下の目的で利用します。',
          items: [
            'お問い合わせへの対応',
            'サービスの提供および品質改善',
            '新サービス、機能追加、更新情報等のご案内',
            '個人を特定できない統計データの作成・分析',
          ],
        },
        thirdParty: {
          title: '3. 第三者への提供',
          content: '当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。',
        },
        security: {
          title: '4. 安全管理',
          content: '当社は、個人情報の漏えい、滅失、毀損等を防止するため、適切な安全管理措置を講じます。',
        },
        disclosure: {
          title: '5. 開示・訂正・削除',
          content: 'ご本人から個人情報の開示、訂正、削除等のご請求があった場合、合理的な範囲で速やかに対応いたします。',
        },
        cookies: {
          title: '6. Cookieの使用',
          content: '当社ウェブサイトでは、サービス向上やアクセス解析のためにCookieを使用する場合があります。Cookieはブラウザの設定により無効化することが可能です。',
        },
        changes: {
          title: '7. プライバシーポリシーの変更',
          content: '当社は、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは、当ウェブサイトに掲載された時点で効力を生じます。',
        },
        contact: {
          title: '8. お問い合わせ',
          content: '個人情報の取り扱いに関するお問い合わせは、お問い合わせフォームよりご連絡ください。',
        },
      },
      updated: '制定日：2024年11月29日\n改定日：2025年11月30日',
    },
  },
  en: {
    // Navigation
    nav: {
      about: 'About',
      service: 'Service',
      news: 'News',
      contact: 'Contact',
      privacy: 'Privacy',
    },
    // Hero
    hero: {
      title: 'Create "being moved"\nwith you',
      subtitle: '心震える創造をあなたと共に',
      description: 'Creating new forms of self-expression through avatars',
      cta: 'Discover More',
    },
    // About
    about: {
      label: 'About Us',
      title: 'About Us',
      lead: 'aqa pursues the possibilities of ',
      highlight: 'new self-expression',
      leadEnd: ' in digital spaces.',
      p1: 'With our vision of "Creating being moved," we work together with our users to create innovative experiences through avatars.',
      p2: 'Through the fusion of technology and creativity, we aim for a future where everyone can shine as their true selves.',
      p3: 'We are currently developing an avatar-based e-commerce platform. We plan to provide a new digital shopping experience utilizing user-owned avatars.',
    },
    // Service
    service: {
      label: 'Our Service',
      title: 'Services',
      intro: 'Based on the avatar market, we develop and provide ',
      introStrong: 'comprehensive web services that enable seamless activities',
      introEnd: ' using user-owned avatars.',
      avatar: {
        title: 'Avatar Utilization',
        desc: 'Freely engage in daily activities like gaming, social media, and content sharing with your unique avatar',
      },
      content: {
        title: 'Content Creation',
        desc: 'Supporting creative expression and maximizing your creativity',
      },
      economy: {
        title: 'Economic Activities',
        desc: 'Creating new revenue opportunities through avatars, balancing self-fulfillment and income',
      },
      integration: {
        title: 'Seamless Integration',
        desc: 'All services connected on one platform, providing a boundless experience',
      },
    },
    // News
    news: {
      label: 'News',
      title: 'News',
      loading: 'Loading...',
      empty: 'No news available.',
      error: 'Failed to load news.',
    },
    // CTA
    cta: {
      title: 'Your creativity,\ntogether with us',
      description: 'Feel free to contact us with any questions',
      button: 'Contact Us',
    },
    // Footer
    footer: {
      tagline: 'Create "being moved" with you',
      navigation: 'Navigation',
      contactForm: 'Contact Form',
    },
    // Contact
    contact: {
      label: 'Contact',
      title: 'Contact Us',
      intro: 'For questions about our services, requests, or business inquiries, please feel free to contact us.',
      email: {
        title: 'Contact via Email',
        desc: 'Please use the form below or send us an email directly.',
      },
      response: {
        title: 'Response Time',
        desc: 'We typically respond within 2-3 business days. Please note if your inquiry is urgent.',
      },
      form: {
        name: 'Name',
        namePlaceholder: 'John Doe',
        email: 'Email',
        company: 'Company/Organization',
        companyPlaceholder: 'Company Inc.',
        category: 'Inquiry Type',
        categoryPlaceholder: 'Please select',
        categoryService: 'About Services',
        categoryPartnership: 'Partnership',
        categoryMedia: 'Media Inquiries',
        categoryCareer: 'Careers',
        categoryOther: 'Other',
        message: 'Message',
        messagePlaceholder: 'Please enter your message',
        privacy: 'I agree to the Privacy Policy',
        submit: 'Submit',
        sending: 'Sending...',
      },
      success: {
        title: 'Sent Successfully',
        message: 'Thank you for your inquiry. We will review and contact you soon.',
        close: 'Close',
      },
    },
    // Privacy
    privacy: {
      title: 'Privacy Policy',
      intro: 'aqa (hereinafter "the Company") complies with laws and regulations regarding the protection of personal information and establishes this Privacy Policy.',
      sections: {
        collection: {
          title: '1. Collection of Personal Information',
          content: 'We may collect personal information such as your name, email address, phone number, and company name when you make inquiries or use our services.',
        },
        purpose: {
          title: '2. Purpose of Use',
          content: 'We use collected personal information for the following purposes:',
          items: [
            'Responding to inquiries',
            'Providing services and improving quality',
            'Notifications about new services, features, and updates',
            'Creating and analyzing non-identifiable statistical data',
          ],
        },
        thirdParty: {
          title: '3. Disclosure to Third Parties',
          content: 'We will not disclose personal information to third parties without your consent, except as required by law.',
        },
        security: {
          title: '4. Security Measures',
          content: 'We implement appropriate security measures to prevent leakage, loss, or damage of personal information.',
        },
        disclosure: {
          title: '5. Disclosure, Correction, and Deletion',
          content: 'When you request disclosure, correction, or deletion of your personal information, we will respond promptly within a reasonable scope.',
        },
        cookies: {
          title: '6. Use of Cookies',
          content: 'Our website may use cookies for service improvement and access analysis. Cookies can be disabled through your browser settings.',
        },
        changes: {
          title: '7. Changes to Privacy Policy',
          content: 'We may change this policy as necessary. The revised policy becomes effective when posted on this website.',
        },
        contact: {
          title: '8. Contact',
          content: 'For inquiries regarding the handling of personal information, please contact us through the contact form.',
        },
      },
      updated: 'Established: November 29, 2024\nRevised: November 30, 2025',
    },
  },
}

export function getTranslation(lang: Language) {
  return translations[lang]
}

