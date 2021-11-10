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
                <th width="10%" style="text-align: center">Distribuir</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr
                class="beneficiary-list-container"
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
                <td width="6%" class="icon-class">
                  <i class="fas fa-plus-circle"></i>
                </td>
                <td width="6%" class="icon-class">
                  <i class="fas fa-folder-open"></i>
                </td>
              </tr> -->
              <tr>
                <td width="30%">Corpo de Bombeiros</td>
                <td width="15%">(73) 3612-6230</td>
                <td width="35%">R. Dois Conjunto Urbis I, 926-972 - Jardim Primavera</td>
                <td width="10%" class="icon-class"><i class="fas fa-plus-circle"></i></td>
              </tr>
              <tr>
                <td width="30%">UBS Jose Edites </td>
                <td width="15%">(73) 3617-7550</td>
                <td width="35%">R. Floresta, 64 - São Caetano</td>
                <td width="10%" class="icon-class"><i class="fas fa-plus-circle"></i></td>
              </tr>
              <tr>
                <td width="30%">UBS Alberto Teixeira Barreto</td>
                <td width="15%">(73) 3215-6963</td>
                <td width="35%">R. Santa Rita, 442 - Califórnia</td>
                <td width="10%" class="icon-class"><i class="fas fa-plus-circle"></i></td>
              </tr>
              <tr>
                <td width="30%">UBS Dilson Cordier Monte Libano</td>
                <td width="15%">(73) 98669-2385</td>
                <td width="35%">R. 1 Lot Monte Libano, 261 - Castalia</td>
                <td width="10%" class="icon-class"><i class="fas fa-plus-circle"></i></td>
              </tr>
              <tr>
                <td width="30%">UBS Dr Calixto Midlej</td>
                <td width="15%">(73) 3616-1882</td>
                <td width="35%">42, R. e, 2 - Nova Itabuna</td>
                <td width="10%" class="icon-class"><i class="fas fa-plus-circle"></i></td>
              </tr>
              <tr>
                <td width="30%">Unidade De Saude Da Familia Lavignia Magalhaes</td>
                <td width="15%">(73) 99785-7400</td>
                <td width="35%">R. Aurora, 267-311 - Nossa Sra. da Conceição</td>
                <td width="10%" class="icon-class"><i class="fas fa-plus-circle"></i></td>
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
      listDonor: [],
    };
  },
  methods: {
    showBeneficiarys() {
      axios
        .get("http://localhost:5000/donor")
        .then((res) => {
          this.listDonor = res.data;
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