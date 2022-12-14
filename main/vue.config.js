module.exports = {
  //路径前缀
  publicPath: '/',
  lintOnSave: true,
  outputDir: 'dist',
  filenameHashing: false,
  assetsDir: 'project/main',
  productionSourceMap: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production'){
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  chainWebpack: (config) => {
    //忽略的打包文件
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
    })
    // const entry = config.entry('app')
    // entry.add('babel-polyfill').end()
    // entry.add('classlist-polyfill').end()
    // entry.add('@/mock').end()
  },
  css: {
    extract: { ignoreOrder: true }
  },
  // //开发模式反向代理配置，生产模式请使用Nginx部署并配置反向代理
  devServer: {
    port: 8000,
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    // },
    proxy: {
      '/api': {
        //本地服务接口地址
        target: 'http://192.168.124.98:8000',
        //远程演示服务地址,可用于直接启动项目
        //target: 'https://saber.bladex.vip/api',
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
