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

/*
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/movies/tt0454876': { page: '/movies/[movie]', query: { movie : "tt0454876" } },
    }
  },  


*/