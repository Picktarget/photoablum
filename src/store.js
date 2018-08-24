import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    position: 0
  },
  mutations: {
    SAVE_POSITION(state, position) {
      state.position = position;
    }
  },
  actions: {}
});
