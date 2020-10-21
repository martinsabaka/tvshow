<template>
  <div>
    <div>
      <b-row class="filter-buttons">
        <b-button-group class="filter-buttons__group">
          <b-button class="m-1" v-on:click="filterShowsGenre('All')">All Genres</b-button>
          <b-button class="m-1" v-on:click="filterShowsGenre('Drama')">Drama</b-button>
          <b-button class="m-1" v-on:click="filterShowsGenre('Romance')">Romance</b-button>
          <b-button class="m-1" v-on:click="filterShowsGenre('Action')">Action</b-button>
          <b-button class="m-1" v-on:click="filterShowsGenre('Thriller')">Thriller</b-button>
          <b-button class="m-1" v-on:click="filterShowsGenre('Science-Fiction')">Science-Fiction</b-button>
          <b-button class="m-1" v-on:click="filterShowsGenre('Crime')">Crime</b-button>
          <b-button class="m-1" v-on:click="filterShowsRating()">Best </b-button>
        </b-button-group>
      </b-row>
    </div>
    <b-list-group class="shows-list" horizontal>
      <b-list-group-item 
        class="shows-list__item" 
        v-for="show in (filtered.isFiltered  ? filtered.shows.slice(0,21) : shows.slice(0, 21))" 
        :key="show.id">
          <ShowDetail v-bind:show="show" />
      </b-list-group-item>
    </b-list-group> 
  </div>
</template>

<script>
import axios from 'axios';
import ShowDetail from '../components/ShowDetail'

export default {
  name: 'PopularShows',
  components: {
    ShowDetail
  },
  data() {
    return {
      fields: [
        { key: 'name' },
        { key: 'genres' },
        { key: 'language' },
        { key: 'rating' },
      ],
      shows: [],
      filtered: {
        isFiltered: false,
        shows: []
      }
    }
  },
  methods: {
    /**
     * Fetches data about shows
     */
    getShowData() {
      axios
        .get('http://api.tvmaze.com/shows')
        .then(response => {
          this.shows = response.data;
        });
    },

    /**
     * Filters shows based on genre
     */
    filterShowsGenre(filter) {
      if (filter === 'All') {
        this.filtered.isFiltered = false;
        return;
      }
      
      this.filtered = { 
        isFiltered: true, 
        shows: this.shows.filter(show => {
          return show.genres.includes(filter);
        })
      }
    }
  },
  mounted() {
    this.getShowData();
  }
}
</script>

<style lang="scss" scoped>
  .shows-list {
    flex-wrap: wrap;
    justify-content: center;

    &__item {
      border: 0px;
    }
  }

  .filter-buttons {
    justify-content: center;

    @media (max-width: 768px) {
      &__group {
        display: inline-block;
      }      
    }
  }
</style>