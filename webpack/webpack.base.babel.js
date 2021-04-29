const HtmlWebPackPlugin = require("html-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const path = require('path');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin()

const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const BUILD_FOLDER_PATH =
  process.env.BUILD_FOLDER_PATH ||
  process.env.npm_config_BUILD_FOLDER_PATH ||
  'build'

const PUBLIC_PATH =
  process.env.PUBLIC_PATH || process.env.npm_config_PUBLIC_PATH || '/'


const wrapper = process.env.MEASURE ? smp.wrap : x => x

const makeWebpackConfig = options =>
  wrapper({
    mode: options.mode,
    entry: options.entry, //path.resolve(__dirname, './src/index.js'),
    output: Object.assign(
      {
        // Compile into js/build.js
        path: path.resolve(process.cwd(), BUILD_FOLDER_PATH),
        publicPath: PUBLIC_PATH,
      },
      options.output,
    ),
      // output: {
      //     publicPath: '/',
      //     filename: 'static/bundle.[hash].js',
      //     chunkFilename: 'static/chunk.[chunkhash].js',
      //     path: path.resolve(__dirname, 'dist'),
      // },
    optimization: options.optimization,
    module: {
          rules: [
              {
                  test: /\.jsx?$/, ///\.js$|jsx/,
                  exclude: [/node_modules/,/config.js/],
                  include: /src/,
                  use: [
                    {
                        loader: "babel-loader",
                        options: options.babelQuery,
                    }
                  ].concat(options.jsLoaders || [])
              },
              {
                  test: /\.html$/,
                  use:  {
                    loader: "html-loader",
                  }
              },
              {
                  test: /\.css$/i,
                  use: ['style-loader', 'css-loader'],
              },
              {
                  test: /\.(png|jpg)$/,
                  loader: 'url-loader',
                  // options: {
                  //     name: '[name].[ext]',
                  //     useRelativePath: true,
                  //     outputPath: './src/images',
                  // },
              }
          ]
      },
      devServer: {
          historyApiFallback: true,
          open: false,
          hot: true,
          contentBase: [
              path.join(__dirname, 'public'),
              path.join(__dirname, 'dist'),
          ],
          port: 8181
      },
      plugins: options.plugins
        .concat([
          // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
          // inside your code for any environment checks; Terser will automatically
          // drop any unreachable code.
          new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            PUBLIC_PATH: '/',
          }),
          // new CopyPlugin([
          //   {
          //     from: 'config.js',
          //     to: 'config.js',
          //     context: 'src/',
          //   },
          // ]),
          process.env.ANALYZER === 'yes' && new BundleAnalyzerPlugin(),
        ])
        .filter(e => e),
    resolve: {
      modules: ['node_modules', 'src'],
      extensions: ['.js', '.jsx', '.react.js'],
      mainFields: ['browser', 'jsnext:main', 'main'],
    },
    devtool: options.devtool,
    target: 'web', // Make web variables accessible to webpack, e.g. window
    performance: options.performance || {},
  });

module.exports = makeWebpackConfig
