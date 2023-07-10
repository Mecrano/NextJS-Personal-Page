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
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
