/*
 * @Author: your name
 * @Date: 2020-09-14 16:29:58
 * @LastEditTime: 2021-11-11 23:36:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /iform_fe/Users/yangjz0/workspace/webpacktest/stepbystep/src/index.js
 */
import dll from './dll/dll1'
console.log(dll)
// var dll = require('./dll/dll1')
// import './noModule'
// async function f() {
//   await Promise.resolve(0)
// }
// f()
// Array.from([])

console.error(dll)
class superClass {}
class sub extends superClass {
}

import cntM, { cnt } from './cntModule'
import _ from 'lodash'
// window.onload = function () {
//   import('./lazyImport')
// }
// console.error(++cntM, ++cnt)

// window.addEventListener('click', function() {
//   require('./asyncReq.js')
// })

import random  from './chunks/chunkA'