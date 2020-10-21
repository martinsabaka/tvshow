<template>
  <div id="app">
    <Header />
    <b-container class="content" fluid>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
* {
  margin: 0px !important;
}

.content {
  padding-top: 2rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
