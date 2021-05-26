<template>
  <div class="content-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ContentContainer",
};
</script>

<style>
.content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: rgba(146, 222, 210, 0.5);
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding: 30px;
  min-height: 65vh;
  width: 83vw;
}
</style>