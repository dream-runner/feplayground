/*
 * @Author: your name
 * @Date: 2021-05-11 23:05:42
 * @LastEditTime: 2021-11-11 23:25:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ssr-demo/Users/yangjz0/workspace/webpacktest/stepbystep/src/cntModule.js
 */
import random from './chunks/chunkA'
let cnt = 0
function cntUpdate (val, model) {
  cnt = val
  const useless = model?.getCache?.('vm')?.getCache?.('referType')
}
export {
  cnt,
  cntUpdate
}
let cntM = 1000
export default  cntM
