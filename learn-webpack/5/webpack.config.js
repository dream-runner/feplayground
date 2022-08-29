const path = require('path')

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './dist')
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      // {
      //   test: /.jsx?$/,
      //   use: 'babel-loader'
      // }
    ]
  }
}