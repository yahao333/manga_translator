/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静态导出配置，适合 Vercel 静态部署
  trailingSlash: true, // 为静态导出添加尾部斜杠
  images: {
    unoptimized: true, // 静态导出时禁用图片优化
    formats: ['image/webp', 'image/avif'], // 支持现代图片格式
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // 静态导出模式下不支持 i18n 配置，改用客户端路由实现多语言
  experimental: {
    appDir: true,
    optimizeCss: true, // 启用CSS优化
    scrollRestoration: true, // 启用滚动位置恢复
  },
  // 编译器优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // 生产环境移除console
  },
  // 性能优化
  poweredByHeader: false, // 移除X-Powered-By头
  compress: true, // 启用gzip压缩
  // 安全头配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400'
          }
        ]
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig