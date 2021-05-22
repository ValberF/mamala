<template>
  <div class="home">
    <div class="grid-container">
      <Card>
        <span>Doação de leite</span>
      </Card>

      <Card>
        <span>Mapa</span>
      </Card>

      <Card>
        <span>Esterilização dos frascos</span>
      </Card>

      <Card>
        <span>Eventos</span>
      </Card>

      <Card>
        <span>Dicas de retirada</span>
      </Card>

      <Card>
        <span>Doação de frascos</span>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  name: "Home",
  components: {
    Card,
  },
};
</script>

<style>
.home {
  display: flex;
  justify-content: center;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 80px;

  margin-top: 35px;
}
</style>
