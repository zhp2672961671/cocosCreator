'use strict'
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const cdn = {
  js: [
    'https://lib.baomitu.com/vue/2.6.11/vue.min.js',
    'https://lib.baomitu.com/vue-router/3.2.0/vue-router.min.js',
    'https://lib.baomitu.com/vuex/3.5.1/vuex.min.js',
    'https://lib.baomitu.com/axios/0.20.0/axios.min.js'
  ]
}

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './', // 部署应用包时的基本 url
  outputDir: 'dist', // build 构建文件目录
  assetsDir: 'static', // 静态资源目录
  lintOnSave: process.env.NODE_ENV === 'production', // 仅在开发模式下进行 eslint 检测代码
  productionSourceMap: false, // 禁用生产环境的 source map
  runtimeCompiler: true, // 是否运行时组件中使用 template
  devServer: {
    host: '0.0.0.0', // 默认是 localhost,可不配置
    port: 8000, // 配置端口号
    open: true, // 启动是否打开浏览器
    overlay: { // 是否在浏览器上显示编译的 errors 或 warnings
      warnings: false,
      errors: true
    },
    // resolve: {
    //   // resolve是webpack的内置选项，顾名思义，决定要做的事情，也就是说当使用 import "jquery"，该如何去执行这件事
    //   // 情就是resolve配置项要做的，import jQuery from "./additional/dist/js/jquery" 这样会很麻烦，可以起个别名简化操作
    //   extensions: ['.js', '.vue', '.json'], // 省略扩展名，也就是说.js,.vue,.json文件导入可以省略后缀名，这会覆盖默认的配置，所以要省略扩展名在这里一定要写上
    //   alias: {
    //     // 后面的$符号指精确匹配，也就是说只能使用 import vuejs from "vue" 这样的方式导入vue.esm.js文件，不能在后面跟上 vue/vue.js
    //     'vue$': 'vue/dist/vue.esm.js',
    //     // resolve('src') 其实在这里就是项目根目录中的src目录，使用 import somejs from "@/some.js" 就可以导入指定文件，是不是很高大上
    //     '@': resolve('src')
    //   }
    // },
    proxy: {
      '/': { // 被代理的接口名
        target: process.env.VUE_APP_BASE_API, // url地址
        changeOrigin: true, // 发送请求头中 host 是否设置成 target
        pathRewrite: { // 重定向
          '^/': ''
        }
      }
    }
  },
  configureWebpack(config) {
    // production configuration Gzip compression
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new CompressionWebpackPlugin({
          // 正则匹配需要压缩的文件后缀
          // test: /\.(js|css|svg|woff|ttf|json|html)$/,
          test: /\.(js|css|json|html)$/,
          // 大于10kb的会压缩
          threshold: 10240,
          // 是否删除原文件
          deleteOriginalAssets: false
        })
      )
      Object.assign(config, {
        resolve: {
          extensions: ['.js', '.vue', '.json'],
          alias: {
            '@': resolve('src')
          }
        },
        externals: {
          'vue': 'Vue',
          'vue-router': 'VueRouter',
          'vuex': 'Vuex',
          'axios': 'axios'
        }
      })
    }
  },
  chainWebpack(config) {
    config
      .when(process.env.NODE_ENV === 'production',
        config => {
          config.plugin('html').tap(args => { // dynamic import CDN
            args[0].cdn = cdn
            return args
          })
          config.optimization.splitChunks({
            chunks: 'all',
            cacheGroups: {
              libs: {
                name: 'chunk-libs',
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: 'initial'
              },
              elementUI: {
                name: 'chunk-elementUI',
                priority: 20,
                test: /[\\/]node_modules[\\/]_?element-ui(.*)/
              },
              commons: {
                name: 'chunk_commons',
                test: resolve('src/components'),
                minChunks: 3,
                priority: 5,
                reuseExistingChunk: true
              }
            }
          })
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
