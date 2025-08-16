import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Performance optimizations
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Experimental optimizations
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize chunks for better caching
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
            common: {
              name: 'common',
              minChunks: 2,
              priority: -10,
              reuseExistingChunk: true,
            },
          },
        },
      }
    }
    
    return config
  },

  // Enable bundle analyzer in development
  ...(process.env.ANALYZE === 'true' && {
    env: {
      ANALYZE: 'true',
    },
  }),
}

export default nextConfig
