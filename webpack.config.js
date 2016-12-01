const path = require('path');

const buildDirectory = './example_client';

module.exports = {
  entry: [
    './dependency_injection_example.js',
  ],
  output: {
    path: path.resolve(buildDirectory),
    filename: 'dependency_injection_example.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
