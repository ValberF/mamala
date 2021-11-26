<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-container">
      <div>
        <h1>{{ actualDonor.donor_name }}</h1>
        <form action>
          <input
            type="number"
            id="amount"
            placeholder="Quantidade a ser doada"
            v-model="donorAmount"
          />
        </form>
        <button class="next" @click="donate">Doar</button>
      </div>
    </div>
    <div id="overlay" @click="closeModal"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Modal",
  data() {
    return {
      donorAmount: Number,
    };
  },
  methods: {
    closeModal() {
      this.$store.state.isVisible = false;
    },
    donate() {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      let yyyy = today.getFullYear();
      today = yyyy + "-" + mm + "-" + dd;

      const donation = {
        donor_id: this.actualDonor.donor_id,
        donation_amount: this.donorAmount,
        donation_date: today,
        donation_status: "Aguardando cultura",
      };

      axios.post('http://localhost:5000/donation', donation).then(() => {
        axios.get('http://localhost:5000/stock').then( res => {
          let stockAmount = Number(this.donorAmount) + Number(res.data[1].stock_amount)
          axios.put('http://localhost:5000/stock/2', { stock_amount: stockAmount })
        })
      })
    },
  },
  computed: {
    isVisible() {
      return this.$store.state.isVisible;
    },
    actualDonor() {
      return this.$store.state.actualDonor;
    },
  },
};
</script>

<style>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
}

.modal .modal-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  background-color: #fefefe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 30vw;
  height: 40vh;
  position: absolute;
  padding: 20px;
  z-index: 15;
}

.modal .modal-container h1 {
  display: unset;
  width: 100%;
}

.modal .modal-container div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 60%;
}

.modal #overlay {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
}
</style>
