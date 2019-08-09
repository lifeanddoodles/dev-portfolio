const path = require('path');
const externals = require('webpack-node-externals');

module.exports = {
  entry: './src/server/index.js',

  target: 'node',

  externals: [externals()],

  output: {
    path: path.resolve(__dirname, 'server-build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};
