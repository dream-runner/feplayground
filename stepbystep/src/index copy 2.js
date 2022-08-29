/*
 * @Author: your name
 * @Date: 2020-09-14 16:29:58
 * @LastEditTime: 2021-07-15 20:42:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ssr-demo/Users/yangjz0/workspace/webpacktest/stepbystep/src/index.js
 */
// import 'regenerator-runtime/runtime'
import { cnt, cntUpdate } from './cntModule'
import './modeuleImportCnt'

// cntUpdate(10)
// cnt = 22
if (cnt) {
}
console.error(cnt)
cnt = 100
document.body.innerHTML = cnt

if (process.env.CONDEF) {
  require('./conditionImport')
}
const genFn = function* () {
  yield 10000000
  yield 20000000
}
var proxy = new Proxy({}, {
  get: function(target, property) {
    return 35;
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});

proxy.time // 35
proxy.name // 35
proxy.title // 35
function imdFn (arr = []) {
  if (arr.includes(0)) alert()
  for (const iter of [1, 2, 3]) {
    console.log(iter)
  }
  // for (let iter of genFn()){
  var iter = genFn()
  var step
  do {
    step = iter.next()
    console.log(step.value)
  } while (!step.done)
}
imdFn()
new Promise(r => r())