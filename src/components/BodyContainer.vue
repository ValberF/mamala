<template>
  <div class="body-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BodyContainer",
};
</script>

<style>
.body-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  min-height: 75vh;
}
</style>