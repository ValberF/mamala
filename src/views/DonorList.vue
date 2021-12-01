<template>
  <div class="donor-list">
    <h1>LISTA DE DOADORAS</h1>
    <ContentContainer>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th width="20%">Nome</th>
              <th width="15%">Data de Nascimento</th>
              <th width="15%">Contato</th>
              <th width="22%">Nome da mãe</th>
              <th width="6%">Nova Gravidez</th>
              <th width="6%">Nova Doação</th>
              <th width="6%">Doações</th>
              <th width="10%">Pré-Natal/Pós-parto</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="donor-list-container"
              v-for="value in listDonor"
              :key="value.donor_id"
            >
              <td width="20%">{{ value.donor_name }}</td>
              <td width="15%">{{ value.donor_birthDate }}</td>
              <td width="15%">{{ value.donor_phoneNumber }}</td>
              <td width="22%">{{ value.donor_grandmother }}</td>
              <td width="6%" class="icon-class" @click="newPregnancy(value)">
                <i class="fas fa-plus-circle"></i>
              </td>
              <td width="6%" class="icon-class" @click="donation(value)">
                <i class="fas fa-plus-circle"></i>
              </td>
              <td width="6%" class="icon-class" @click="donationList(value)">
                <i class="fas fa-folder-open"></i>
              </td>
              <td width="10%" class="icon-class" @click="getExams(value)">
                <i class="far fa-file-alt"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ContentContainer>
    <Modal />
    <ModalExams />
  </div>
</template>

<script>
import axios from "axios";
import ContentContainer from "../components/ContentContainer";
import Modal from "../components/Modal.vue";
import ModalExams from "../components/ModalExams.vue";
import { baseApiUrl } from "../global";
import { calculaIdade, formatData } from "../utils/functions";

export default {
  name: "DonorList",
  components: {
    ContentContainer,
    Modal,
    ModalExams,
  },
  data() {
    return {
      listDonor: [],
    };
  },
  methods: {
    newPregnancy(actualDonor) {
      this.$store.state.actualDonor = actualDonor;
      this.$router.push("register-donor-pre-natal");
    },
    showDonors() {
      axios
        .get(baseApiUrl + "/donor")
        .then((res) => {
          res.data.forEach((element) => {
            element.donor_birthDate = formatData(element.donor_birthDate);
          });

          this.listDonor = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    donation(actualDonor) {
      let flag = false;
      axios
        .get(baseApiUrl + "/postnatal")
        .then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            let idade = calculaIdade(formatData(res.data[i].postnatal_birthDate))

            if (res.data[i].donor_id == actualDonor.donor_id && idade < 2) {
              flag = true;
            }
          }
        })
        .then(() => {
          if (flag) {
            this.$store.state.actualDonor = actualDonor;
            this.$store.state.isVisible.status = true;
            this.$store.state.isVisible.modalType = "donor";
          } else {
            alert(
              "Sem exame cadastrado ou doadora não está em condições de doar!"
            );
          }
        });
    },
    donationList(actualDonor) {
      this.$store.state.actualDonor = actualDonor;
      this.$router.push("donor-page");
    },
    getExams(actualDonor) {
      this.$store.state.actualDonor = actualDonor;
      axios
        .get(baseApiUrl + "/prenatal")
        .then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].donor_id == actualDonor.donor_id) {
              Object.assign(this.prenatalData, res.data[i]);
            }
          }
        })
        .then(() => {
          axios
            .get(baseApiUrl + "/postnatal")
            .then((res) => {
              for (let i = 0; i < res.data.length; i++) {
                if (
                  res.data[i].donor_id == actualDonor.donor_id &&
                  res.data[i].prenatal_id == this.prenatalData.prenatal_id
                ) {
                  res.data[i].postnatal_birthDate = res.data[
                    i
                  ].postnatal_birthDate.split("T");
                  res.data[i].postnatal_birthDate =
                    res.data[i].postnatal_birthDate[0];
                  res.data[i].postnatal_birthDate = res.data[
                    i
                  ].postnatal_birthDate.split("-");
                  res.data[i].postnatal_birthDate =
                    res.data[i].postnatal_birthDate[2] +
                    "/" +
                    res.data[i].postnatal_birthDate[1] +
                    "/" +
                    res.data[i].postnatal_birthDate[0];
                  if (res.data[i].postnatal_typeBirth == 0) {
                    res.data[i].postnatal_typeBirth = "normal";
                  } else {
                    res.data[i].postnatal_typeBirth = "cesáreo";
                  }
                  Object.assign(this.postnatalData, res.data[i]);
                }
              }
            })
            .then(() => {
              axios
                .get(
                  `http://localhost:5000/obstetrician/${this.postnatalData.obstetrician_id}`
                )
                .then((res) => {
                  this.postnatalData.obstetrician_name =
                    res.data.obstetrician_name;
                  this.postnatalData.obstetrician_phoneNumber =
                    res.data.obstetrician_phoneNumber;
                  this.$store.state.isVisibleExams = true;
                });
            });
        });
    },
  },
  mounted() {
    this.showDonors();
  },
  computed: {
    register() {
      return this.$store.state.register;
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
  background-color: #dff0e6;
  border-radius: 10px;
}

.donor-list table {
  border-collapse: collapse;
  width: 100%;
}

.donor-list thead {
  background-color: #b4cabd;
}

.donor-list tr {
  border-bottom: 1px solid #b4cabd;
}

.donor-list th {
  position: sticky;
  top: 0;
  z-index: 5;
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
  border: none;
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
