<!--
 * @Author: 章红平
 * @Date: 2023-04-04 13:59:28
 * @LastEditors: 章红平
 * @LastEditTime: 2023-04-06 18:18:41
 * @FilePath: \vue-elementUI\vue-admin-design\src\layout\components\SideMenu\index.vue
 * @Description: 描述
-->
<template>
  <div class="side-menu-wrapper">
    <el-scrollbar wrap-class="scrollbar">
      <el-menu
        :default-active="activeMenu"
        :collapse="collapsed"
        :unique-opened="true"
        background-color="#263238"
        text-color="#fff"
        active-text-color="#409eff"
      >
        <SideMenuItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SideMenuItem from './SideMenuItem'

export default {
  name: 'SideMenu',
  components: { SideMenuItem },
  computed: {
    ...mapGetters('app', ['collapsed']),
    routes() {
      console.log("this.$router.options.routes",this.$router.options.routes)
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  }
}
</script>

<style lang="less">
@import "../../../assets/less/side-menu";
</style>
