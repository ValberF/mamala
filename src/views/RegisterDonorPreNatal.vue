<template>
  <div class="register-donor-pre-natal">
    <BodyContainer>
      <h1>{{ actualDonor.donor_name }}</h1>
      <ContentContainer>
        <form>
          <div class="flex-column-start">
            <h2>Pré-Natal</h2>
            <hr />
          </div>

          <div class="section-container">
            <section class="section-box">
              <div class="flex-column-start">
                <label for="exam">Exames:</label>
                <textarea
                  name="exam"
                  v-model="preNatalData.prenatal_exam"
                  id="exam"
                ></textarea>
              </div>

              <div class="flex-column-start">
                <label for="disease">Doenças:</label>
                <textarea
                  name="disease"
                  v-model="preNatalData.prenatal_disease"
                  id="disease"
                ></textarea>
              </div>
            </section>

            <section class="section-box">
              <div class="flex-column-start">
                <label for="medication">Medicação:</label>
                <textarea
                  name="medication"
                  v-model="preNatalData.prenatal_medication"
                  id="medication"
                ></textarea>
              </div>

              <div class="flex-column-start">
                <label for="drugs"
                  >Tóxicos (álcool, fumo e drogas ilícitas):</label
                >
                <textarea
                  name="drugs"
                  v-model="preNatalData.prenatal_toxic"
                  id="drugs"
                ></textarea>
              </div>
            </section>
          </div>
        </form>
        <div class="button-container">
          <button class="back" @click="back">Voltar</button>
          <button class="next" @click="next">Avançar</button>
        </div>
      </ContentContainer>
    </BodyContainer>
  </div>
</template>

<script>
import ContentContainer from "../components/ContentContainer";
import BodyContainer from "../components/BodyContainer";

export default {
  name: "RegisterDonorPreNatal",
  components: {
    ContentContainer,
    BodyContainer,
  },
  data() {
    return {
      preNatalData: {},
    };
  },
  methods: {
    back() {
      this.$router.push({ path: "/donor-list" });
    },
    next() {
      this.preNatalData.donor_id = this.actualDonor.donor_id;
      Object.assign(this.prenatal, this.preNatalData); 
      this.$router.push({ path: "/register-donor-post-natal" });
    },
  },
  computed: {
    register() {
      return this.$store.state.register;
    },
    actualDonor() {
      return this.$store.state.actualDonor;
    },
    prenatal() {
      return this.$store.state.prenatal;
    },
  },
};
</script>

<style>
.register-donor-pre-natal h1 {
  display: flex;
  justify-self: flex-start;

  color: #575757;

  width: 85vw;
}

.register-donor-pre-natal .form-container {
  display: flex;
  flex-direction: column;

  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding: 30px;
  height: 68vh;
  width: 83vw;
}

.register-donor-pre-natal form {
  display: flex;
  flex-direction: column;

  height: 61vh;
  width: 80%;
}

.register-donor-pre-natal .flex-column-start {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.register-donor-pre-natal .section-container {
  display: flex;
  height: 100%;
}

.register-donor-pre-natal .section-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  height: 95%;
  width: 50%;
}

.register-donor-pre-natal p {
  margin-bottom: 5px;
}

.register-donor-pre-natal input[type="radio"] {
  margin-right: 8px;
}

.register-donor-pre-natal label,
.register-donor-pre-natal p {
  font-size: 20px;
  font-weight: bold;
  color: #000;
}

.register-donor-pre-natal textarea {
  font-size: 19px;
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

.register-donor-pre-natal hr {
  width: 65%;

  border: 1px solid #575757;
}

.register-donor-pre-natal .button-container {
  display: flex;
  justify-content: space-evenly;
}

.register-donor-pre-natal button {
  border: none;
  cursor: pointer;
  font-size: 25px;
  outline: none;
  color: #fff;
  border-radius: 10px;

  width: 16vw;
  height: 6vh;
}

.register-donor-pre-natal button:active {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
