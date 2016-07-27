const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const OfflinePlugin = require('offline-plugin')

module.exports = {
  entry: {
    app: "./src/main.jsx",
    vendor: [
      "react",
      "react-dom"
    ]
  },
  output: {
    path: './dist',
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  externals: {
    "jquery": "jQuery"
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./src')
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    host: "0.0.0.0",
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      hash: false
    }),
    new webpack.optimize.CommonsChunkPlugin(
      /* chunkName= */"vendor",
      /* filename= */ "[name].bundle.js"
    ),
    new OfflinePlugin()
  ]
}
