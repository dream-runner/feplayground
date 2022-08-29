
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  "plugins": [
    ["import", { "libraryName": "arc-ui", "libraryDirectory": "lib", "style": false}]
  ]
}
