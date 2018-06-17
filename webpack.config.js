const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const autoprefixer = require('autoprefixer');
const MiniCssExtract = require('mini-css-extract-plugin');

const common = {
  rules: [{ test: /\.(js)$/, use: 'babel-loader' }],
};

const clientConfig = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: common,
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
  ],
};

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
    publicPath: '/',
  },
  module: common,
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
  ],
};

module.exports = [clientConfig, serverConfig];
