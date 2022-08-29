// import { dft, unusedVar } from './moduleA'
// import 'core-js'
// import 'core-js/features/array/from';
// import 'regenerator-runtime/runtime'
export const cirRe = 'cirRe'
console.log('typeof module.fn', typeof moduleA.fn())

class A {
  fn () {
    () => console.log('aaaaa', this)
  }
}

// Promise.resolve().then(() => {}).finally(() =>{})
const genFn = function* () {
  yield 90000000
}
// const asyfn = async function () {
//   await new Promise(resolve => {
//     setTimeout(() => resolve(), 500)
//   })
// }
console.log(Array.from(new Set([1, 2, 3, 1, 2])))
// console.log(unusedVar)