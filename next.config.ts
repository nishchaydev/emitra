import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/terms',
        destination: '/terms-of-service',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'gym.(?<domain>.*)' }],
          destination: '/gymmitra/:path*',
        },
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'school.(?<domain>.*)' }],
          destination: '/schoolmitra/:path*',
        },
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'flat.(?<domain>.*)' }],
          destination: '/flatmitra/:path*',
        },
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'medi.(?<domain>.*)' }],
          destination: '/medimitra/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
