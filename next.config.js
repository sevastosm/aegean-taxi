/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  trailingSlash: true,
  // transpilePackages: ['@acme/ui', 'lodash-es']
};

module.exports = nextConfig;
