/*
 * @Author: your name
 * @Date: 2022-01-21 10:48:12
 * @LastEditTime: 2022-01-21 10:49:38
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yonbuilder-mdf-extend/Users/yangjz0/workspace/phpweb/performance/immutable/index.js
 */
const obj = JSON.parse(jsonStr)
const immutabledData = Immutable.fromJS(obj)
console.error(immutabledData)