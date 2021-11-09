module.exports = {
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
}



