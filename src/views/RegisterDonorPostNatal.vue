<template>
  <div class="register-donor-post-natal">
    <BodyContainer>
      <h1>{{ actualDonor.donor_name }}</h1>
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
                <select
                  name="child-birth-type"
                  v-model="postNatalData.postnatal_typeBirth"
                  id="child-birth-type"
                >
                  <option value="0">normal</option>
                  <option value="1">cesariana</option>
                </select>
              </div>

              <div class="flex-column-start">
                <label for="obstetrician">Obstetra:</label>
                <select
                  v-model="postNatalData.obstetrician_id"
                  name="obstetrician"
                  id="obstetrician"
                >
                  <option
                    v-for="value in obstetricianList"
                    :key="value.obstetrician_id"
                    :value="value.obstetrician_id"
                    >{{ value.obstetrician_name }}</option
                  >
                </select>
              </div>

              <div class="flex-column-start">
                <label for="disease">Doenças:</label>
                <textarea
                  name="disease"
                  v-model="postNatalData.postnatal_disease"
                  id="disease"
                ></textarea>
              </div>
            </section>

            <section class="section-box">
              <div class="flex-column-start">
                <label for="medication">Medicação:</label>
                <textarea
                  name="medication"
                  v-model="postNatalData.postnatal_medication"
                  id="medication"
                ></textarea>
              </div>

              <div class="flex-column-start">
                <label for="drugs"
                  >Tóxicos (álcool, fumo e drogas ilícitas):</label
                >
                <textarea
                  name="drugs"
                  v-model="postNatalData.postnatal_toxic"
                  id="drugs"
                ></textarea>
              </div>
            </section>

            <section class="section-box">
              <div class="flex-column-start">
                <label for="medication">Local feito o pós-natal:</label>
                <input type="text" v-model="postNatalData.postnatal_local" />
              </div>

              <div class="flex-column-start">
                <label for="drugs">Data de Nascimento do bebê:</label>
                <input
                  type="date"
                  v-model="postNatalData.postnatal_birthDate"
                />
              </div>
            </section>
          </div>
        </form>
        <div class="button-container">
          <button class="back" @click="back">Voltar</button>
          <button class="next" @click="next">Finalizar</button>
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
  name: "RegisterDonorPostNatal",
  components: {
    ContentContainer,
    BodyContainer,
  },
  data() {
    return {
      postNatalData: {},
      obstetricianList: [],
      obstetricianId: Number,
    };
  },
  methods: {
    back() {
      this.$router.push("register-donor-pre-natal");
    },
    next() {
      axios
        .post(baseApiUrl + "/prenatal", this.prenatal)
        .then((res) => {
          this.postNatalData.prenatal_id = res.data.prenatal[0];
          this.postNatalData.donor_id = this.actualDonor.donor_id;
          axios.post(baseApiUrl + "/postnatal", this.postNatalData);
        })
        .then(() => {
          this.$router.push({ path: "/donor-list" });
        });
    },
    getObstetrician() {
      axios.get(baseApiUrl + "/obstetrician").then((res) => {
        this.obstetricianList = res.data;
      });
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
  mounted() {
    this.getObstetrician();
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

.register-donor-post-natal .flex-column-start {
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
  color: #000;
  font-weight: bold;

  margin-bottom: 5px;
}

.register-donor-post-natal select,
.register-donor-post-natal input {
  font-size: 20px;
  outline: none;
  border: 1px solid #7b7b7b;
  background-color: #f2f2f2;
  color: #6b6767bf;
  border-radius: 10px;

  width: 13vw;
  padding: 7px;
}

.register-donor-post-natal textarea {
  font-size: 19px;
  color: #6b6767bf;
  background-color: #f2f2f2;
  border-color: #7b7b7b;
  resize: none;
  outline: none;

  width: 17vw;
  height: 15vh;

  padding: 7px;
  margin-top: 5px;
  border-radius: 15px;
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
  border: none;
  cursor: pointer;
  font-size: 25px;
  outline: none;
  color: #fff;
  border-radius: 10px;

  width: 16vw;
  height: 6vh;
}

.register-donor-post-natal button:active {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
