const path = require('path')
var dirPath = path.dirname(__filename)
var outputName = dirPath.split('/')
outputName = outputName[outputName.length - 1]
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: outputName,
  assetsDir: 'static',
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  filenameHashing: false,
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // 自定义webpack配置
  configureWebpack: config => {
    config.optimization.minimizer[0].options.terserOptions.compress.drop_console = process.env.NODE_ENV === 'production'
    config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = process.env.NODE_ENV === 'production'
    config.resolve = {
      ...config.resolve,
      alias: {
        '@': resolve('src'),
      },
    }
    config.externals = {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
    }
    config.output.library = `${outputName}-[name]`
    config.output.libraryTarget = 'umd'
    config.output.jsonpFunction = `webpackJsonp_${outputName}`
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hot: true,
    disableHostCheck: true,
    port: 7101,
    overlay: {
      warnings: false,
      errors: true,
    }
  },
}
