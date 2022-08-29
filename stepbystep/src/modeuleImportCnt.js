/*
 * @Author: your name
 * @Date: 2021-05-11 23:10:50
 * @LastEditTime: 2021-05-11 23:11:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ssr-demo/Users/yangjz0/workspace/webpacktest/stepbystep/src/modeuleImportCnt.js
 */
import { cnt, cntUpdate } from './cntModule'
document.addEventListener('click', e => {
  alert(cnt)
})