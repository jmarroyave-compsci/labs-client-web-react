module.exports = {
  basePath: '/tv-movies-client-web-react/app',
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
    ]
  },
}