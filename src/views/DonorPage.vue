<template>
  <div class="donor-page">
    <h1>Raimunda Mariah Débora Vieira</h1>
    <ContentContainer>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th width="36%">Nome</th>
              <th width="17%">CPF</th>
              <th width="17%">Contato</th>
              <th width="25%">E-mail</th>
              <th width="5%"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="36%">Valber Francisco dos Santos</td>
              <td width="17%">071.090.015-55</td>
              <td width="17%">(73) 98835-4652</td>
              <td width="25%">valberfrsantos@gmail.com</td>
              <td width="5%" class="icon-class">
                <i class="fas fa-folder-open"></i>
              </td>
            </tr>
            <tr>
              <td width="36%">Valber Francisco dos Santos</td>
              <td width="17%">071.090.015-55</td>
              <td width="17%">(73) 98835-4652</td>
              <td width="25%">valberfrsantos@gmail.com</td>
              <td width="5%" class="icon-class">
                <i class="fas fa-folder-open"></i>
              </td>
            </tr>
            <tr>
              <td width="36%">Valber Francisco dos Santos</td>
              <td width="17%">071.090.015-55</td>
              <td width="17%">(73) 98835-4652</td>
              <td width="25%">valberfrsantos@gmail.com</td>
              <td width="5%" class="icon-class">
                <i class="fas fa-folder-open"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ContentContainer>
  </div>
</template>

<script>
import ContentContainer from "../components/ContentContainer";

export default {
  name: "DonorPage",
  components: {
    ContentContainer,
  },
  data() {
    return {};
  },
  methods: {
    mostrarDados() {
      console.log(this.register);
    },
  },
  computed: {
    register() {
      return this.$store.state.register;
    },
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

.donor-page h1 {
  display: flex;
  justify-self: flex-start;

  color: #575757;

  width: 85vw;
}

.donor-page .table-container {
  overflow-y: scroll;
  min-height: 100%;
}

.donor-page table {
  border-collapse: collapse;
  width: 100%;
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

.donor-page tbody tr:nth-child(odd) {
  background: rgb(196, 188, 188);
  color: #fff;
}

.donor-page .icon-class {
  cursor: pointer;
  font-size: 20px;
  transition: 0.2s;
}

.donor-page .icon-class:hover {
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