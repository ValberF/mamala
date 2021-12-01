<template>
  <div :class="sideNavState" class="sidenav">
    <i class="fas fa-times" @click="toggleMenu"></i>
    <router-link class="link-container" to="/">Início</router-link>
    <router-link class="link-container" to="/login">Login</router-link>
    <router-link class="link-container" to="/register-donor-personal-details"
      >Cadastrar doadora</router-link
    >
    <router-link class="link-container" to="/donor-list"
      >Lista de doadoras</router-link
    >
    <router-link class="link-container" to="/register-beneficiary"
      >Cadastrar ponto de distribuição</router-link
    >
    <router-link class="link-container" to="/beneficiary-list"
      >Lista de pontos de distribuição</router-link
    >
    <router-link class="link-container" to="/register-obstetrician"
      >Cadastrar Obstetra</router-link
    >
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SideNav",
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
  },
  computed: mapState(["sideNavState"]),
};
</script>

<style>
.sidenav {
  display: flex;
  flex-direction: column;

  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  background-color: #445065;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 30px;
}

.close-sidenav {
  width: 0;
}

.open-sidenav {
  width: 30vw;
}

.sidenav i {
  cursor: pointer;
  padding: 5px 5px 20px 20px;
  color: #fff;
  font-size: 25px;
}

.sidenav i:hover {
  color: rgb(167, 167, 167);
}

.sidenav a {
  padding: 5px 5px 7px 20px;
  text-decoration: none;
  font-size: 25px;
  color: #fff;
  transition: 0.3s;
}

.sidenav .link-container {
  display: flex;
  width: 100%;
}

.sidenav .link-container:hover {
  background-color: #6e7f9b;
}
</style>
