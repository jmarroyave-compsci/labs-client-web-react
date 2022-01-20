const withPWA = require("next-pwa");

module.exports = withPWA({
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },  
  basePath: process.env.BASE_PATH,
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
});
