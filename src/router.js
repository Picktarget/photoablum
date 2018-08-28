import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      meta: {
        keepAlive: true // 需要被缓存
      },
      children: [
        {
          path: "",
          redirect: "img"
        },
        {
          path: "img",
          component: () =>
            import(/* webpackChunkName: "IWRouter" */ "./views/IWManage/IWRouter.vue"),
          children: [
            {
              path: "",
              name: "img",
              component: () =>
                import(/* webpackChunkName: "ManageImg" */ "./views/IWManage/ManageImg.vue")
            },
            {
              path: "add",
              name: "add",
              component: () =>
                import(/* webpackChunkName: "ImgAdd" */ "./views/IWManage/ImgAdd.vue")
            }
          ]
        }
      ]
    }
  ]
});
