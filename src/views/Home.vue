<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  beforeRouteLeave(to, from, next) {
    let position = window.scrollY;
    this.$store.commit("SAVE_POSITION", position); //离开路由时把位置存起来
    next();
  },
  activated() {
    this.$nextTick(function() {
      let position = this.$store.state.position; //返回页面取出来
      window.scroll(0, position);
    });
  }
};
</script>
