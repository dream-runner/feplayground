/*
 * @Author: your name
 * @Date: 2022-01-21 10:09:28
 * @LastEditTime: 2022-01-21 17:12:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yonbuilder-mdf-extend/Users/yangjz0/workspace/phpweb/performance/network.js
 */
const limit = 3000
let tsStart = + new Date()
while (true) {
  if ((+new Date() - tsStart) > limit) {
    break
  }
}
console.error('log at last line')