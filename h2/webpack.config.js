const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const fs = require('fs')

const entry = {}
const ls = fs.readdirSync('./mid')
ls.forEach(f => {
  entry[f] = `./mid/${f}`
})
console.error(entry)

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]',
    libraryTarget: 'umd'
  },
  externals: {
    'define': 'define', 
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts']
  },
  module: {
      rules: [
        {
          test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 20480
            }
          }
        },
          {
              test: /\.jsx?$/,
              use: [
                  'babel-loader'
              ]
          },
          {
              test: /\.(less|css)$/,
              use: [
                {
                  loader: 'style-loader'
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true
                  }
                },
                {
                  loader: 'less-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ]
            }
      ]
  },
  plugins:[
    // new BundleAnalyzerPlugin()
  ],
}