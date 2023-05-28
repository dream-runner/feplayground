/*
 * @Author: your name
 * @Date: 2020-09-27 10:55:25
 * @LastEditTime: 2021-11-16 13:42:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ssr-demo/Users/yangjz0/workspace/webpacktest/stepbystep/babel.config.js
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        // // useBuiltIns: 'entry',
        corejs: '3'
      }
    ],
    '@babel/preset-react',
    '@babel/preset-stage-3',
    '@babel/preset-typescript'
  ],
  plugins: [
    // "transform-es2015-modules-commonjs",
      ['@babel/plugin-transform-runtime', {
      }]
    // [
    //   {
    //     corejs: '3'
    //   }
    // ]
    // 'transform-es2015-modules-commonjs'
  ]
}
