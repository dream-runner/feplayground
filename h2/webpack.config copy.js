const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const fs = require('fs')

const entry = {}
const travel = (path) => {
  const ls = fs.readdirSync(path)
  ls.forEach(f => {
    let pathInner = path
    pathInner += `/${f}`;
    if (f === 'index.js') {
        entry[pathInner] = pathInner
    } else if (fs.statSync(pathInner).isDirectory()) {
        travel(pathInner)
    }
  })
}
travel('./local-comp-lib')
module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry,
  output: {
    path: path.resolve(__dirname, './static'),
    filename: '[name]',
    // library: {
    //   type: 'amd'
    // }
  },
  externals: {
    'define': 'define', 
    react: 'React',
    'react-dom': 'ReactDOM',
    'arc-ui': 'window[\'arc-ui\']'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts']
  },
  module: {
      rules: [
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