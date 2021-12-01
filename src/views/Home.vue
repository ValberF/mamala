<template>
  <div class="home">
    <div class="grid-container">
      <Card>
        <div id="map"></div>
      </Card>

      <Card>
        <h2>ESTERELIZAÇÃO DOS FRASCOS</h2>
        <video controls>
          <source
            src="../assets/Como Esterilizar Corretamente Frasco de Armazenar Leite Materno.mp4"
            type="video/mp4"
          />
        </video>
      </Card>

      <Card>
        <h2>PEDIDO DE ENTREGA A DOMICÍLIO</h2>
        <div class="icon-container">
          <i class="fas fa-female"></i>
          <i class="fas fa-truck-loading"></i>
        </div>
      </Card>

      <Card>
        <h2>PRECISAMOS DE SUA AJUDA,</h2>
        <h3>DOE FRASCOS!</h3>
        <div class="bottle-container">
          <img src="../assets/bottle.png" class="bottle" />
          <img src="../assets/bottle.png" class="bottle" />
          <img src="../assets/bottle.png" class="bottle" />
        </div>
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
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 55px;
}

.home #map {
  height: 100%;
  width: 100%;

  background-image: url('../assets/mapa.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 5px;
}

.home .bottle {
  height: 100%;
  width: 20%;
}

.home .bottle-container {
  display: flex;
  justify-content: space-evenly;

  height: 40%;
  width: 100%;
}

.home video {
  width: 100%;
  height: 100%;

  outline: none;
  border-radius: 5px;
}

.home .icon-container {
  display: flex;
  justify-content: space-evenly;

  width: 80%;
  font-size: 100px;
  color: rgb(166, 210, 233);
}
</style>
