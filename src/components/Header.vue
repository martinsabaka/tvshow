<template>
  <div class="header">
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand>
        <router-link class="mr-4" to="/">SHOWS LIST</router-link>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            v-model="showSearchInput"
            placeholder="Search"
          ></b-form-input>
          <b-button
            size="sm"
            class="my-2 my-sm-0"
            v-on:click="searchShow(showSearchInput)">
            Search
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",
  data() {
    return {
      showSearchInput: ""
    };
  },
  methods: {
    searchShow(input) {
      axios
        .get("http://api.tvmaze.com/singlesearch/shows?q=" + input)
        .then(response => {
          this.$router.push("/detail/" + response.data.id);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  a {
    color: white;

    &:hover {
      color: grey;
      text-decoration: none;
    }
  }
}
</style>
