<template>
  <div id="app">
    <Header />
    <Content/>
  </div>
</template>

<script>
import Header from './templates/Header'
import Content from './templates/Content'

export default {
  components: {
    Header,
    Content
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-color: #bbd5ed;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#back {
  background-color: #DC6464;
}

#next {
  background-color: #83D283;
}
</style>
