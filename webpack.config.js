const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const autoprefixer = require('autoprefixer');
const MiniCssExtract = require('mini-css-extract-plugin');

const common = {
  rules: [
    { test: /\.(js)$/, use: 'babel-loader' },
    {
      test: /\.css$/,
      use: [
        MiniCssExtract.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: [autoprefixer()],
          },
        },
      ],
    },
  ],
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
    new MiniCssExtract({ filename: 'styles.css' }),
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
    new MiniCssExtract({ filename: 'styles.css' }),
  ],
};

module.exports = [clientConfig, serverConfig];
