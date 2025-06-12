/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1) drop the trailing slash
  basePath: '/carbon-tutorial-nextjs',
  // 2) prefix all assets with the same path
  assetPrefix: '/carbon-tutorial-nextjs',

  // static-export mode
  output: 'export',
  reactStrictMode: true,

  // next 13+: puts both build & export into ./docs
  distDir: 'docs',

  // disable next/image optimization for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
