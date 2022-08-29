/*
 * @Author: your name
 * @Date: 2020-09-24 00:03:14
 * @LastEditTime: 2021-07-25 22:51:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /iform_fe/Users/yangjz0/workspace/webpacktest/stepbystep/webpack.dll.config.js
 */
const path = require('path')
const webpack = require('webpack');


const libraryName = 'vendorLibrary';

const config = {
  entry: {
    vendor: [
      path.resolve('./src/dll/dll1.js')
    ]
  },
  output: {
    path: path.join(__dirname, './dist/dll'),
    filename: 'vendor.js',
    library: libraryName,
  },
  module: {
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, './dist/dll', 'manifest.json'),
      name: libraryName,
      context: __dirname,
    })
  ],
  devtool: 'source-map',
  optimization: {
    minimize: false
  }
};

module.exports = config
