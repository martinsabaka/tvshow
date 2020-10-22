<template>
  <div id="app">
    <Spinner v-if="loading" />
    <Header />
    <b-container class="content" fluid>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Spinner from "./components/Spinner.vue";
import Bus from "./eventBus";

export default {
  name: "App",
  components: {
    Header,
    Spinner
  },
  data() {
    return {
      loading: false
    };
  },
  updated() {
    Bus.$on("toggleSpinner", isLoading => {
      this.loading = isLoading;
    });
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
