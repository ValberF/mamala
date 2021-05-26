<template>
  <div class="login">
    <div class="login-container">
      <h1>Login</h1>
      <form action="">
        <div class="input-container">
          <div>
            <label for="user">Usuário:</label>
            <input type="text" id="user" />
          </div>
          <div>
            <label for="password">Senha:</label>
            <input type="password" id="password" />
            <span>Esqueceu sua senha?</span>
          </div>
        </div>
      </form>
      <button class="next">Entrar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {},
};
</script>

<style>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  
  min-height: 75vh;
}

.login-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  height: 50vh;
  width: 32vw;

  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #92DED2;
}

.input-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  font-size: 20px;

  height: 18vh;
}

.input-container div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input-container input {
  border-radius: 5px;
  font-size: 20px;
  padding: 5px;

  border: 1px solid #7b7b7b;
  outline: none;
}

.input-container input:focus {
  border: 2px solid rgb(97, 92, 92);
}

.input-container span {
  margin-top: 5px;
  font-size: 18px;

  cursor: pointer;
}

.login-container button {
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