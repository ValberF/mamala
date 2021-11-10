<template>
  <div class="donor-list">
    <BodyContainer>
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
              <!-- <tr
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
                <td width="6%" class="icon-class">
                  <i class="fas fa-plus-circle"></i>
                </td>
                <td width="6%" class="icon-class">
                  <i class="fas fa-folder-open"></i>
                </td>
              </tr> -->
              <tr>
                <td width="34%">Sara Laura Marli Pereira</td>
                <td width="15%">13/08/1978</td>
                <td width="15%">(73) 98316-6048</td>
                <td width="22%">Tereza Beatriz</td>
                <td width="6%" class="icon-class" @click="newPregnancy">
                  <i class="fas fa-plus-circle"></i>
                </td>
                <td width="6%" class="icon-class">
                  <i class="fas fa-plus-circle"></i>
                </td>
                <td width="6%" class="icon-class">
                  <i class="fas fa-folder-open"></i>
                </td>
              </tr>
              <tr>
                <td width="34%">Fabiana Esther Lavínia Viana</td>
                <td width="15%">06/11/1987</td>
                <td width="15%">(73) 98250-3105</td>
                <td width="22%">Fátima Heloise</td>
                <td width="6%" class="icon-class" @click="newPregnancy">
                  <i class="fas fa-plus-circle"></i>
                </td>
                <td width="6%" class="icon-class">
                  <i class="fas fa-plus-circle"></i>
                </td>
                <td width="6%" class="icon-class">
                  <i class="fas fa-folder-open"></i>
                </td>
              </tr>
              <tr>
                <td width="34%">Marina Carolina Lopes</td>
                <td width="15%">05/03/1942</td>
                <td width="15%">(73) 98676-5810</td>
                <td width="22%">Brenda Laís Tatiane</td>
                <td width="6%" class="icon-class" @click="newPregnancy">
                  <i class="fas fa-plus-circle"></i>
                </td>
                <td width="6%" class="icon-class">
                  <i class="fas fa-plus-circle"></i>
                </td>
                <td width="6%" class="icon-class">
                  <i class="fas fa-folder-open"></i>
                </td>
              </tr>
              <tr>
                <td width="34%">Gabrielly Fabiana Lara Nunes</td>
                <td width="15%">25/05/1959</td>
                <td width="15%">(73) 98669-2385</td>
                <td width="22%">Mariane Vera Aurora</td>
                <td width="6%" class="icon-class" @click="newPregnancy">
                  <i class="fas fa-plus-circle"></i>
                </td>
                <td width="6%" class="icon-class">
                  <i class="fas fa-plus-circle"></i>
                </td>
                <td width="6%" class="icon-class">
                  <i class="fas fa-folder-open"></i>
                </td>
              </tr>
              <tr>
                <td width="34%">Rosângela Rafaela Ribeiro</td>
                <td width="15%">26/12/1986</td>
                <td width="15%">(73) 98879-0813</td>
                <td width="22%">Ana Milena Simone</td>
                <td width="6%" class="icon-class" @click="newPregnancy">
                  <i class="fas fa-plus-circle"></i>
                </td>
                <td width="6%" class="icon-class">
                  <i class="fas fa-plus-circle"></i>
                </td>
                <td width="6%" class="icon-class">
                  <i class="fas fa-folder-open"></i>
                </td>
              </tr>
              <tr>
                <td width="34%">Yasmin Sueli Mariah Vieira</td>
                <td width="15%">06/02/1944</td>
                <td width="15%">(73) 99785-7400</td>
                <td width="22%">Sophia Helena</td>
                <td width="6%" class="icon-class" @click="newPregnancy">
                  <i class="fas fa-plus-circle"></i>
                </td>
                <td width="6%" class="icon-class">
                  <i class="fas fa-plus-circle"></i>
                </td>
                <td width="6%" class="icon-class">
                  <i class="fas fa-folder-open"></i>
                </td>
              </tr>
              <tr>
                <td width="34%">Bianca Mariah Carvalho</td>
                <td width="15%">08/07/1943</td>
                <td width="15%">(73) 98233-3649</td>
                <td width="22%">Caroline Cláudia Emanuelly</td>
                <td width="6%" class="icon-class" @click="newPregnancy">
                  <i class="fas fa-plus-circle"></i>
                </td>
                <td width="6%" class="icon-class">
                  <i class="fas fa-plus-circle"></i>
                </td>
                <td width="6%" class="icon-class">
                  <i class="fas fa-folder-open"></i>
                </td>
              </tr>
              <tr>
                <td width="34%">Bárbara Andreia Lara Fernandes</td>
                <td width="15%">01/01/1975</td>
                <td width="15%">(73) 99902-3774</td>
                <td width="22%">Priscila Teresinha</td>
                <td width="6%" class="icon-class" @click="newPregnancy">
                  <i class="fas fa-plus-circle"></i>
                </td>
                <td width="6%" class="icon-class">
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
      <div class="modal">
        <h2>Doação</h2>
        <form action>
          <input
            type="number"
            id="amount"
            placeholder="Quantidade a ser doada"
          />
        </form>
        <button class="next">Doar</button>
      </div>
      <div id="overlay"></div>
    </BodyContainer>
  </div>
</template>

<script>
import axios from "axios";
import ContentContainer from "../components/ContentContainer";
import BodyContainer from "../components/BodyContainer";

export default {
  name: "DonorList",
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
    newPregnancy() {
      this.$router.push("register-donor-pre-natal");
    },
    showDonors() {
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
.donor-list .modal {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  background-color: #fefefe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 30vw;
  height: 30vh;
  position: absolute;
  padding: 20px;
  z-index: 11;
}

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

.donor-list .modal form {
}

.donor-list #overlay {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  z-index: 10;
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