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
      '@babel/env',
      {
        targets: {
          chrome: '20'
        },
        useBuiltIns: 'usage',
        // corejs: '2'
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    // "transform-es2015-modules-commonjs",
      // ['@babel/plugin-transform-runtime', {
      // }]
    // [
    //   {
    //     corejs: '3'
    //   }
    // ]
    // 'transform-es2015-modules-commonjs'
  ]
}

// const presets = [
//   [
//     "@babel/env",
//     {
//       targets: {
//         edge: "17",
//         firefox: "60",
//         chrome: "67",
//         safari: "11.1",
//       },
//       useBuiltIns: "usage",
//       "corejs": "3.6.4",
//     },
//   ],
// ];

// module.exports = { presets };