import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    localPatterns: [
      {
        pathname: '/images/logo.jpg',
      },
      {
        pathname: '/images/gallary/**',
        search: '**',
      },
      {
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
