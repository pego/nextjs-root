/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
     {
      "source": "/spring-summer-2023-fashion-show",
      "destination": "https://nextjs-subfolder.vercel.app/spring-summer-2023-fashion-show",
      },
      {
      "source": "/spring-summer-2023-fashion-show/:path*",
      "destination": "https://nextjs-subfolder.vercel.app/spring-summer-2023-fashion-show/:path*",
      },
    ]
  },
}

module.exports = nextConfig
