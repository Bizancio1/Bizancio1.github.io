const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')


module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'bundle.js',
    path: '/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      { test: /\.css$/, loader: 'css-loader' },
      { test: /\.css$/, loader: 'style-loader' },
      { test: /\.s(a|c)ss$/, loader: 'style-loader' },
      { test: /\.s(a|c)ss$/, loader: 'css-loader' },
      { test: /\.s(a|c)ss$/, loader: 'sass-loader' }
    ]
  },
  devServer: {
    static: 'src',
    hot: true,
    open: true,
    port: 8000,/*
    watchContentBase: true*/
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new Dotenv()
  ]
}