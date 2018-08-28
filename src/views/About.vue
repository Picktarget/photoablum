<template>
  <div class="setting">
    <div class="left">
      <Menu :theme="theme2" :open-names="['about']" accordion :active-name="activeName">
        <Submenu name="about">
          <template slot="title">
            内容管理
          </template>
          <menu-item name="img">
            <router-link to="img">图文管理</router-link>
          </menu-item>
          <menu-item name="plun">
            <router-link to="plun">评论管理</router-link>
          </menu-item>
          <menu-item name="jubao">
            <router-link to="jubao">举报管理</router-link>
          </menu-item>
        </Submenu>
        <Submenu name="test">
          <template slot="title">
            用户管理
          </template>
          <menu-item name="2-1">
            <router-link to="jubao">新增用户</router-link>
          </menu-item>
          <menu-item name="2-2">
            <router-link to="jubao">活跃用户</router-link>
          </menu-item>
        </Submenu>
      </Menu>
    </div>
    <div class="right">
      <router-view v-if="!$route.meta.keepAlive">
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme2: "dark",
      activeName: "img"
    };
  }
};
</script>

<style lang="less" scoped>
.setting {
  text-align: left;
  .left {
    float: left;
    height: 100vh;
    width: 240px;
    background: #515a6e;
    position: fixed;
    .ivu-menu-vertical .ivu-menu-item,
    .ivu-menu-vertical .ivu-menu-submenu-title {
      padding: 0;
      padding-left: 0 !important;
      a {
        color: #fff;
        padding: 0;
        padding: 12px 24px;
        display: block;
        padding-left: 43px;

        &.router-link-exact-active {
          color: #fff;
        }
      }
    }
  }
  .right {
    width: calc(100% - 240px);
    float: left;
    height: 100vh;
    position: relative;
    left: 240px;
    padding: 8px;
  }
}
</style>

