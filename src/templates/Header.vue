<template>
  <div class="header">
    <h1>MaMaLá</h1>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.header {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 75px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-shadow: 2px 2px 0 #000;
  color: #fff;
  background-color: #f2abb1;
}

.header h1 {
  cursor: pointer;
}
</style>