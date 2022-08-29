/*
 * @Author: your name
 * @Date: 2021-01-18 19:04:40
 * @LastEditTime: 2021-08-17 20:14:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /iform_fe/Users/yangjz0/workspace/webpacktest/stepbystep/typescript/index.ts
 */
// const fn = async function (val: String):Number {
// const fn = async (val: String) : Promise <Number> => {
//   new Promise((resolve: (value: unknown) => void) => {
//     setTimeout(resolve, 500)
//   })
//   console.log(Array.from([]))
//   return 100
// }
// fn('')
import '../style/index.css'
// import _ from 'lodash'
import 'handwritingboard/dist/index.css'
import 'handwritingboard/dist/ybiconfontw.svg'
import handwritingboard from 'handwritingboard'

new handwritingboard()
const fn = function (a: any) {
  let s = 'sss'
  s = void
  console.log(s)
  // if (a.location) alert()
}
const names = ["Alice", "Bob", "Eve"]
names.forEach((s) => {
  console.log(typeof s === 'string' && s.toUpperCase())
})
// interface user {
//   name: String,
//   age: Number
// }
// function overload (arg: number) {
//   console.log(arg.toFixed(2))
// }
// function overload (arg: string) {
//   console.log(arg.toLowerCase())
// }
// function overload (arg: any) {}
// overload(100)
import viaRequire = require('../src/viaRequire')
console.log(viaRequire)


export default fn