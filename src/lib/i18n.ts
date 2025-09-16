// 多语言配置和翻译文本
export const locales = ['zh', 'en', 'ja'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

// 语言显示名称
export const localeNames: Record<Locale, string> = {
  zh: '中文',
  en: 'English',
  ja: '日本語'
};

// 翻译文本
export const translations = {
  zh: {
    // 通用
    title: '漫画翻译器 - AI智能翻译漫画',
    description: '使用AI技术快速翻译漫画，支持多种语言，保持原有排版和风格',
    
    // 导航
    nav: {
      home: '首页',
      features: '功能',
      demo: '演示',
      about: '关于',
      cta: '立即体验'
    },
    // Hero 区域
    hero: {
      title: '智能漫画翻译',
      subtitle: '让全世界的漫画都能被理解',
      description: '使用最先进的AI技术，一键翻译漫画内容，保持原有排版和艺术风格',
      cta: '立即开始翻译',
      demo: '查看演示',
      secondary_cta: '联系我们',
    },
    // 上传区域
    upload: {
      title: '上传漫画图片',
      description: '支持 JPG、PNG、WebP 格式，最大 10MB',
      drag_text: '拖拽图片到此处，或点击选择文件',
      select_file: '选择文件',
      start_translate: '开始翻译',
      processing: '处理中...',
      success: '上传成功！'
    },
    // 语言选择
    language: {
      source: '源语言',
      target: '目标语言',
      auto_detect: '自动检测',
      chinese: '中文',
      english: '英文',
      japanese: '日文'
    },
    // 功能亮点
    features: {
      title: '强大功能',
      subtitle: '为漫画翻译量身定制的 AI 解决方案',
      ai_translation: {
        title: 'AI 智能翻译',
        description: '基于深度学习的翻译引擎，理解漫画语境，提供准确翻译'
      },
      multi_language: {
        title: '多语言支持',
        description: '支持中文、英文、日文等主流语言的双向翻译'
      },
      batch_process: {
        title: '批量处理',
        description: '一次上传多张图片，批量翻译，提高工作效率'
      },
      text_preserve: {
        title: '版式保持',
        description: '保持原有排版和字体样式，翻译后效果自然'
      }
    },
    // 使用流程
    process: {
      title: '使用流程',
      subtitle: '三步完成漫画翻译',
      step1: {
        title: '上传图片',
        description: '选择需要翻译的漫画页面'
      },
      step2: {
        title: '选择语言',
        description: '设置源语言和目标语言'
      },
      step3: {
        title: '获取结果',
        description: '下载翻译完成的漫画'
      }
    },
    // FAQ
    faq: {
      title: '常见问题',
      q1: {
        question: '支持哪些图片格式？',
        answer: '支持 JPG、PNG、WebP 等常见图片格式，单张图片最大 10MB。'
      },
      q2: {
        question: '翻译准确度如何？',
        answer: '基于先进的 AI 翻译技术，针对漫画场景优化，翻译准确度可达 90% 以上。'
      },
      q3: {
        question: '是否保护用户隐私？',
        answer: '我们严格保护用户隐私，上传的图片仅用于翻译处理，不会存储或用于其他用途。'
      }
    },
    // 页脚
    footer: {
      description: '基于先进 AI 技术的漫画翻译工具，让漫画跨越语言障碍',
      privacy: '隐私政策',
      terms: '使用条款',
      copyright: '© 2024 漫画翻译神器. 保留所有权利.'
    },
    // 通用
    common: {
      loading: '加载中...',
      error: '出错了',
      retry: '重试',
      close: '关闭',
      confirm: '确认',
      cancel: '取消'
    }
  },
  en: {
    // 通用
    title: 'Manga Translator - AI-Powered Comic Translation',
    description: 'Translate manga quickly with AI technology, supporting multiple languages while preserving original layout and style',
    
    // 导航
    nav: {
      home: 'Home',
      features: 'Features',
      demo: 'Demo',
      about: 'About',
      cta: 'Try Now'
    },
    // Hero section
    hero: {
      title: 'Smart Manga Translation',
      subtitle: 'Making manga accessible worldwide',
      description: 'Using cutting-edge AI technology to translate manga content with one click, preserving original layout and artistic style',
      cta: 'Start Translating',
      demo: 'View Demo',
      secondary_cta: 'Contact Us',
    },
    // Upload area
    upload: {
      title: 'Upload Manga Images',
      description: 'Supports JPG, PNG, WebP formats, max 10MB',
      drag_text: 'Drag images here, or click to select files',
      select_file: 'Select Files',
      start_translate: 'Start Translation',
      processing: 'Processing...',
      success: 'Upload successful!'
    },
    // Language selection
    language: {
      source: 'Source Language',
      target: 'Target Language',
      auto_detect: 'Auto Detect',
      chinese: 'Chinese',
      english: 'English',
      japanese: 'Japanese'
    },
    // Features
    features: {
      title: 'Powerful Features',
      subtitle: 'AI solution tailored for manga translation',
      ai_translation: {
        title: 'AI Smart Translation',
        description: 'Deep learning-based translation engine that understands manga context'
      },
      multi_language: {
        title: 'Multi-language Support',
        description: 'Bidirectional translation between Chinese, English, Japanese and more'
      },
      batch_process: {
        title: 'Batch Processing',
        description: 'Upload multiple images at once for efficient batch translation'
      },
      text_preserve: {
        title: 'Layout Preservation',
        description: 'Maintains original layout and font styles for natural results'
      }
    },
    // Process
    process: {
      title: 'How It Works',
      subtitle: 'Complete manga translation in three steps',
      step1: {
        title: 'Upload Images',
        description: 'Select manga pages to translate'
      },
      step2: {
        title: 'Choose Languages',
        description: 'Set source and target languages'
      },
      step3: {
        title: 'Get Results',
        description: 'Download translated manga'
      }
    },
    // FAQ
    faq: {
      title: 'FAQ',
      q1: {
        question: 'What image formats are supported?',
        answer: 'Supports JPG, PNG, WebP and other common formats, max 10MB per image.'
      },
      q2: {
        question: 'How accurate is the translation?',
        answer: 'Based on advanced AI technology optimized for manga, achieving 90%+ accuracy.'
      },
      q3: {
        question: 'Is user privacy protected?',
        answer: 'We strictly protect user privacy. Uploaded images are only used for translation and not stored.'
      }
    },
    // Footer
    footer: {
      description: 'Advanced AI-powered manga translation tool that breaks language barriers',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: '© 2025 Manga Translator. All rights reserved.'
    },
    // Common
    common: {
      loading: 'Loading...',
      error: 'Error occurred',
      retry: 'Retry',
      close: 'Close',
      confirm: 'Confirm',
      cancel: 'Cancel'
    }
  },
  ja: {
    // 通用
    title: 'マンガ翻訳ツール - AI搭載コミック翻訳',
    description: 'AI技術を使用してマンガを素早く翻訳、複数言語をサポートし、元のレイアウトとスタイルを保持',
    
    // 导航
    nav: {
      home: 'ホーム',
      features: '機能',
      demo: 'デモ',
      about: 'について',
      cta: '今すぐ試す'
    },
    // ヒーローセクション
    hero: {
      title: 'スマートマンガ翻訳',
      subtitle: '世界中のマンガを理解可能に',
      description: '最先端のAI技術を使用して、ワンクリックでマンガコンテンツを翻訳し、元のレイアウトと芸術的スタイルを保持',
      cta: '翻訳を開始',
      demo: 'デモを見る',
      secondary_cta: 'お問い合わせ'
    },
    // アップロードエリア
    upload: {
      title: 'マンガ画像をアップロード',
      description: 'JPG、PNG、WebP形式対応、最大10MB',
      drag_text: '画像をここにドラッグするか、クリックしてファイルを選択',
      select_file: 'ファイルを選択',
      start_translate: '翻訳開始',
      processing: '処理中...',
      success: 'アップロード成功！'
    },
    // 言語選択
    language: {
      source: '元言語',
      target: '対象言語',
      auto_detect: '自動検出',
      chinese: '中国語',
      english: '英語',
      japanese: '日本語'
    },
    // 機能
    features: {
      title: '強力な機能',
      subtitle: 'マンガ翻訳に特化したAIソリューション',
      ai_translation: {
        title: 'AIスマート翻訳',
        description: 'マンガの文脈を理解する深層学習ベースの翻訳エンジン'
      },
      multi_language: {
        title: '多言語サポート',
        description: '中国語、英語、日本語などの主要言語間での双方向翻訳'
      },
      batch_process: {
        title: 'バッチ処理',
        description: '複数画像の一括アップロードで効率的な翻訳'
      },
      text_preserve: {
        title: 'レイアウト保持',
        description: '元のレイアウトとフォントスタイルを維持し、自然な仕上がり'
      }
    },
    // プロセス
    process: {
      title: '使用方法',
      subtitle: '3ステップでマンガ翻訳完了',
      step1: {
        title: '画像アップロード',
        description: '翻訳したいマンガページを選択'
      },
      step2: {
        title: '言語選択',
        description: '元言語と対象言語を設定'
      },
      step3: {
        title: '結果取得',
        description: '翻訳完了したマンガをダウンロード'
      }
    },
    // FAQ
    faq: {
      title: 'よくある質問',
      q1: {
        question: 'サポートされている画像形式は？',
        answer: 'JPG、PNG、WebPなどの一般的な形式をサポート、1枚最大10MB。'
      },
      q2: {
        question: '翻訳の精度はどの程度？',
        answer: 'マンガシーンに最適化された先進的なAI翻訳技術により、90%以上の精度を実現。'
      },
      q3: {
        question: 'ユーザープライバシーは保護されますか？',
        answer: 'ユーザープライバシーを厳格に保護。アップロードされた画像は翻訳処理のみに使用され、保存されません。'
      }
    },
    // フッター
    footer: {
      description: '先進的なAI技術を活用したマンガ翻訳ツール、言語の壁を越える',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      copyright: '© 2024 マンガ翻訳ツール. 全著作権所有.'
    },
    // 共通
    common: {
      loading: '読み込み中...',
      error: 'エラーが発生しました',
      retry: '再試行',
      close: '閉じる',
      confirm: '確認',
      cancel: 'キャンセル'
    }
  }
} as const;

// 获取翻译文本的辅助函数
export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

// 检查是否为有效的语言代码
export function isValidLocale(locale: string): locale is Locale {
  return [...locales].indexOf(locale as Locale) !== -1;
}