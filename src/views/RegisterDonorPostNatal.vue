<template>
  <div class="register-donor-post-natal">
    <BodyContainer>
      <h1>CADASTRO DE DOADORA</h1>
      <ContentContainer>
        <form>
          <div id="post-natal-title" class="flex-column-start">
            <h2>Pós Parto</h2>
            <hr />
          </div>

          <div class="section-container">
            <section class="section-box">
              <div class="flex-column-start">
                <label for="child-birth-type">Tipo de parto:</label>
                <select name="child-birth-type" id="child-birth-type">
                  <option value="normal">normal</option>
                  <option value="cesariana">cesariana</option>
                </select>
              </div>

              <div class="flex-column-start">
                <label for="obstetrician">Obstetra:</label>
                <select name="obstetrician" id="obstetrician">
                  <option value="normal">normal</option>
                </select>
              </div>

              <div class="flex-column-start">
                <label for="disease">Doenças:</label>
                <textarea
                  name="disease"
                  v-model="register.diseases"
                  id="disease"
                ></textarea>
              </div>
            </section>

            <section class="section-box">
              <div class="flex-column-start">
                <label for="medication">Medicação:</label>
                <textarea
                  name="medication"
                  v-model="register.medications"
                  id="medication"
                ></textarea>
              </div>

              <div class="flex-column-start">
                <label for="drugs"
                  >Tóxicos (álcool, fumo e drogas ilícitas):</label
                >
                <textarea
                  name="drugs"
                  v-model="register.drugs"
                  id="drugs"
                ></textarea>
              </div>
            </section>
          </div>
        </form>
        <div class="button-container">
          <button id="next">Finalizar</button>
        </div>
      </ContentContainer>
    </BodyContainer>
  </div>
</template>

<script>
import ContentContainer from "../components/ContentContainer";
import BodyContainer from "../components/BodyContainer";

export default {
  name: "registerDonorPostNatal",
  components: {
    ContentContainer,
    BodyContainer
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    register() {
      return this.$store.state.register;
    },
  },
};
</script>

<style>
.register-donor-post-natal h1 {
  display: flex;
  justify-self: flex-start;

  color: #575757;

  width: 85vw;
}

.register-donor-post-natal form {
  display: flex;
  flex-direction: column;

  height: 61vh;
  width: 80%;
}

.register-donor-post-natal .flex-column-start{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.register-donor-post-natal .section-container {
  display: flex;
  height: 100%;
}

.register-donor-post-natal .section-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  height: 95%;
  width: 50%;
}

.register-donor-post-natal label {
  font-size: 20px;
  color: #7b7b7b;

  margin-bottom: 5px;
}

.register-donor-post-natal select {
  font-size: 20px;
  outline: none;
  border: 1px solid #7b7b7b;
  background-color: #f2f2f2;
  color: #6b6767bf;

  width: 13vw;

  padding: 4px;
}

.register-donor-post-natal textarea {
  font-size: 15px;
  color: #6b6767bf;
  background-color: #f2f2f2;
  border-color: #7b7b7b;
  resize: none;
  outline: none;

  width: 17vw;
  height: 15vh;

  padding: 5px;
  margin-top: 5px;
  border-radius: 15px;
}

.register-donor-post-natal textarea:focus,
.register-donor-post-natal select:focus {
  border: 2px solid rgb(97, 92, 92);
}

.register-donor-post-natal input:focus {
  border: 2px solid rgb(97, 92, 92);
}

.register-donor-post-natal hr {
  width: 65%;

  border: 1px solid #575757;
}

.register-donor-post-natal .button-container {
  display: flex;
  justify-content: space-evenly;
}

.register-donor-post-natal button {
  border: 1px solid #7b7b7b;
  cursor: pointer;
  font-size: 25px;
  outline: none;
  color: #fff;

  width: 16vw;
  height: 6vh;
}

.register-donor-post-natal button:active {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>