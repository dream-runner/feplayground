"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cirRe = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// import { dft, unusedVar } from './moduleA'
// import 'core-js'
// import 'core-js/features/array/from';
// import 'regenerator-runtime/runtime'
var cirRe = 'cirRe';
exports.cirRe = cirRe;
console.log('typeof module.fn', _typeof(moduleA.fn()));

var A = /*#__PURE__*/function () {
  function A() {
    _classCallCheck(this, A);
  }

  _createClass(A, [{
    key: "fn",
    value: function fn() {
      var _this = this;

      (function () {
        return console.log('aaaaa', _this);
      });
    }
  }]);

  return A;
}(); // Promise.resolve().then(() => {}).finally(() =>{})


var genFn = /*#__PURE__*/regeneratorRuntime.mark(function genFn() {
  return regeneratorRuntime.wrap(function genFn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 90000000;

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, genFn);
}); // const asyfn = async function () {
//   await new Promise(resolve => {
//     setTimeout(() => resolve(), 500)
//   })
// }

console.log(Array.from(new Set([1, 2, 3, 1, 2]))); // console.log(unusedVar)