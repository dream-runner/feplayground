var protoFn = function () {
  console.log('proto fn involked')
}
var ProtoCons = function () {
  this.protoVar = 'PROTO_VAR'
  this.protoFn = protoFn
}
var Cons = function () {
  this.consVar = 'CONS_VAR'
  this.consFn = function () {
    console.log('cons fn involked')
  }
}
var protoIns = new ProtoCons()
Cons.prototype = protoIns
var ins = new Cons()

ins.protoFn === protoFn // true
ins.__proto__ === protoIns // true
ins.constructor === ProtoCons

ins.__proto__ = null
ins.protoFn === undefined
ins.constructor === undefined

ins.__proto__ = protoIns
ins.protoFn === undefined
ins.constructor === undefined

Object.setPrototypeOf(ins, protoIns)
ins.protoFn === protoFn
ins.__proto__ === protoIns
ins.constructor === ProtoCons

ins.__proto__ = null
ins.constructor === ProtoCons
ins.__proto__ === null
ins.protoFn === protoFn

Cons.__proto__ === Function.prototype



