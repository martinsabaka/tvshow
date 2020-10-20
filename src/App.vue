<template>
  <div id="app">
    <Header />
    <b-container fluid>
      <PopularShows />
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import PopularShows from './pages/PopularShows.vue';

export default {
  name: 'App',
  components: {
    Header,
    PopularShows,
  }
}
</script>

<style>
* {
  margin: 0px !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
