/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const dotenv = require('dotenv')

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  console.log(config.env, config.env.LOCAL)
  const CONFIG_PATH = `${"./.env.production"}${(config.env.LOCAL) ? ".local" : ""}`
  console.log(CONFIG_PATH)
  const conf = dotenv.config({path: CONFIG_PATH});
  
  config.env.SITE_URL = process.env.SITE_URL
  config.env.SERVER_URL = process.env.NEXT_PUBLIC__SERVER
  config.env.BASE_URL = config.baseUrl
  config.env.BASE_PATH = process.env.NEXT_PUBLIC__BASE_PATH

  //console.log("conf", conf, config.env)
  
  return config  
}
