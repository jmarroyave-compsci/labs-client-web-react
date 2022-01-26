module.exports = {
  "env": {
    "dev": {
      "presets": ["next/babel"],
      "plugins": [["styled-components", { "ssr": true }]],
    },
    "production-local": {
      "presets": ["next/babel"],
      "plugins": [["styled-components", { "ssr": true }]],
    },
    "test" : {
      "presets": ["@babel/preset-env", "@babel/preset-react"],
      "plugins": [["styled-components", { "ssr": true }]],
      }
  }
}