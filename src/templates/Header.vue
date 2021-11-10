<template>
  <div class="header">
    <div></div>
    <router-link to="/">
      <div id="logo-container"></div>
    </router-link>
    <i @click="toggleMenu" class="fas fa-bars"></i>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
    }
  },
  computed: {
  }
};
</script>

<style>
.header {
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 25px 0 25px;
}

.header i {
  cursor: pointer;
  font-size: 30px;
}

#logo-container {
  height: 150px;
  width: 150px;

  background-image: url('../assets/mamala.png');
  background-size: 185%;
  background-position: center;
  
  cursor: pointer;
}
</style>