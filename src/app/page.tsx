'use client';

import { useState } from 'react';
import { trackPageView, trackCTAClick, trackButtonClick } from '@/lib/analytics';
import { translations, defaultLocale, type Locale } from '@/lib/i18n';
import Navbar from '@/components/Navbar';

// Hero 组件
function HeroSection({ locale, t }: { locale: Locale; t: any }) {
  const handleCTAClick = (ctaType: 'primary' | 'secondary') => {
    trackCTAClick(ctaType === 'primary' ? t.hero.cta : t.hero.secondary_cta, 'hero');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 背景渐变 */}
      <div className="absolute inset-0 gradient-bg opacity-5"></div>
      
      {/* 装饰性元素 */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* 主标题 */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text">{t.hero.title}</span>
          </h1>
          
          {/* 副标题 */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t.hero.subtitle}
          </p>
          
          {/* 描述 */}
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {t.hero.description}
          </p>
          
          {/* CTA 按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button 
              className="btn-primary text-lg px-8 py-4"
              onClick={() => handleCTAClick('primary')}
            >
              {t.hero.cta}
            </button>
            <button 
              className="btn-secondary text-lg px-8 py-4"
              onClick={() => handleCTAClick('secondary')}
            >
              {t.hero.secondary_cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// 上传区域组件
function UploadSection({ locale, t }: { locale: Locale; t: any }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles(files);
    trackButtonClick('drag_drop', 'upload_section');
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);
      trackButtonClick('file_select', 'upload_section');
    }
  };

  return (
    <section id="upload" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.upload.title}</h2>
          <p className="text-gray-600">{t.upload.description}</p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div 
            className={`upload-area ${isDragOver ? 'dragover' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4">{t.upload.drag_text}</p>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="btn-primary cursor-pointer inline-block">
                {t.upload.select_file}
              </label>
            </div>
          </div>
          
          {selectedFiles.length > 0 && (
            <div className="mt-6">
              <h3 className="font-medium mb-3">已选择文件:</h3>
              <div className="space-y-2">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <span className="text-sm text-gray-600">{file.name}</span>
                    <span className="text-xs text-gray-400">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// 语言选择组件
function LanguageSection({ locale, t }: { locale: Locale; t: any }) {
  const [sourceLang, setSourceLang] = useState('auto');
  const [targetLang, setTargetLang] = useState('zh');

  const languages = [
    { code: 'auto', name: t.language.auto_detect },
    { code: 'zh', name: t.language.chinese },
    { code: 'en', name: t.language.english },
    { code: 'ja', name: t.language.japanese }
  ];

  return (
    <section id="demo" className="py-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t.language.source}
              </label>
              <select 
                value={sourceLang} 
                onChange={(e) => setSourceLang(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t.language.target}
              </label>
              <select 
                value={targetLang} 
                onChange={(e) => setTargetLang(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {languages.filter(lang => lang.code !== 'auto').map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.name}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="btn-primary px-8 py-3">
              开始翻译
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// 功能亮点组件
function FeaturesSection({ locale, t }: { locale: Locale; t: any }) {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: t.features.ai_translation.title,
      description: t.features.ai_translation.description
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: t.features.multi_language.title,
      description: t.features.multi_language.description
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: t.features.batch_process.title,
      description: t.features.batch_process.description
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: t.features.text_preserve.title,
      description: t.features.text_preserve.description
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.features.title}</h2>
          <p className="text-xl text-gray-600">{t.features.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 页脚组件
function Footer({ locale, t }: { locale: Locale; t: any }) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">Manga Translator</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              基于先进 AI 技术的漫画翻译工具，让漫画跨越语言障碍
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t.footer.terms}
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">{t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// 使用流程组件
function ProcessSection({ locale, t }: { locale: Locale; t: any }) {
  const steps = [
    {
      number: '01',
      title: t.process.step1.title,
      description: t.process.step1.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      )
    },
    {
      number: '02',
      title: t.process.step2.title,
      description: t.process.step2.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
    {
      number: '03',
      title: t.process.step3.title,
      description: t.process.step3.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.process.title}</h2>
          <p className="text-xl text-gray-600">{t.process.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* 连接线 */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-200 to-primary-300 transform translate-x-1/2 z-0"></div>
              )}
              
              <div className="relative z-10">
                {/* 步骤编号 */}
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                
                {/* 图标 */}
                <div className="w-12 h-12 mx-auto mb-4 text-primary-500">
                  {step.icon}
                </div>
                
                {/* 内容 */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ 组件
function FAQSection({ locale, t }: { locale: Locale; t: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t.faq.q1.question,
      answer: t.faq.q1.answer
    },
    {
      question: t.faq.q2.question,
      answer: t.faq.q2.answer
    },
    {
      question: t.faq.q3.question,
      answer: t.faq.q3.answer
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    if (openIndex !== index) {
      trackButtonClick('faq_expand', `faq_${index}`);
    }
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.faq.title}</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border border-gray-100 rounded-b-xl animate-slide-up">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 主页面组件
export default function HomePage() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const t = translations[locale];

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  return (
    <>
      <Navbar 
        locale={locale} 
        onLocaleChange={handleLocaleChange} 
        translations={t} 
      />
      <main className="min-h-screen">
        <HeroSection locale={locale} t={t} />
        <UploadSection locale={locale} t={t} />
        <LanguageSection locale={locale} t={t} />
        <FeaturesSection locale={locale} t={t} />
        <ProcessSection locale={locale} t={t} />
        <FAQSection locale={locale} t={t} />
        <Footer locale={locale} t={t} />
      </main>
    </>
  );
}