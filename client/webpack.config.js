const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: `${path.join(__dirname)}/dist`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    watchOptions: {
      aggregateTimeout: 500,
      poll: 1000,
      ignored: /node_modules/
    },
    proxy: { '/api': { target: 'http://[::1]:3030', secure: false } }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html'
    })
  ]
};
