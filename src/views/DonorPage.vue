<template>
  <div class="donor-page">
    <h1>Sara Laura Marli Pereira</h1>
    <ContentContainer>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th width="40%">Data da doação</th>
              <th width="40%">Quantidade doada</th>
              <th width="20%">Status da doação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="40%">17/05/2021</td>
              <td width="40%">100 ml</td>
              <td width="20%" style="color: yellow">Aguardando cultura</td>
            </tr>
            <tr>
              <td width="40%">02/05/2021</td>
              <td width="40%">100 ml</td>
              <td width="20%" style="color: red">Indeferido</td>
            </tr>
            <tr>
              <td width="40%">03/02/2020</td>
              <td width="40%">100 ml</td>
              <td width="20%" style="color: green">Deferido</td>
            </tr>
            <tr>
              <td width="40%">20/01/2020</td>
              <td width="40%">100 ml</td>
              <td width="20%" style="color: green">Deferido</td>
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
  mounted() {},
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
  background: #495e82;
  color: #fff;
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