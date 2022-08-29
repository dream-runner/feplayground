const arcui = require('antd-mobile')
const fs = require('fs')

Object.keys(arcui).forEach(key => {
  fs.writeFile(`./mid/${key}.js`, `
    import { ${key} as _${key} } from 'antd-mobile'
    export const ${key} = _${key}
  `, (err) => {console.log(err)})
})