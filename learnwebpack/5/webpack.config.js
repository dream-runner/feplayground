const path = require('path')
module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['js', 'jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  optimization: {
    minimize: false
  }
}