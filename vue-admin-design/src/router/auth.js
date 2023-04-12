/*
 * @Author: 章红平
 * @Date: 2023-04-04 13:59:28
 * @LastEditors: 章红平
 * @LastEditTime: 2023-04-06 16:27:44
 * @FilePath: \vue-elementUI\vue-admin-design\src\router\auth.js
 * @Description: 描述
 */
import router from './index'
import { getToken } from '../utils/cookie'

// 白名单列表
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  console.log("to.path==============",to.path,next)
  if (getToken()) {
    // 已登录且要跳转的是登录页
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    // 在免登录白名单，直接进入
    if (whiteList.includes(to.path)) {
      next()
    } else {
      // 否则重定向到登录页
      next(`/login?redirect=${to.fullPath}`)
    }
  }
})
