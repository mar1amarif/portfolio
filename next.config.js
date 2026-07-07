/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    dirs: ["app", "components", "hooks", "constants", "lib"],
  },
};

module.exports = nextConfig;
