// (function () {
  var mainScript = document.createElement('script');
  var vendorsScript = document.createElement('script');
  mainScript.async = false
  mainScript.defer = true
  vendorsScript.async = false
  vendorsScript.defer = true
  mainScript.src = 'https://yb.diwork.com/iform_web/flow-comp/main.17674a0d2d0188866b24.js';
  vendorsScript.src = 'https://yb.diwork.com/iform_web/flow-comp/vendors.6fffbbed4cd3b2dcb8c4.js';

  document.body.appendChild(vendorsScript)
  document.body.appendChild(mainScript)
  // var vendorsCss = document.createElement('link');
  // vendorsCss.setAttribute('rel', 'stylesheet');
  // vendorsCss.setAttribute('type', 'text/css');
  // vendorsCss.setAttribute('href', 'https://yb.diwork.com/iform_web/flow-comp/vendors.eb635091c9614f581ee3.css');
  // document.head.appendChild(vendorsCss);
  // var mainCss = document.createElement('link');
  // mainCss.setAttribute('rel', 'stylesheet');
  // mainCss.setAttribute('type', 'text/css');
  // mainCss.setAttribute('href', 'https://yb.diwork.com/iform_web/flow-comp/main.3f055c24eebb519398a5.css');
  // document.head.appendChild(mainCss);
  // var flowCompOptions = null;
  // var proxyMap = {};
  // var scripts2Load = 2;
  // var availableFns = ['showFlowBox', 'renderBPMHistory', 'renderBPMBtns'];

  // function onDomCompleted() {
  //   document.removeEventListener('DOMContentLoaded', onDomCompleted);
  //   window.removeEventListener('load', onDomCompleted);
  //   loadJs();
  // }

  // function onScriptsLoaded() {
  //   if (scripts2Load) return;
  //   Object.keys(proxyMap).forEach(function (k) {
  //     var proxyItem = proxyMap[k];
  //     proxyItem.aliveIns = window.flowComp(proxyItem.options);
  //     proxyItem.hangingFns.forEach(function (obj) {
  //       proxyItem.aliveIns[obj.fn].call(proxyItem.aliveIns, obj.args);
  //     })
  //   })
  // }

  // function loadJs() {
  //   document.querySelector('body').appendChild(vendorsScript);
  //   document.querySelector('body').appendChild(mainScript);
  //   vendorsScript.onload = mainScript.onload = function () {
  //     scripts2Load--;
  //     onScriptsLoaded();
  //   }
  // }
  // if (document.readyState !== 'loading') {
  //   loadJs();
  // } else {
  //   document.addEventListener('DOMContentLoaded', onDomCompleted);
  //   window.addEventListener('load', onDomCompleted);
  // }
  // window.flowComp = function (options) {
  //   var businessKey = options.businessKey;
  //   if (!businessKey) return;
  //   flowCompOptions = options;
  //   var proxyObj = {
  //     options: options,
  //     hangingFns: []
  //   }
  //   Object.keys(availableFns).forEach(function (k) {
  //     var fnName = availableFns[k];
  //     proxyObj[fnName] = function (args) {
  //       if (proxyObj.aliveIns) {
  //         return proxyObj.aliveIns.call(proxyObj.aliveIns, args)
  //       }
  //       proxyObj.hangingFns.push({
  //         fn: fnName,
  //         args: args
  //       })
  //     }
  //   })
  //   proxyMap[businessKey] = proxyObj;
  //   return proxyObj
  // }
  // window.flowCompParams = {
  //   host: 'https://yb.diwork.com'
  // }
// })()