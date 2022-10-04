const htmlWebpack = require('html-webpack-plugin');
const miniCssExtract = require("mini-css-extract-plugin");
const copyPLugin = require("copy-webpack-plugin");
const cssMinimizer = require("css-minimizer-webpack-plugin");
const terser = require("terser-webpack-plugin");

module.exports = {
  mode: 'production',
  output: {
    clean: true,
    filename: 'main.[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false
        }
      },
      {
        test: /\.css$/,
        exclude: /styles.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /styles.css$/,
        use: [ miniCssExtract.loader, 'css-loader' ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new cssMinimizer(),
      new terser(),
    ]
  },
  plugins: [
    new htmlWebpack({
      title: 'My Webpack App',
      //filename: 'index.html',
      template: './src/index.html'
    }),
    new miniCssExtract({
      filename: '[name].[fullhash].css',
      ignoreOrder: false
    }),
    new copyPLugin({
      patterns: [
        {from: './src/assets/', to: 'assets/'}
      ]
    })
  ],
}