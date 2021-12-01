<template>
  <div v-if="isVisibleExams" class="modal-exams">
    <div class="modal-exams-container">
      <h1>{{ actualDonor.donor_name }}</h1>
      <h2>Pré-Natal</h2>
      <p>Exames: {{ prenatalData.prenatal_exam }}</p>
      <p>Medicações: {{ prenatalData.prenatal_medication }}</p>
      <p>Tóxicos: {{ prenatalData.prenatal_toxic }}</p>
      <p>Doenças: {{ prenatalData.prenatal_disease }}</p>
      <h2>Pós-Parto</h2>
      <p>Nascimento do bebê: {{ postnatalData.postnatal_birthDate }}</p>
      <p>Tipo de parto: {{ postnatalData.postnatal_typeBirth }}</p>
      <p>Obstetra: {{ postnatalData.obstetrician_name  }}</p>
      <p>Contato do obstetra: {{ postnatalData.obstetrician_phoneNumber }}</p>
      <p>Local: {{ postnatalData.postnatal_local }}</p>
      <p>Medicações: {{ postnatalData.postnatal_medication }}</p>
      <p>Tóxicos: {{ postnatalData.postnatal_toxic }}</p>
      <p>Doenças: {{ postnatalData.postnatal_disease }}</p>
    </div>
    <div id="overlay" @click="closeModal"></div>
  </div>
</template>

<script>
export default {
  name: "ModalExams",
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$store.state.isVisibleExams = false;
      this.$store.state.prenatalData = {};
      this.$store.state.postnatalData = {};
    },
  },
  computed: {
    isVisibleExams() {
      return this.$store.state.isVisibleExams;
    },
    actualDonor() {
      return this.$store.state.actualDonor;
    },
    prenatalData() {
      return this.$store.state.prenatalData;
    },
    postnatalData() {
      return this.$store.state.prenatalData;
    },
  },
};
</script>

<style>
.modal-exams {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
}

.modal-exams .modal-exams-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: #fefefe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 45vw;
  height: 80vh;
  position: absolute;
  padding: 25px;
  z-index: 15;
}

.modal-exams .modal-exams-container h1 {
  width: 100%;
}

.modal-exams .modal-exams-container h2,
.modal-exams .modal-exams-container p {
  width: 100%;
  text-align: start;
}

.modal-exams .modal-exams-container p {
    font-size: 25px;
}

.modal-exams .modal-exams-container div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 60%;
}

.modal-exams form {
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-around;
}

.modal-exams #overlay {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
}
</style>
