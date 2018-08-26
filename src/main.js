import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLazyload from 'vue-lazyload'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import "vue2-animate/dist/vue2-animate.min.css";
import error from './assets/error.png';
import loading from './assets/loading.gif';

Vue.use(iView);
// Vue.use(VueLazyload)
Vue.use(VueLazyload, {  
  preLoad: 1.3,   //预加载的宽高比
  error: error,//图片加载失败时使用的图片源
  loading: loading,//图片加载的路径
  attempt: 1//尝试加载次数
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
