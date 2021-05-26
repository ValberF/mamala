<template>
  <div class="content" @click="closeNav">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Content",
  methods: {
    closeNav() {
      document.getElementById("sidenav").style.width = "0";
    },
  },
};
</script>

<style>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 83vh;
}

</style>