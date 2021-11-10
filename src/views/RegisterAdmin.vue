<template>
  <div class="register-admin">
    <div class="register-container">
      <h1>Cadastrar Administrador(a)</h1>
      <form action="">
          <div>
            <label for="name">Nome Completo:</label>
            <input type="text" id="name" v-model="admin.admin_name" />
          </div>
          <div>
            <label for="email">E-mail:</label>
            <input type="text" id="email" v-model="admin.admin_email" />
          </div>
          <div>
            <label for="password">Senha:</label>
            <input
              type="password"
              id="password"
              v-model="admin.admin_password"
            />
            <span>Esqueceu sua senha?</span>
          </div>
      </form>
      <button class="next" @click="registerAdmin">Cadastrar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../global";

export default {
  name: "RegisterAdmin",
  components: {},
  data() {
    return {
      admin: {},
    };
  },
  methods: {
    registerAdmin() {
      axios
        .post(baseApiUrl + "/admin", this.admin)
        .then(() => {
          alert("Cadastrado!");
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
.register-admin .register-container {
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

.register-admin form {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  font-size: 25px;

  width: 25vw;
  height: 35vh;
}

.register-admin form div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 90%;
}

.register-admin form input {
  border-radius: 5px;
  font-size: 20px;
  padding: 7px;

  width: 90%;

  border: 1px solid #7b7b7b;
  outline: none;
}

.register-admin form span {
  margin-top: 5px;
  font-size: 18px;

  cursor: pointer;
}

.register-admin .register-container button {
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