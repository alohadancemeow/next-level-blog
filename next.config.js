/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    // serverActions: true,
    mdxRs: true,
  },
  images: {
    domains: ['www.notion.so', 'images.unsplash.com', 's3.us-west-2.amazonaws.com'],
    unoptimized: true
  }
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)