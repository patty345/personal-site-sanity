/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    distDir: 'build',
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        
      },
    ],
  },
}

module.exports = nextConfig
