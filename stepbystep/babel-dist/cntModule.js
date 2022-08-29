"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cntUpdate = cntUpdate;
exports.default = exports.cnt = void 0;

/*
 * @Author: your name
 * @Date: 2021-05-11 23:05:42
 * @LastEditTime: 2021-10-22 15:18:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ssr-demo/Users/yangjz0/workspace/webpacktest/stepbystep/src/cntModule.js
 */
var cnt = 0;
exports.cnt = cnt;

function cntUpdate(val, model) {
  var _model$getCache, _model$getCache$call, _model$getCache$call$;

  exports.cnt = cnt = val;
  var useless = model === null || model === void 0 ? void 0 : (_model$getCache = model.getCache) === null || _model$getCache === void 0 ? void 0 : (_model$getCache$call = _model$getCache.call(model, 'vm')) === null || _model$getCache$call === void 0 ? void 0 : (_model$getCache$call$ = _model$getCache$call.getCache) === null || _model$getCache$call$ === void 0 ? void 0 : _model$getCache$call$.call(_model$getCache$call, 'referType');
}

var cntM = 1000;
var _default = cntM;
exports.default = _default;