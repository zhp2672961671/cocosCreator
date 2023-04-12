/*
 * @Author: 章红平
 * @Date: 2023-04-04 13:59:28
 * @LastEditors: 章红平
 * @LastEditTime: 2023-04-06 16:35:34
 * @FilePath: \vue-elementUI\vue-admin-design\src\main.js
 * @Description: 描述
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './router/auth'

import './assets/icon-fonts/iconfont.css'
import './assets/icon-fonts/iconfont'
// 引入样式
import 'element-ui/lib/theme-chalk/index.css'
// ElementUI 全世界最流行的Vue UI框架
import ElementUI from 'element-ui'
// app.use()安装一个插件。插件可以是一个带 install() 方法的对象，亦或直接是一个将被用作 install() 方法的函数。插件选项 (app.use() 的第二个参数) 将会传递给插件的 install() 方法。
// ElementUI
Vue.use(ElementUI, { size: 'small' })
// 阻止启动生产消息
Vue.config.productionTip = false
// 挂载应用.mount() 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
