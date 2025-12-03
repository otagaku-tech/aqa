export interface NewsItem {
  date: string
  category: string
  categoryEn: string
  title: string
  titleEn: string
}

export const newsData: NewsItem[] = [
  {
    date: '2025.11.30',
    category: 'お知らせ',
    categoryEn: 'News',
    title: 'Webサイトをリニューアルしました',
    titleEn: 'Website Renewed',
  },
  {
    date: '2025.11.29',
    category: 'お知らせ',
    categoryEn: 'News',
    title: 'Webサイトを制作しました',
    titleEn: 'Website Launched',
  },
]

