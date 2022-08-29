/*
 * @Author: your name
 * @Date: 2022-01-11 09:10:32
 * @LastEditTime: 2022-02-14 16:08:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yonbuilder-mdf-extend/Users/yangjz0/workspace/phpweb/script-order/headimport.js
 */
const deps = [
  // './1.js',
  './2.js',
  './3.js'
]
deps.forEach(dep => {
  const script = document.createElement('script')
  script.src = dep
  // script.async = false
  document.head.appendChild(script)
})