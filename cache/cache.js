/*
 * @Author: your name
 * @Date: 2021-10-26 18:44:09
 * @LastEditTime: 2021-10-26 19:21:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /phpweb/cache/somejs.js
 */

// no-cache: 除非资源发生变化，一定会304（不会memorycache不会diskcache）
// no-store: 一直200（重新下载资源）
// max-age=0: 与no-cache等效
// must-revalidate: 不规律200、304、memorycache都会出现 ？？？
console.error('>>>>>>', 3)