module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          "chrome": "58",
          "ie": "11"
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins:[
    '@babel/plugin-transform-block-scoping'
  ]
}