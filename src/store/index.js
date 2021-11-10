import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideNavState: "close-sidenav",
    user: null,
  },
  mutations: {
    toggleMenu(state) {
      if (state.sideNavState == "close-sidenav") {
        state.sideNavState = "open-sidenav";
      } else if (state.sideNavState == "open-sidenav") {
        state.sideNavState = "close-sidenav";
      }
    },
    setUser(state, user) {
      state.user = user;
      if (user) {
        axios.defaults.headers.common["Authorization"] = `bearer ${user.token}`;
      } else {
        delete axios.defaults.headers.common["Authorization"];
      }
    },
  },
  actions: {},
  modules: {},
});
