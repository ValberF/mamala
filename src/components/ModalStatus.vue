<template>
  <div v-if="isVisibleStatus" class="modal-status">
    <div class="modal-status-container">
      <h1>Alterar Status do Leite</h1>
      <select v-model="status" name="select-status" id="select-status">
        <option value="Aguardando Cultura">Aguardando Cultura</option>
        <option value="Deferido">Deferido</option>
        <option value="Indeferido">Indeferido</option>
      </select>
      <button class="next" @click="updateStatus()">Confirmar</button>
    </div>
    <div id="overlay" @click="closeModal"></div>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../global";

export default {
  name: "ModalStatus",
  data() {
    return {
      status: "",
    };
  },
  methods: {
    closeModal() {
      this.$store.state.isVisibleStatus = false;
    },
    updateStatus() {
      axios
        .put(
          baseApiUrl +
            `/donation/${this.$store.state.actualDonation.donation_id}`,
          { donation_status: this.status }
        )
        .then(() => {
          if (this.status == "Deferido") {
            axios.get("http://localhost:5000/stock").then((res) => {
              let stockAmount =
                Number(this.$store.state.actualDonation.donation_amount) +
                Number(res.data[0].stock_amount);
              axios.put("http://localhost:5000/stock/1", {
                stock_amount: stockAmount,
              });
            });
          }
        })
        .then(() => {
          this.$store.state.isVisibleStatus = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    isVisibleStatus() {
      return this.$store.state.isVisibleStatus;
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
.modal-status {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
}

.modal-status .modal-status-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  background-color: #fefefe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 30vw;
  height: 35vh;
  position: absolute;
  padding: 20px;
  z-index: 15;
}

.modal-status .modal-status-container h1 {
  display: unset;
  width: 100%;
}

.modal-status .modal-status-container div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 60%;
}

.modal-status form {
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-around;
}

.modal-status #overlay {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
}
</style>
