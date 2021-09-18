const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'polyfill': 'babel-polyfill',          
    'app': [
      './src/project/index'
    ],
  },
  output: {
    filename: './scripts/[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/entertainment-client-web-react/app/',
  },  
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
      {test: /\.(sa|sc|c)ss$/i, use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']},
      {test: /\.(png|jpg|gif|svg|ico)$/i, use: { loader: 'file-loader', options: {name: '[name].[ext]',outputPath: 'img/'}}},
      {test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,use: [{loader: 'file-loader',options: {name: '[name].[ext]',outputPath: 'fonts/'}}]},
    ],  
  },
  resolve: {
    symlinks : false,
    modules: [
      path.resolve('./src'),      
      path.resolve('./src/project'),      
      path.resolve('./src/framework'),      
      'node_modules'
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      linkType: "text/css",
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: './static/index.tpl.html',
      filename: 'index.html',
      base: '/entertainment-client-web-react/app/',
    }),
    new CopyWebpackPlugin({
        patterns: [
          { from: 'static',
            globOptions: {
                ignore: [
                    '**/index.tpl.html'
                ]
            }          
          }
        ]
    }),
  ],
}
