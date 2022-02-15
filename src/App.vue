npm run serve<template>
  <div id="app">
    <Header />
    <Content @click.native="closeMenu"/>
    <SideNav />
  </div>
</template>

<script>
import Header from "./templates/Header";
import Content from "./templates/Content";
import SideNav from "./components/SideNav";
import { mapState } from "vuex";

export default {
  components: {
    Header,
    Content,
    SideNav,
  },
  methods: {
    closeMenu() {
      this.$store.commit("closeMenu");
    },
  },
  computed: mapState(["sideNavState"]),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jaldi&display=swap");

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Jaldi", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-color: #fffff0;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.back {
  background-color: #bd2626;
}

.next {
  background-color: #445065;
}

.back:hover {
  background-color: #8f1d1d;
}

.next:hover {
  background-color: #5f708c;
}
</style>
