<!--
 * @Author: 章红平
 * @Date: 2023-04-04 13:59:27
 * @LastEditors: 章红平
 * @LastEditTime: 2023-04-06 09:23:52
 * @FilePath: \vue-elementUI\vue-admin-design\src\App.vue
 * @Description: 描述
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<!-- Less是css预编译语言的一种，基于JS进行开发，在Node中进行编译。所以使用时不需要安装其他语言 -->
<style lang="less">
@import "assets/less/index.less";
@import "assets/less/reset";
</style>
