<template>
  <div class="header">
    <div class="welcome">
      <span v-if="admin" class="link-container" to="/">
        Olá, {{ admin.admin_name }}!
      </span>
      <i v-if="admin" class="fas fa-sign-out-alt" @click="logout"></i>
    </div>
    <router-link to="/">
      <div id="logo-container"></div>
    </router-link>
    <i @click="toggleMenu" class="fas fa-bars"></i>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      admin: {},
    };
  },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
    getAdmin() {
      this.admin = localStorage.getItem("__user");
      this.admin = JSON.parse(this.admin)
      this.admin.admin_name = this.admin.admin_name.split(' ')
      this.admin.admin_name = this.admin.admin_name[0]
    },
    logout() {
      localStorage.removeItem("__user");
      this.$router.push({ path: "/" });
    },
  },
  mounted() {
    this.getAdmin();
  },
  computed: {},
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

.header span, .header .fa-sign-out-alt {
  font-size: 20px;
}

.welcome {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 10%;
}

.header i {
  cursor: pointer;
  font-size: 30px;
}


#logo-container {
  margin-right: 8rem;
  height: 150px;
  width: 150px;

  background-image: url("../assets/mamala.png");
  background-size: 185%;
  background-position: center;

  cursor: pointer;
}
</style>
