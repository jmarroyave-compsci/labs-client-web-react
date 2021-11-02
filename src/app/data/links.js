import config from 'app/config'

const links = {
  home : { url : config.APP.BASE_PATH},
  footer: {
    site : [
      { name: "log", url : `${config.APP.BASE_PATH}/about/project/log`},
      { name: "sitemap", url : `${config.APP.BASE_PATH}/about/project/sitemap`}
    ],
    "other projects": [
      { "name": "stackoverflow", "url" : `https://jmarroyave-apps-stackoverflow.herokuapp.com` },
      { "name": "mlb", "url" : `https://jmarroyave-apps-mlb.herokuapp.com` },
    ],
  },
}

export default links