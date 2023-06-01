/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '//',
        destination: '/',
        permanent: true,
      },
    ]
  },
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'es-CO'],
    defaultLocale: 'en-US',
  },
}

module.exports = nextConfig
