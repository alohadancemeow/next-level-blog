/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
}

module.exports = withContentlayer({
  nextConfig
})