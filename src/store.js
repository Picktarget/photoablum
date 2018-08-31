import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    position: 0,
    iwImage: []
  },
  mutations: {
    SAVE_POSITION(state, position) {
      state.position = position;
    },
    UPDATE_IWIMG(state, img) {
      state.iwImage.push(img);
    },
    REMOVE_IWIMG(state, imgArr) {
      state.iwImage = imgArr;
    },
    CLEAR_IWIMG(state) {
      state.iwImage = [];
    }
  },
  actions: {}
});
