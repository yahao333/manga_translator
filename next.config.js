/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静态导出配置，适合 Vercel 静态部署
  trailingSlash: true, // 为静态导出添加尾部斜杠
  images: {
    unoptimized: true // 静态导出时禁用图片优化
  },
  // 静态导出模式下不支持 i18n 配置，改用客户端路由实现多语言
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig