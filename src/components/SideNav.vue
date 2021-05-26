<template>
  <div class="sidenav" id="sidenav">
    <i class="fas fa-times" @click="closeNav"></i>
    <div class="link-container">
      <router-link to="/">Início</router-link>
    </div>
    <div class="link-container">
      <router-link to="/login">Login</router-link>
    </div>
    <div class="link-container">
      <router-link to="/register-donor-personal-details"
        >Cadastrar doadora</router-link
      >
    </div>
    <div class="link-container">
      <router-link to="/donor-list">Lista de doadoras</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNav",
  methods: {
    closeNav() {
      document.getElementById("sidenav").style.width = "0";
    },
  },
};
</script>

<style>
.sidenav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: 100%;
  width: 0;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  background-color: #445065;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 30px;
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