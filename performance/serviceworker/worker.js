/*
 * @Author: your name
 * @Date: 2022-01-21 15:18:05
 * @LastEditTime: 2022-01-24 08:52:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yonbuilder-mdf-extend/Users/yangjz0/workspace/phpweb/performance/webwork/worker.js
 */
self.addEventListener('install', function(event) {
  console.error('>>', typeof document)
  self.skipWaiting()
  const cssCache = 'CSS_SW_CACHE'
  event.waitUntil(caches.open(cssCache).then(cache => {
    cache.addAll(['./index.css'])
  }))
  
})
//监听浏览器的所有fetch请求，对已经缓存的资源使用本地缓存回复
self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches.match(event.request)
          .then(function(response) {
              //该fetch请求已经缓存
              if (response) {
                  return response;
              }
              return fetch(event.request);
              }
          )
  );
});