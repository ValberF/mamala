<template>
  <div class="donor-page">
    <h1>{{ actualDonor.donor_name }}</h1>
    <ContentContainer v-if="flag">
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th width="30%">Data da doação</th>
              <th width="30%">Quantidade doada</th>
              <th width="30%">Status da doação</th>
              <th width="10%">Alterar Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="value in donations" :key="value.donation_id">
              <td width="30%">{{ value.donation_date }}</td>
              <td width="30%">{{ value.donation_amount }} ml</td>
              <td width="30%">{{ value.donation_status }}</td>
              <td width="10%" class="icon-class" @click="changeStatus(value)">
                <i class="fas fa-sync"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ContentContainer>
    <div v-else class="placeholder">
      <span>NENHUM DADO ENCONTRADO</span>
    </div>
    <ModalStatus />
  </div>
</template>

<script>
import ContentContainer from "../components/ContentContainer";
import ModalStatus from "../components/ModalStatus";
import axios from "axios";
import { baseApiUrl } from "../global";

export default {
  name: "DonorPage",
  components: {
    ContentContainer,
    ModalStatus,
  },
  data() {
    return {
      donations: [],
      flag: false,
    };
  },
  methods: {
    showDonations() {
      axios.get(baseApiUrl + "/donation").then((res) => {
        res.data.forEach((element) => {
          if (element.donor_id == this.actualDonor.donor_id) {
            element.donation_date = element.donation_date.split("T");
            element.donation_date = element.donation_date[0];
            element.donation_date = element.donation_date.split("-");
            element.donation_date =
              element.donation_date[2] +
              "/" +
              element.donation_date[1] +
              "/" +
              element.donation_date[0];
            this.donations.push(element);
            this.flag = true;
          }
        });
      });
    },
    changeStatus(actualDonation) {
      this.$store.state.actualDonation = actualDonation;
      this.$store.state.isVisibleStatus = true;
    },
  },
  computed: {
    register() {
      return this.$store.state.register;
    },
    actualDonor() {
      return this.$store.state.actualDonor;
    },
  },
  mounted() {
    this.showDonations();
  },
};
</script>

<style>
.donor-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  margin-top: 35px;
  min-height: 75vh;
}

.donor-page button {
  border: none;
  cursor: pointer;
  font-size: 25px;
  outline: none;
  color: #fff;
  border-radius: 10px;

  width: 8vw;
  height: 40px;
}

.donor-page .modal-status select {
  color: #777;
  font-size: 25px;
  border-radius: 5px;
  border: 1px solid #7b7b7b;
  padding: 5px;

  outline: none;
}

.donor-page h1 {
  display: flex;
  justify-self: flex-start;

  color: #575757;

  width: 85vw;
}

.donor-page .table-container {
  overflow-y: scroll;
  min-height: 100%;
  height: 65vh;
  background-color: #dff0e6;
  border-radius: 10px;
}

.donor-page table {
  border-collapse: collapse;
  width: 100%;
}

.donor-page thead {
  background-color: #b4cabd;
}

.donor-page tr {
  border-bottom: 1px solid #b4cabd;
}

.donor-page th {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #fff;
}

.donor-page th,
td {
  padding: 1rem;
  text-align: left;
}

.donor-page .icon-class {
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  transition: 0.2s;
}

.donor-page .icon-class:hover {
  font-size: 25px;
}

.donor-page tbody tr:nth-child(odd) {
  background: #495e82;
  color: #fff;
}

.donor-page .placeholder {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(146, 222, 210, 0.5);
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding: 30px;
  min-height: 65vh;
  width: 83vw;

  color: rgb(118, 114, 114);
  font-size: 2rem;
}

/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
