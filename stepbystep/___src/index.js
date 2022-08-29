import * as huawei from './moduleA'
import a  from 'a'
import exclude from './exclude'
// import include from './include'

console.log('?????????', [].includes('1'), a(), (() => {Object.assign({}, {})})())
console.log('.......', exclude())
// console.log('.......', include())