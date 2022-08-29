const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESBuildPlugin = require('esbuild-webpack-plugin').default

module.exports = {
  // mode: 'production',
  // // devtool: '#source-map',
  // devtool: false,
  // entry: {
  //   index: path.resolve(__dirname, './src/index.ts'),
  //   // vendors: path.resolve(__dirname, './src/moduleA.js')
  // },
  // output: {
  //   path: __dirname + '/dist'
  // },
  // resolve:{
  //   alias: {
  //     alis: path.resolve(__dirname, './src/alis')
  //   }
  // },
  // module: {
  //   rules:[
  //     {
  //       test: /\.ts$/,
  //       loader: 'ts-loader'
  //     },
  //     {
  //       test: /\.js$/,
  //       exclude: [
  //         // path.resolve(__dirname, './node_modules'),
  //         path.resolve(__dirname, './src/exclude')
  //       ],
  //       include: [
  //         path.resolve(__dirname, './src')
  //       ],
  //       use: [
  //         {
  //           loader: './extend/cusloader.js'
  //         },
  //         {
  //           loader: 'babel-loader',
  //         //   // loader: 'eslint-loader',
  //         //   // loader: './extend/cusloader.js',
  //         //   options: {
  //         //     // cache: true
  //         //   }
  //         }
  //       ]
  //     }
  //   ]
  // },
  plugins: [
    // new HtmlWebpackPlugin({
    //   minify: false,
    //   template: './index.html'
    // })
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require(`./src/dll/manifest.json`)
    // })
  ],
  optimization: {
    minimize: false,
  //   // minimizer: [
  //   //   new ESBuildPlugin({
  //   //     target: 'es5'
  //   //   })
  //   // ]
  }
}