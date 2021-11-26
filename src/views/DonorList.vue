<template>
  <div class="donor-list">
    <h1>LISTA DE DOADORAS</h1>
    <ContentContainer>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th width="30%">Nome</th>
              <th width="15%">Data de Nascimento</th>
              <th width="15%">Contato</th>
              <th width="22%">Nome da mãe</th>
              <th width="6%">Nova Gravidez</th>
              <th width="6%">Nova Doação</th>
              <th width="6%">Doações</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="donor-list-container"
              v-for="value in listDonor"
              :key="value.donor_id"
            >
              <td width="34%">{{ value.donor_name }}</td>
              <td width="15%">{{ value.donor_birthDate }}</td>
              <td width="15%">{{ value.donor_phoneNumber }}</td>
              <td width="22%">{{ value.donor_grandmother }}</td>
              <td width="6%" class="icon-class" @click="newPregnancy">
                <i class="fas fa-plus-circle"></i>
              </td>
              <td width="6%" class="icon-class" @click="donation( value )">
                <i class="fas fa-plus-circle"></i>
              </td>
              <td width="6%" class="icon-class">
                <i class="fas fa-folder-open"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ContentContainer>
    <Modal />
  </div>
</template>

<script>
import axios from "axios";
import ContentContainer from "../components/ContentContainer";
import Modal from "../components/Modal.vue";

export default {
  name: "DonorList",
  components: {
    ContentContainer,
    Modal,
  },
  data() {
    return {
      listDonor: [],
    };
  },
  methods: {
    newPregnancy() {
      this.$router.push("register-donor-pre-natal");
    },
    showDonors() {
      axios
        .get("http://localhost:5000/donor")
        .then((res) => {
          res.data[0].donor_birthDate = res.data[0].donor_birthDate.split("T");
          res.data[0].donor_birthDate = res.data[0].donor_birthDate[0];
          res.data[0].donor_birthDate = res.data[0].donor_birthDate.split("-");
          res.data[0].donor_birthDate =
            res.data[0].donor_birthDate[2] +
            "/" +
            res.data[0].donor_birthDate[1] +
            "/" +
            res.data[0].donor_birthDate[0];
          this.listDonor = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    donation(actualDonor) {
      this.$store.state.actualDonor = actualDonor
      this.$store.state.isVisible = true;
    },
  },
  mounted() {
    this.showDonors();
  },
  computed: {
    register() {
      return this.$store.state.register;
    },
  },
};
</script>

<style>
.donor-list button {
  border: none;
  cursor: pointer;
  font-size: 25px;
  outline: none;
  color: #fff;
  border-radius: 10px;

  width: 8vw;
  height: 40px;
}

.donor-list .modal input {
  color: #777;
  font-size: 25px;
  border-radius: 5px;
  border: 1px solid #7b7b7b;
  padding: 5px;

  outline: none;
}

.donor-list h1 {
  display: flex;
  justify-self: flex-start;

  color: #575757;

  width: 85vw;
}

.donor-list .table-container {
  overflow-y: scroll;
  min-height: 100%;
  height: 65vh;
}

.donor-list table {
  border-collapse: collapse;
  width: 100%;
}

.donor-list th {
  position: sticky;
  top: 0;
  z-index: 5;
  background: #dff0e6;
}

.donor-list th,
td {
  padding: 1rem;
  text-align: left;
  font-size: 17px;
  font-weight: bold;
}

.donor-list tbody {
  border: 1px solid #7b7b7b;
  border-top: none;
  border-right: none;
}

.donor-list tbody tr:nth-child(odd) {
  background: #495e82;
  color: #fff;
}

.donor-list .icon-class {
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  transition: 0.2s;
}

.donor-list .icon-class:hover {
  font-size: 25px;
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
