const htmlWebpack = require('html-webpack-plugin');
const miniCssExtract = require("mini-css-extract-plugin");
const copyPLugin = require("copy-webpack-plugin");


module.exports = {
  mode: 'development',
  output: {
    clean: true
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
      }
    ]
  },
  optimization: {},
  plugins: [
    new htmlWebpack({
      title: 'My Webpack App',
      //filename: 'index.html',
      template: './src/index.html'
    }),
    new miniCssExtract({
      filename: '[name].css',
      ignoreOrder: false
    }),
    new copyPLugin({
      patterns: [
        {from: './src/assets/', to: 'assets/'}
      ]
    })
  ],
}