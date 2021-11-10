<template>
  <div class="content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Content",
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