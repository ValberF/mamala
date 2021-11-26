<template>
  <div class="login">
    <div class="login-container">
      <h1>Login</h1>
      <form action="">
        <div class="input-container">
          <div>
            <label for="user">E-mail:</label>
            <input type="text" id="user" v-model="user.admin_email" />
          </div>
          <div>
            <label for="password">Senha:</label>
            <input type="password" id="password" v-model="user.admin_password" />
            <span>Esqueceu sua senha?</span>
          </div>
        </div>
      </form>
      <button class="next" @click="login">Entrar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl }  from "../global";

export default {
  name: "Login",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    login() {
      axios
        .post(baseApiUrl + "/login", this.user)
        .then((res) => {
          this.$store.commit("setUser", res.data);
          localStorage.setItem("__user", JSON.stringify(res.data));
          this.$router.push({ path: "/" });
          alert("logado")
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style>
.login .login-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  height: 50vh;
  width: 32vw;

  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgba(146, 222, 210, 0.5);
}

.login .input-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  font-size: 20px;

  height: 18vh;
}

.login .input-container div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.login .input-container input {
  border-radius: 5px;
  font-size: 20px;
  padding: 5px;

  border: 1px solid #7b7b7b;
  outline: none;
}

.login .input-container span {
  margin-top: 5px;
  font-size: 18px;

  cursor: pointer;
}

.login .login-container button {
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