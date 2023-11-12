/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/fhmzr1bwmr422t16kkolk9ufqp3yie.html',
        destination: '/facebook-business-verification/code'
      }
    ]
  }
}

module.exports = nextConfig
