<template>
  <div class="beneficiary-list">
    <BodyContainer>
      <h1>PONTOS DE DISTRIBUIÇÃO</h1>
      <ContentContainer>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th width="30%">Nome</th>
                <th width="15%">Contato</th>
                <th width="35%">Endereço</th>
                <th width="10%">Estoque</th>
                <th width="10%" style="text-align: center">Distribuir</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="beneficiary-list-container"
                v-for="value in listBeneficiary"
                :key="value.donor_id"
              >
                <td width="30%">{{ value.beneficiary_name }}</td>
                <td width="15%">{{ value.beneficiary_phoneNumber }}</td>
                <td width="35%">{{ value.address }}</td>
                <td width="10%">10ml</td>
                <td width="10%" class="icon-class">
                  <i class="fas fa-plus-circle"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ContentContainer>
    </BodyContainer>
  </div>
</template>

<script>
import axios from "axios";
import ContentContainer from "../components/ContentContainer";
import BodyContainer from "../components/BodyContainer";

export default {
  name: "BeneficiaryList",
  components: {
    ContentContainer,
    BodyContainer,
  },
  data() {
    return {
      listBeneficiary: [],
    };
  },
  methods: {
    showBeneficiarys() {
      axios
        .get("http://localhost:5000/beneficiary")
        .then((res) => {
          this.listBeneficiary = res.data;
          for (let i = 0; i < res.data.length; i++) {
            axios
              .get(
                `http://localhost:5000/address/${this.listBeneficiary[i].address_id}`
              )
              .then((res) => {
                this.listBeneficiary[i].address =
                  res.data.address_street +
                  ", " +
                  res.data.address_number +
                  ", " +
                  res.data.address_district;
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.showBeneficiarys();
  },
  computed: {
    register() {
      return this.$store.state.register;
    },
  },
};
</script>

<style>
.beneficiary-list h1 {
  display: flex;
  justify-self: flex-start;

  color: #575757;

  width: 85vw;
}

.beneficiary-list .table-container {
  overflow-y: scroll;
  min-height: 100%;
  height: 65vh;
}

.beneficiary-list table {
  border-collapse: collapse;
  width: 100%;
}

.beneficiary-list th {
  position: sticky;
  top: 0;
  z-index: 5;
  background: #dff0e6;
}

.beneficiary-list th,
td {
  padding: 1rem;
  text-align: left;
  font-size: 17px;
  font-weight: bold;
}

.beneficiary-list tbody {
  border: none;
}

.beneficiary-list tbody tr:nth-child(odd) {
  background: #495e82;
  color: #fff;
}

.beneficiary-list .icon-class {
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  transition: 0.2s;
}

.beneficiary-list .icon-class:hover {
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
