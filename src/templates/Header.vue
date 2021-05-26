<template>
  <div class="header">
    <div id="logo-container"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
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