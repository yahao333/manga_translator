'use client';

import { useState, useEffect } from 'react';
import { trackButtonClick } from '@/lib/analytics';
import { type Locale } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  translations: any;
}

export default function Navbar({ locale, onLocaleChange, translations: t }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', label: t.nav.home, href: '#home' },
    { key: 'features', label: t.nav.features, href: '#features' },
    { key: 'demo', label: t.nav.demo, href: '#demo' },
    { key: 'about', label: t.nav.about, href: '#about' }
  ];

  const handleNavClick = (item: string, href: string) => {
    trackButtonClick(`nav_${item}`, 'navbar');
    
    // 平滑滚动到目标区域
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    setIsMobileMenuOpen(false);
  };

  const handleCTAClick = () => {
    trackButtonClick('nav_cta', 'navbar');
    const uploadSection = document.querySelector('#upload');
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <span className="text-xl font-bold gradient-text">Manga Translator</span>
          </div>

          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key, item.href)}
                className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* 右侧操作区 */}
          <div className="flex items-center space-x-4">
            {/* 语言切换器 */}
            <LanguageSwitcher 
              currentLocale={locale}
              onLocaleChange={onLocaleChange}
              className="hidden md:block"
            />
            
            {/* CTA 按钮 */}
            <button 
              onClick={handleCTAClick}
              className="btn-primary hidden md:inline-block"
            >
              {t.nav.cta}
            </button>

            {/* 移动端菜单按钮 */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
              aria-label="打开菜单"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-slide-up">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key, item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              
              {/* 移动端语言切换 */}
              <div className="px-4 py-2">
                <LanguageSwitcher 
                  currentLocale={locale}
                  onLocaleChange={onLocaleChange}
                />
              </div>
              
              {/* 移动端 CTA */}
              <div className="px-4 py-2">
                <button 
                  onClick={handleCTAClick}
                  className="btn-primary w-full"
                >
                  {t.nav.cta}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}