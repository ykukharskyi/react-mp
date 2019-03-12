const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3001
  }
});
