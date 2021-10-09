module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },  
  basePath: process.env.BASE_PATH,
  async redirects() {
    return [
      {
        source: '/movies/stories/awards',
        destination: '/stories/awards',
        permanent: true,
      },
      {
        source: '/people/stories/awards',
        destination: '/stories/awards',
        permanent: true,
      },
      {
        source: '/tv/stories/awards',
        destination: '/stories/awards',
        permanent: true,
      },
      {
        source: '/movies/stories/remakes',
        destination: '/stories/remakes',
        permanent: true,
      },
      {
        source: '/tv/stories/remakes',
        destination: '/stories/remakes',
        permanent: true,
      },
    ]
  },
}