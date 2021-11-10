<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style>
.card {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  width: 23vw;
  height: 32vh;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  color: #000;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 10px;
}

.card:hover {
  opacity: 0.8;
}
</style>