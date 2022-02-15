<template>
  <div class="register-beneficiary">
    <BodyContainer>
      <h1>CADASTRAR PONTO DE DISTRIBUIÇÃO</h1>
      <ContentContainer>
        <form>
          <section class="general-data-container">
            <div class="input-group">
              <input
                type="text"
                id="name"
                v-model="beneficiaryData.beneficiary_name"
                placeholder="Nome do local"
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
                v-model="address.address_street"
                placeholder="Rua"
              />
            </div>

            <div class="input-group">
              <div>
                <input
                  type="text"
                  v-model="address.address_district"
                  placeholder="Bairro"
                />
              </div>

              <div>
                <input
                  type="number"
                  v-model="address.address_number"
                  placeholder="Número"
                />
              </div>
            </div>

            <div class="input-group">
              <input
                type="text"
                v-model="address.address_reference"
                placeholder="Ponto de referência"
              />

              <input
                type="text"
                v-model="beneficiaryData.beneficiary_phoneNumber"
                placeholder="Telefone/Celular"
              />
            </div>
          </section>
        </form>
        <div class="button-container">
          <button class="next" @click="registerBeneficiary">Finalizar</button>
        </div>
      </ContentContainer>
    </BodyContainer>
  </div>
</template>

<script>
import ContentContainer from "../components/ContentContainer";
import BodyContainer from "../components/BodyContainer";
import axios from "axios";
import { baseApiUrl } from "../global";

export default {
  name: "RegisterBeneficiary",
  components: {
    ContentContainer,
    BodyContainer,
  },
  data() {
    return {
      beneficiaryData: {},
      address: {},
    };
  },
  methods: {
    registerBeneficiary() {
      axios
        .post(baseApiUrl + "/address", this.address)
        .then((res) => {
          this.beneficiaryData.address_id = res.data.address[0];
          axios
            .post(baseApiUrl + "/beneficiary", this.beneficiaryData)
            .then((res) => {
              const stock = {
                beneficiary_id: res.data.beneficiary[0],
                stock_amount: 0,
              };

              axios.post(baseApiUrl + "/stock", stock).then(() => {
                this.$router.push({ path: "beneficiary-list" });
              });
            });
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
.register-beneficiary h1 {
  display: flex;
  justify-self: flex-start;

  color: #575757;

  width: 85vw;
}

.register-beneficiary form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 55vh;
  width: 50%;
}

.register-beneficiary .adress-container,
.register-beneficiary .general-data-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
}

.register-beneficiary .adress-container {
  height: 55%;
}

.register-beneficiary #name,
.register-beneficiary #street,
.register-beneficiary #grandma-name {
  width: 100%;
}

.register-beneficiary .adress-container #adress-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.register-beneficiary label {
  font-size: 20px;
  font-weight: bold;
}

.register-beneficiary label,
.register-beneficiary h2 {
  color: #000;
}

.register-beneficiary input {
  font-size: 18px;
  border-radius: 15px;
  outline: none;
  border: 1px solid #7b7b7b;
  background-color: #f2f2f2;
  color: #6b6767bf;

  padding: 7px;
}

.register-beneficiary input:focus {
  border: 2px solid rgb(97, 92, 92);
}

.register-beneficiary hr {
  width: 100%;

  border: 1px solid #575757;
}

.register-beneficiary .input-group {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.register-beneficiary .input-group div {
  display: flex;
  flex-direction: column;
}

.register-beneficiary .button-container {
  display: flex;
  justify-content: space-evenly;
}

.register-beneficiary button {
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
