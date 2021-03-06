const CircularDependencyPlugin = require("circular-dependency-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require('path')

module.exports = require('./webpack.base.babel')({
  mode: 'development',
  babelQuery: {
    cacheDirectory: true,
  },
  // Add hot reloading in development
  entry: [
    require.resolve('react-app-polyfill/ie11'),
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'src/index.js'), // Start with js/app.js
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new HtmlWebpackPlugin({
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      template: 'src/index.html',
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: true, // show a warning when there is a circular dependency
    }),
  ],
  devtool: 'source-map',
  performance: {
    hints: false,
  },
  jsLoaders: process.env.EMIT_WARNINGS
    ? []
    : [
      {
        loader: 'eslint-loader',
      },
    ],
})
