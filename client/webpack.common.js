const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.resolve(__dirname, 'src');
const targetPath = path.resolve(__dirname, '../server/static/');
const resourcesPath = path.resolve(__dirname, 'resources');

module.exports = {
  entry: {
    app: `${sourcePath}/index.jsx`
  },
  output: {
    filename: 'bundle.[chunkhash].js',
    path: targetPath
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${resourcesPath}/template.html`,
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
