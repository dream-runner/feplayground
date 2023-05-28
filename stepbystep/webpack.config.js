/*
 * @Author: your name
 * @Date: 2021-01-26 15:14:43
 * @LastEditTime: 2021-11-12 00:00:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /iweb_cloudform/Users/yangjz0/workspace/webpacktest/stepbystep/webpack.config.js
 */
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESBuildPlugin = require('esbuild-webpack-plugin').default

module.exports = {
  mode: 'production',
  // mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 8088,
    hot: true
  },
  entry: {
    index: path.resolve(__dirname, './src1/index.js'),
    // index: path.resolve(__dirname, './src/index.tsx'),
    // vendors: path.resolve(__dirname, './src/moduleA.js')
  },
  output: {
    path: __dirname + '/dist'
  },
  resolve:{
    extensions: [".ts", ".tsx", ".js"]
    // alias: {
    //   alis: path.resolve(__dirname, './src/alis')
    // }
  },
  module: {
    rules:[
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: [
          path.resolve(__dirname, './src')
        ]
      },
      {
        test: /\.svg$/,
        loader: 'file-loader'
      },
      {
        test: /\.js$/,
        exclude: [
          // path.resolve(__dirname, './node_modules'),
          path.resolve(__dirname, './src/exclude')
        ],
        include: [
          path.resolve(__dirname, './src')
        ],
        use: [
          {
            loader: './extend/cusloader.js'
          },
          {
            loader: 'babel-loader',
          //   // loader: 'eslint-loader',
          //   // loader: './extend/cusloader.js',
          //   options: {
          //     // cache: true
          //   }
          }
        ]
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   minify: false,
    //   template: './index.html'
    // }),
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require(`./dist/dll/manifest.json`)
    // }),
    new AddAssetHtmlWebpackPlugin({ filepath: path.resolve(__dirname, 'dist/dll/vendor.js') })
  ],
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        // commons: {
        //   name: 'commons',
        //   chunks: 'initial',
        //   // minChunks: 2
        // },
        chun: {
          test: /[\\/]chunks[\\/]/,
          name: 'chun',
          chunks: 'all'
        }
      }
    },
    minimize: false,
  //   // minimizer: [
  //   //   new ESBuildPlugin({
  //   //     target: 'es5'
  //   //   })
  //   // ]
  }
}