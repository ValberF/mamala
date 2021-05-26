<template>
  <div class="register-donor-personal-details">
    <BodyContainer>
      <h1>CADASTRO DE DOADORA</h1>
      <ContentContainer>
        <form>
          <section class="general-data-container">
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
          </section>

          <section class="adress-container">
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
          </section>
        </form>
        <div class="button-container">
          <button class="next" @click="mostrarDados">Finalizar</button>
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
      alert('Doadora cadastrada com sucesso!')
      this.$router.push("donor-list");
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
  justify-content: space-evenly;

  height: 61vh;
  width: 50%;
}

.register-donor-personal-details .adress-container,
.register-donor-personal-details .general-data-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

.register-donor-personal-details label {
  font-size: 20px;
  font-weight: bold;
}

.register-donor-personal-details label,
.register-donor-personal-details h2 {
  color: #000;
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

.register-donor-personal-details hr {
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
  border: none;
  cursor: pointer;
  font-size: 25px;
  outline: none;
  color: #fff;
  border-radius: 10px;

  width: 16vw;
  height: 6vh;
  transition: 0.2s;
}
</style>