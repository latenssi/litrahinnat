const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var defaultConf = require('./webpack.config.js');

defaultConf.devServer = null;

defaultConf.devtool = null;

defaultConf.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
)

defaultConf.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    output: {
      comments: function(node, comment) {
        var text = comment.value;
        var type = comment.type;
        if (type == "comment2") {
          // multiline comment
          return /@copyright/i.test(text);
        }
      }
    }
  })
)

module.exports = defaultConf;
