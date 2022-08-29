import moduleB from './moduleB'
import { cirRe } from './index'
// alert(cirRe)
// const moduleB = require('./moduleB')

// console.log(moduleB.name)
// module.exports = {
//   async function f () {
//     await Promise.resolve()
//   }
// export default {
//   name: 'moduleA',
//   mb: Object.assign({}, moduleB)
// }
/*
this is module a
*/
export const unusedVar = 'UNUSED_VAR'
export default {
  async fn () {
    console.log('before await1')
    await new Promise(r => {
      setTimeout(r, 3000)
    })
    console.log('before await2')
    console.log('before await3')
    await new Promise(r => r())
    debugger
    console.log('????????///?')
  }
}