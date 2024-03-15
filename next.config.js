const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
  unstable_staticImage: true,
  defaultShowCopyCode: true,
  readingTime: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cleanDistDir: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
        port: '',
      },
      {
        protocol: 'https',
        hostname: "blogs.nvidia.com",
        port: '',
      }
    ]
  }
};

module.exports = withNextra(nextConfig);
