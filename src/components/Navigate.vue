<template>
  <div class="header">
     <Row>
      <i-col :xs="2" :sm="4" :md="6" :lg="6">
        <div class="logo">
          <img src="../assets/logo.png" alt="" srcset="">
        </div>
      </i-col>
      <i-col :xs="16" :sm="16" :md="12" :lg="12">
        <Menu mode="horizontal" :theme="theme1" :active-name="activeName">
          <menu-item name="/">
              <router-link to="/">首页</router-link></menu-item>
          <menu-item name="about">
              <router-link to="/about">管理</router-link>
          </menu-item>
          <Submenu name="3">
              <template slot="title">
                  统计分析
              </template>
              <MenuGroup title="使用">
                  <menu-item name="3-1">新增和启动</menu-item>
                  <menu-item name="3-2">活跃分析</menu-item>
                  <menu-item name="3-3">时段分析</menu-item>
              </MenuGroup>
              <MenuGroup title="留存">
                  <menu-item name="3-4">用户留存</menu-item>
                  <menu-item name="3-5">流失用户</menu-item>
              </MenuGroup>
          </Submenu>
          <menu-item name="4">
              综合设置
          </menu-item>
        </Menu>
      </i-col>
      <i-col :xs="2" :sm="4" :md="6" :lg="6">
        <div class="sys"></div>
      </i-col>
    </Row>
  </div>
</template>
<script>
export default {
  name: "Navigate",
  data() {
    return {
      activeName: "/",
      theme1: "light"
    };
  },
  watch: {
    $route(to) {
      const route = to.path;
      if (route) {
        const f = route.split("/");
        for (let i in f) {
          if (i) {
            if (f[i]) {
              this.activeName = f[1];
              break;
            }
          }
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  width: 100%;
  z-index: 9;
  background-color: #fff;
  box-shadow: 0 0 5px #999;
}
a {
  height: 60px;
  display: inline-block;
  color: #333;
  padding: 0 20px;
  &.router-link-exact-active {
    color: #2d8cf0;
  }
}
.logo {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #dcdee2;
  text-align: left;
  padding-left: 34px;
  img {
    max-width: 60px;
  }
}
.sys {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #dcdee2;
}
// .left {
//   width: 450px;
//   height: 60px;
//   float: left;
// }
// @media screen and (max-width: 1200px) {
//   .left{
//     width: 120px;
//   }
// }
</style>
