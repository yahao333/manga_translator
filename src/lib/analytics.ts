// 事件埋点追踪系统

// 声明全局 gtag 函数类型
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// 事件类型定义
export interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp?: number;
  userId?: string;
  sessionId?: string;
}

// 预定义事件类型
export const EVENTS = {
  // 页面事件
  PAGE_VIEW: 'page_view',
  PAGE_LEAVE: 'page_leave',
  
  // 用户交互事件
  BUTTON_CLICK: 'button_click',
  LINK_CLICK: 'link_click',
  
  // 上传相关事件
  UPLOAD_START: 'upload_start',
  UPLOAD_SUCCESS: 'upload_success',
  UPLOAD_ERROR: 'upload_error',
  FILE_SELECT: 'file_select',
  DRAG_DROP: 'drag_drop',
  UPLOAD_COUNT: 'upload_count',
  
  // 翻译相关事件
  TRANSLATION_START: 'translation_start',
  TRANSLATION_SUCCESS: 'translation_success',
  TRANSLATION_ERROR: 'translation_error',
  LANGUAGE_CHANGE: 'language_change',
  
  // 功能使用事件
  FEATURE_VIEW: 'feature_view',
  FAQ_EXPAND: 'faq_expand',
  DEMO_VIEW: 'demo_view',
  
  // 转化事件
  CTA_CLICK: 'cta_click',
  DOWNLOAD_START: 'download_start',
  DOWNLOAD_SUCCESS: 'download_success'
} as const;

// 生成会话ID
function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// 获取或创建会话ID
function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  
  let sessionId = sessionStorage.getItem('manga_translator_session_id');
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem('manga_translator_session_id', sessionId);
  }
  return sessionId;
}

// 获取用户ID（如果有的话）
function getUserId(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  return localStorage.getItem('manga_translator_user_id') || undefined;
}

// 获取页面信息
function getPageInfo() {
  if (typeof window === 'undefined') return {};
  
  return {
    url: window.location.href,
    pathname: window.location.pathname,
    search: window.location.search,
    referrer: document.referrer,
    title: document.title,
    language: navigator.language,
    userAgent: navigator.userAgent,
    screenResolution: `${screen.width}x${screen.height}`,
    viewportSize: `${window.innerWidth}x${window.innerHeight}`
  };
}

// 发送事件到分析服务
async function sendEvent(event: AnalyticsEvent): Promise<void> {
  try {
    // 发送到 Google Analytics
    if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
      gtag('event', event.event, {
        event_category: event.properties?.category || 'general',
        event_label: event.properties?.label || '',
        value: event.properties?.value || 0,
        custom_parameters: {
          ...event.properties,
          user_id: event.userId,
          session_id: event.sessionId,
          timestamp: event.timestamp
        }
      });
    }
    
    // 开发环境下输出到控制台
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      console.log('📊 Analytics Event:', event);
    }
    
    // 这里可以添加其他分析服务的发送逻辑
    // await fetch('/api/analytics', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(event)
    // });
    
  } catch (error) {
    console.error('Analytics error:', error);
  }
}

// 主要的追踪函数
export function track(eventName: string, properties?: Record<string, any>): void {
  const event: AnalyticsEvent = {
    event: eventName,
    properties: {
      ...getPageInfo(),
      ...properties
    },
    timestamp: Date.now(),
    userId: getUserId(),
    sessionId: getSessionId()
  };
  
  sendEvent(event);
}

// 页面浏览追踪
export function trackPageView(pageName?: string): void {
  track(EVENTS.PAGE_VIEW, {
    page_name: pageName || document.title
  });
}

// 按钮点击追踪
export function trackButtonClick(buttonName: string, location?: string): void {
  track(EVENTS.BUTTON_CLICK, {
    button_name: buttonName,
    location: location
  });
}

// 上传事件追踪
export function trackUpload(action: 'start' | 'success' | 'error', details?: Record<string, any>): void {
  const eventMap = {
    start: EVENTS.UPLOAD_START,
    success: EVENTS.UPLOAD_SUCCESS,
    error: EVENTS.UPLOAD_ERROR
  };
  
  track(eventMap[action], details);
}

// 翻译事件追踪
export function trackTranslation(action: 'start' | 'success' | 'error', details?: Record<string, any>): void {
  const eventMap = {
    start: EVENTS.TRANSLATION_START,
    success: EVENTS.TRANSLATION_SUCCESS,
    error: EVENTS.TRANSLATION_ERROR
  };
  
  track(eventMap[action], details);
}

// 语言切换追踪
export function trackLanguageChange(fromLang: string, toLang: string): void {
  track(EVENTS.LANGUAGE_CHANGE, {
    from_language: fromLang,
    to_language: toLang
  });
}

// CTA 点击追踪
export function trackCTAClick(ctaName: string, location: string): void {
  track(EVENTS.CTA_CLICK, {
    cta_name: ctaName,
    location: location
  });
}

// 功能查看追踪
export function trackFeatureView(featureName: string): void {
  track(EVENTS.FEATURE_VIEW, {
    feature_name: featureName
  });
}

// FAQ 展开追踪
export function trackFAQExpand(question: string): void {
  track(EVENTS.FAQ_EXPAND, {
    question: question
  });
}

// 追踪图片数量统计
export function trackImageCount(count: number, section: string = 'upload'): void {
  track(EVENTS.UPLOAD_COUNT, {
    image_count: count,
    section,
    timestamp: new Date().toISOString()
  });
}

// 初始化分析系统
export function initAnalytics(): void {
  if (typeof window === 'undefined') return;
  
  // 页面加载时自动追踪页面浏览
  trackPageView();
  
  // 监听页面离开事件
  window.addEventListener('beforeunload', () => {
    track(EVENTS.PAGE_LEAVE, {
      time_on_page: Date.now() - (window as any).pageLoadTime
    });
  });
  
  // 记录页面加载时间
  (window as any).pageLoadTime = Date.now();
  
  // 监听错误事件
  window.addEventListener('error', (event) => {
    track('javascript_error', {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno
    });
  });
}