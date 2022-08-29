"use strict";

var _cntModule = require("./cntModule");

require("./modeuleImportCnt");

/*
 * @Author: your name
 * @Date: 2020-09-14 16:29:58
 * @LastEditTime: 2021-07-15 20:42:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ssr-demo/Users/yangjz0/workspace/webpacktest/stepbystep/src/index.js
 */
// import 'regenerator-runtime/runtime'
// cntUpdate(10)
// cnt = 22
if (_cntModule.cnt) {}

console.error(_cntModule.cnt);
_cntModule.cnt = (100, function () {
  throw new Error('"' + "cnt" + '" is read-only.');
}());
document.body.innerHTML = _cntModule.cnt;

if (process.env.CONDEF) {
  require('./conditionImport');
}

var genFn = /*#__PURE__*/regeneratorRuntime.mark(function genFn() {
  return regeneratorRuntime.wrap(function genFn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 10000000;

        case 2:
          _context.next = 4;
          return 20000000;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, genFn);
});
var proxy = new Proxy({}, {
  get: function get(target, property) {
    return 35;
  },
  set: function set(target, key, value, receiver) {
    console.log("setting ".concat(key, "!"));
    return Reflect.set(target, key, value, receiver);
  }
});
proxy.time; // 35

proxy.name; // 35

proxy.title; // 35

function imdFn() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if (arr.includes(0)) alert();

  for (var _i = 0, _arr = [1, 2, 3]; _i < _arr.length; _i++) {
    var _iter = _arr[_i];
    console.log(_iter);
  } // for (let iter of genFn()){


  var iter = genFn();
  var step;

  do {
    step = iter.next();
    console.log(step.value);
  } while (!step.done);
}

imdFn();
new Promise(function (r) {
  return r();
});