<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style>
.card {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 26vw;
  height: 35vh;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border-radius: 5px;
}
</style>