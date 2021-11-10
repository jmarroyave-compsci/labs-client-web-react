import config from 'app/config'
import { getLast } from 'data/stories';

export const links = {
  home : { url : config.APP.BASE_PATH},
  footer: {
    site : [
      { name: "about", url : `/about`},
      { name: "data sources", url : `/about/data`},
      { name: "project's log", url : `/about/project/log`},
      { name: "project's evolution", url : `/about/timeline`},
      { name: "sitemap", url : `/about/project/sitemap`}
    ],
    stories : getLast(5).map( s => { return { name: s.title.toLowerCase(), url: s.url }}),
    "other projects": [
      { "name": "stackoverflow", "url" : `https://jmarroyave-apps-stackoverflow.herokuapp.com` },
      { "name": "mlb", "url" : `https://jmarroyave-apps-mlb.herokuapp.com` },
    ],
  },
}

