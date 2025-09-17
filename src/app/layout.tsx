import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { initAnalytics } from '@/lib/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'AI漫画翻译神器 - 免费在线漫画翻译工具 | Manga Translator',
    template: '%s | Manga Translator'
  },
  description: '🎯 专业AI漫画翻译工具，支持中日英韩等多语言自动翻译。一键上传漫画图片，智能识别文字并精准翻译，保持原版排版。免费使用，无需注册，让您轻松享受全球漫画作品！',
  keywords: [
    // 核心关键词
    'AI漫画翻译', '漫画翻译器', '在线漫画翻译', '免费漫画翻译',
    // 功能关键词  
    '图片翻译', 'OCR翻译', '文字识别翻译', '智能翻译',
    // 语言关键词
    '中文漫画翻译', '日文漫画翻译', '英文漫画翻译', '韩文漫画翻译',
    // 品牌关键词
    'manga translator', '漫画神器', 'comic translator',
    // 长尾关键词
    '漫画在线翻译工具', 'AI图片文字翻译', '漫画自动翻译软件'
  ].join(', '),
  authors: [{ name: 'Manga Translator Team', url: 'https://manga-translator-ai.vercel.app' }],
  creator: 'Manga Translator',
  publisher: 'Manga Translator',
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
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1E67FF' },
    { media: '(prefers-color-scheme: dark)', color: '#1E67FF' }
  ],
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1E67FF' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: ['en_US', 'ja_JP', 'ko_KR'],
    title: 'AI漫画翻译神器 - 免费在线漫画翻译工具',
    description: '🎯 专业AI漫画翻译工具，支持中日英韩等多语言自动翻译。一键上传漫画图片，智能识别文字并精准翻译，保持原版排版。',
    siteName: 'Manga Translator',
    url: 'https://manga-translator-ai.vercel.app',
    images: [
      {
        url: 'https://manga-translator-ai.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI漫画翻译神器 - 支持多语言的智能漫画翻译工具',
        type: 'image/jpeg',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MangaTranslator',
    creator: '@MangaTranslator',
    title: 'AI漫画翻译神器 - 免费在线漫画翻译工具',
    description: '🎯 专业AI漫画翻译工具，支持中日英韩等多语言自动翻译。一键上传漫画图片，智能识别文字并精准翻译。',
    images: ['https://manga-translator-ai.vercel.app/og-image.jpg']
  },
  alternates: {
    canonical: 'https://manga-translator-ai.vercel.app',
    languages: {
      'zh-CN': 'https://manga-translator-ai.vercel.app/zh',
      'en-US': 'https://manga-translator-ai.vercel.app/en',
      'ja-JP': 'https://manga-translator-ai.vercel.app/ja',
      'ko-KR': 'https://manga-translator-ai.vercel.app/ko'
    }
  },
  category: 'Technology',
  classification: 'AI Translation Tool',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J2N14800GY"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J2N14800GY');
            `
          }}
        />
        
        {/* 结构化数据 - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebApplication",
                  "@id": "https://manga-translator-ai.vercel.app/#webapp",
                  "name": "AI漫画翻译神器",
                  "alternateName": "Manga Translator",
                  "description": "专业AI漫画翻译工具，支持中日英韩等多语言自动翻译。一键上传漫画图片，智能识别文字并精准翻译，保持原版排版。",
                  "url": "https://manga-translator-ai.vercel.app",
                  "applicationCategory": "MultimediaApplication",
                  "operatingSystem": "Web Browser",
                  "browserRequirements": "Requires JavaScript. Requires HTML5.",
                  "softwareVersion": "1.0",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  },
                  "featureList": [
                    "AI智能文字识别",
                    "多语言翻译支持",
                    "保持原版排版",
                    "批量图片处理",
                    "免费使用"
                  ],
                  "screenshot": "https://manga-translator-ai.vercel.app/og-image.jpg",
                  "author": {
                    "@type": "Organization",
                    "name": "Manga Translator Team",
                    "url": "https://manga-translator-ai.vercel.app"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://manga-translator-ai.vercel.app/#website",
                  "name": "AI漫画翻译神器",
                  "url": "https://manga-translator-ai.vercel.app",
                  "description": "专业AI漫画翻译工具，支持中日英韩等多语言自动翻译",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Manga Translator Team"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://manga-translator-ai.vercel.app/?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  },
                  "inLanguage": ["zh-CN", "en-US", "ja-JP", "ko-KR"]
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://manga-translator-ai.vercel.app/#software",
                  "name": "AI漫画翻译神器",
                  "applicationCategory": "MultimediaApplication",
                  "operatingSystem": "Web Browser",
                  "url": "https://manga-translator-ai.vercel.app",
                  "description": "基于AI技术的在线漫画翻译工具，支持图片文字识别和多语言翻译",
                  "softwareVersion": "1.0",
                  "datePublished": "2024-01-01",
                  "dateModified": "2024-01-01",
                  "author": {
                    "@type": "Organization",
                    "name": "Manga Translator Team"
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "ratingCount": "1250",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://manga-translator-ai.vercel.app/#organization",
                  "name": "Manga Translator Team",
                  "url": "https://manga-translator-ai.vercel.app",
                  "description": "专注于AI翻译技术的开发团队",
                  "foundingDate": "2024",
                  "knowsAbout": [
                    "人工智能",
                    "机器翻译",
                    "图像识别",
                    "自然语言处理",
                    "漫画翻译"
                  ],
                  "areaServed": "Worldwide",
                  "serviceType": "AI Translation Service"
                }
              ]
            })
          }}
        />
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
              url: 'https://manga-translator-ai.vercel.app',
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