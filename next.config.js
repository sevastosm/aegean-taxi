/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  experimental: {
    // appDir: true,
    typedRoutes: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "carkystorage.blob.core.windows.net",
      "carkystoragetest.blob.core.windows.net",
    ],
  },
  poweredByHeader: false,
  trailingSlash: true,
  // transpilePackages: ['@acme/ui', 'lodash-es']
};

module.exports = nextConfig;

// hosting to firebase ssr instuctions
//https://firebase.google.com/docs/hosting/frameworks/nextjs

