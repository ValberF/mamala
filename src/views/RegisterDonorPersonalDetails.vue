<template>
  <div class="register-donor-personal-details">
    <BodyContainer>
      <h1>CADASTRO DE DOADORA</h1>
      <ContentContainer>
        <form>
          <div class="general-data-container">
            <div class="input-group">
              <input
                type="text"
                id="name"
                v-model="register.name"
                placeholder="Nome completo"
              />
            </div>

            <div class="input-group">
              <div>
                <label for="birth-mother">Data de Nascimento da mãe:</label>
                <input
                  id="birth-mother"
                  v-model="register.birthMother"
                  type="date"
                />
              </div>

              <div>
                <label for="birth-baby">Data de Nascimento do filho:</label>
                <input
                  id="birth-baby"
                  v-model="register.birthBaby"
                  type="date"
                />
              </div>
            </div>

            <div class="input-group">
              <input
                type="text"
                id="grandma-name"
                v-model="register.grandmaName"
                placeholder="Nome da avó materna"
              />
            </div>
          </div>

          <div class="adress-container">
            <div id="adress-title">
              <h2>Endereço</h2>
              <hr />
            </div>

            <div class="input-group">
              <input
                type="text"
                id="street"
                v-model="register.street"
                placeholder="Rua"
              />
            </div>

            <div class="input-group">
              <div>
                <input
                  type="text"
                  v-model="register.district"
                  placeholder="Bairro"
                />
              </div>

              <div>
                <input
                  type="number"
                  v-model="register.homeNumber"
                  placeholder="Número da casa"
                />
              </div>
            </div>

            <div class="input-group">
              <input
                type="text"
                v-model="register.reference"
                placeholder="Ponto de referência"
              />
            </div>

            <div class="input-group">
              <div>
                <input
                  type="text"
                  v-model="register.naturalness"
                  placeholder="Naturalidade"
                />
              </div>

              <div>
                <input
                  type="text"
                  v-model="register.phone"
                  placeholder="Telefone/Celular"
                />
              </div>
            </div>
          </div>
        </form>
        <div class="button-container">
          <button id="back">Voltar</button>
          <button id="next" @click="mostrarDados">Avançar</button>
        </div>
      </ContentContainer>
    </BodyContainer>
  </div>
</template>

<script>
import ContentContainer from "../components/ContentContainer";
import BodyContainer from "../components/BodyContainer";

export default {
  name: "registerDonorPersonalDetails",
  components: {
    ContentContainer,
    BodyContainer,
  },
  data() {
    return {};
  },
  methods: {
    mostrarDados() {
      console.log(this.register);
    },
  },
  computed: {
    register() {
      return this.$store.state.register;
    },
  },
};
</script>

<style>
.register-donor-personal-details h1 {
  display: flex;
  justify-self: flex-start;

  color: #575757;

  width: 85vw;
}

.register-donor-personal-details form {
  display: flex;
  flex-direction: column;

  height: 61vh;
  width: 50%;
}

.register-donor-personal-details .adress-container,
.register-donor-personal-details .general-data-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
}

.register-donor-personal-details .general-data-container {
  height: 35%;
}

.register-donor-personal-details .adress-container {
  height: 55%;
}

.register-donor-personal-details #name,
.register-donor-personal-details #street,
.register-donor-personal-details #grandma-name {
  width: 100%;
}

.register-donor-personal-details .adress-container #adress-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.register-donor-personal-details input {
  font-size: 20px;
  border-radius: 15px;
  outline: none;
  border: 1px solid #7b7b7b;
  background-color: #f2f2f2;
  color: #6b6767bf;

  padding: 7px;
}

.register-donor-personal-details input:focus {
  border: 2px solid rgb(97, 92, 92);
}

.register-donor-personal-details .form-container form hr {
  width: 100%;

  border: 1px solid #575757;
}

.register-donor-personal-details .input-group {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.register-donor-personal-details .input-group div {
  display: flex;
  flex-direction: column;
}

.register-donor-personal-details .button-container {
  display: flex;
  justify-content: space-evenly;
}

.register-donor-personal-details button {
  border: 1px solid #7b7b7b;
  cursor: pointer;
  font-size: 25px;
  outline: none;
  color: #fff;

  width: 16vw;
  height: 6vh;
}

.register-donor-personal-details button:active {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>