var configuration = {
  distDir: 'build',  
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { 
      buffer: require.resolve('buffer/'),
      fs: false,
      process: require.resolve('process/'),
      util: require.resolve('util/'),
      assert: require.resolve('assert/'),
    };
    return config;
  },  
  basePath: process.env.NEXT_PUBLIC__BASE_PATH,
  async redirects() {
    return [
    ]
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",    
  },
}

const withPWA = require("next-pwa");
configuration = withPWA(configuration);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === "true",    
})
configuration = withBundleAnalyzer(configuration)

module.exports = configuration