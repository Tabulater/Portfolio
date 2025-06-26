/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Compression
  compress: true,
  
  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          spline: {
            test: /[\\/]node_modules[\\/]@splinetool[\\/]/,
            name: 'spline',
            chunks: 'all',
            priority: 10,
          },
        },
      };
    }
    
    return config;
  },
}

module.exports = nextConfig 