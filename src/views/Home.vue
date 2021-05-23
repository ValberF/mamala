<template>
  <div class="home">
    <div class="grid-container">
      <Card>
        <span>Doação de leite</span>
      </Card>

      <Card>
        <h2>SAIBA A UNIDADE MAIS PRÓXIMA DE VOCÊ!</h2>
        <img src="../assets/maps.svg" id="maps" />
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
        <span>Eventos</span>
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

.home #maps {
  height: 50%;
  width: 50%;
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

.home h2,
.home h3 {
  color: rgba(218, 110, 139, 0.864);
}

.home video {
  width: 90%;
  height: 70%;

  outline: none;
}

.home .icon-container {
  display: flex;
  justify-content: space-evenly;

  width: 80%;
  font-size: 100px;
  color: rgb(166, 210, 233);
}
</style>
