<template>
  <div class="register-obstetrician">
    <div class="register-container">
      <h1>Cadastrar Obstetra</h1>
      <form action="">
          <div>
            <label for="name">Nome Completo:</label>
            <input type="text" id="name" v-model="obstetrician.obstetrician_name" />
          </div>
          <div>
            <label for="email">Telefone/Celular:</label>
            <input type="text" id="email" v-model="obstetrician.obstetrician_phoneNumber" />
          </div>
      </form>
      <button class="next" @click="registerObstetrician">Cadastrar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../global";

export default {
  name: "RegisterObstetrician",
  components: {},
  data() {
    return {
      obstetrician: {},
    };
  },
  methods: {
    registerObstetrician() {
      axios
        .post(baseApiUrl + "/obstetrician", this.obstetrician)
        .then(() => {
          this.$router.push({ path: "/" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {},
};
</script>

<style>
.register-obstetrician .register-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  height: 60vh;
  width: 35vw;

  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgba(146, 222, 210, 0.5);
}

.register-obstetrician form {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  font-size: 25px;

  width: 25vw;
  height: 35vh;
}

.register-obstetrician form div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 90%;
}

.register-obstetrician form input {
  border-radius: 5px;
  font-size: 20px;
  padding: 7px;

  width: 90%;

  border: 1px solid #7b7b7b;
  outline: none;
}

.register-obstetrician form span {
  margin-top: 5px;
  font-size: 18px;

  cursor: pointer;
}

.register-obstetrician .register-container button {
  border: none;
  cursor: pointer;
  font-size: 25px;
  outline: none;
  color: #fff;
  border-radius: 10px;

  width: 10vw;
  height: 50px;
}
</style>