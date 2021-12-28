module.exports = {
  "env": {
    "dev": {
      "presets": ["next/babel"]
    },
    "production-local": {
      "presets": ["next/babel"]
    },
    "test" : {
      "presets": ["@babel/preset-env", "@babel/preset-react"],
      }
  }
}