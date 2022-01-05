function f1(arg) {
  f2(arg)
}
function f2 (arg) {
  f3(arg)
}
function f3 (arg) {
  try {
    JSON.parse(arg)
  } catch (e) {}
}
const functions = [
  // new function 执行函数调用
  function executeViaStr () {
    let fn = `try {} catch (e) {}`.repeat(1000000 + ((Math.random(1) * 10) | 0))
    new Function(fn)()
  },
  // JSON.parse
  function parseViaJson () {
    window.objFromJson = JSON.parse(jsonStr)
    return JSON.parse(jsonStr)
  },
  // new Function
  function parseViaNewFunc () {
    return new Function(`return (${jsonStr})`)()
  },
  function stringify () {
    // window.objFromJson.ver = + new Date()
    const str = JSON.stringify(jsonStr)
    postMessage(str, '*')
  },
  function involkeWithParam () {
    f1(jsonStr)
  }
]

const btns = document.querySelectorAll('button')
btns.forEach((btn, index) => {
  btn.onclick = functions[index]
})
!!function () {
  window.addEventListener('message', (event) => {
    let data = event.data;
    if (!data) {
      return;
    }
    try {
      if (typeof data === 'string') {
        data = JSON.parse(data);
        if (data.deletePageNidArr && Array.isArray(data.deletePageNidArr) && data.deletePageNidArr.length > 0) {
          this.deletePageNidArr = data.deletePageNidArr;
        }
      }
    } catch (e) {
      console.error("addEventListener message",e);
    }
  })
}()