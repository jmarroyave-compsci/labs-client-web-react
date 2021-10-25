import constants from 'app/config/constants'

const links = {
  home : { url : constants.APP.BASE_PATH},
  footer: {
    site : [
      { name: "log", url : `${constants.APP.BASE_PATH}/about/project/log`},
      { name: "sitemap", url : `${constants.APP.BASE_PATH}/about/project/sitemap`}
    ],
    "other projects": [
      { "name": "stackoverflow", "url" : `https://jmarroyave-apps-stackoverflow.herokuapp.com` },
      { "name": "mlb", "url" : `https://jmarroyave-apps-mlb.herokuapp.com` },
    ],
  },
}

export default links