// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // Bỏ qua lỗi ESLint trong quá trình build
      },
    output: 'export',
    images: {
        unoptimized: true,
    },
  }
   
  module.exports = nextConfig