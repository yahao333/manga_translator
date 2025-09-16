import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { initAnalytics } from '@/lib/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI 漫画翻译神器 | Manga Translator',
  description: '基于先进 AI 技术的漫画翻译工具，支持中文、英文、日文等多语言自动翻译，一键翻译漫画，跨越语言障碍。',
  keywords: '漫画翻译,AI翻译,多语言翻译,中文翻译,英文翻译,日文翻译,manga translator',
  authors: [{ name: 'Manga Translator Team' }],
  creator: 'Manga Translator',
  publisher: 'Manga Translator',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1E67FF',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: ['en_US', 'ja_JP'],
    title: 'AI 漫画翻译神器 | Manga Translator',
    description: '基于先进 AI 技术的漫画翻译工具，支持多语言自动翻译',
    siteName: 'Manga Translator',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Manga Translator - AI 漫画翻译神器'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI 漫画翻译神器 | Manga Translator',
    description: '基于先进 AI 技术的漫画翻译工具，支持多语言自动翻译',
    images: ['/og-image.jpg']
  },
  alternates: {
    canonical: 'https://manga-translator.vercel.app',
    languages: {
      'zh-CN': 'https://manga-translator.vercel.app/zh',
      'en-US': 'https://manga-translator.vercel.app/en',
      'ja-JP': 'https://manga-translator.vercel.app/ja'
    }
  }
};

// 客户端初始化分析系统
function ClientInit() {
  if (typeof window !== 'undefined') {
    initAnalytics();
  }
  return null;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className="scroll-smooth">
      <head>
        {/* 预连接到外部资源 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* 性能优化 */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ClientInit />
        <div className="min-h-screen bg-white">
          {children}
        </div>
        
        {/* 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Manga Translator',
              description: '基于先进 AI 技术的漫画翻译工具，支持多语言自动翻译',
              url: 'https://manga-translator.vercel.app',
              applicationCategory: 'UtilityApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD'
              },
              creator: {
                '@type': 'Organization',
                name: 'Manga Translator Team'
              }
            })
          }}
        />
      </body>
    </html>
  );
}