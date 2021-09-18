const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  core: {
    builder: "webpack5",
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-apollo-client",
  ],
  webpackFinal: (config) => {
    config.module.rules.push(
      {test: /\.scss$/i, use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']}
    );
    config.plugins.push(
      new MiniCssExtractPlugin({ filename: '[name].css' })
    )
    config.resolve.symlinks = false;
    config.resolve.modules.push(path.resolve('./src'));
    config.resolve.modules.push(path.resolve('./src/project'));
    config.resolve.modules.push(path.resolve('./src/framework'));
    
    return config;
  },    
}