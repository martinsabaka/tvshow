<template>
  <div>
    <div>
      <b-row class="filter-buttons">
        <b-button-group class="filter-buttons__group">
          <b-button
            class="m-1"
            v-on:click="setFilter('All')"
            :class="{ selected: filter === 'All' }"
            >All Genres</b-button
          >
          <b-button
            class="m-1"
            v-on:click="setFilter('Drama')"
            :class="{ selected: filter === 'Drama' }"
            >Drama</b-button
          >
          <b-button
            class="m-1"
            v-on:click="setFilter('Romance')"
            :class="{ selected: filter === 'Romance' }"
            >Romance</b-button
          >
          <b-button
            class="m-1"
            v-on:click="setFilter('Action')"
            :class="{ selected: filter === 'Action' }"
            >Action</b-button
          >
          <b-button
            class="m-1"
            v-on:click="setFilter('Thriller')"
            :class="{ selected: filter === 'Thriller' }"
            >Thriller</b-button
          >
          <b-button
            class="m-1"
            v-on:click="setFilter('Science-Fiction')"
            :class="{ selected: filter === 'Science-Fiction' }"
            >Science-Fiction</b-button
          >
          <b-button
            class="m-1"
            v-on:click="setFilter('Crime')"
            :class="{ selected: filter === 'Crime' }"
            >Crime</b-button
          >
          <b-button class="m-1" v-on:click="filterShowsRating()"
            >Show best</b-button
          >
        </b-button-group>
      </b-row>
    </div>
    <b-list-group class="shows-list" horizontal>
      <b-list-group-item
        class="shows-list__item"
        v-for="show in filterShowsGenre(filter).slice(0, 21)"
        :key="show.id"
      >
        <ShowDetail v-bind:show="show" />
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import axios from "axios";
import ShowDetail from "../components/ShowDetail";

export default {
  name: "PopularShows",
  components: {
    ShowDetail
  },
  data() {
    return {
      fields: [
        { key: "name" },
        { key: "genres" },
        { key: "language" },
        { key: "rating" }
      ],
      shows: [],
      filter: "All"
    };
  },
  methods: {
    /**
     * Fetches data about shows
     */
    getShowData() {
      axios.get("http://api.tvmaze.com/shows").then(response => {
        this.shows = response.data;
      });
    },

    /**
     * Sets currently used filter
     */
    setFilter(filter) {
      this.filter = filter;
    },

    /**
     * Filters shows based on genre
     */
    filterShowsGenre() {
      if (this.filter === "All") {
        return this.shows;
      }

      return this.shows.filter(show => {
        return show.genres.includes(this.filter);
      });
    },

    /**
     * Filters by show rating
     */
    filterShowsRating() {
      return this.shows.sort(
        (a, b) => parseFloat(b.rating.average) - parseFloat(a.rating.average)
      );
    }
  },
  mounted() {
    this.getShowData();
  }
};
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

  .selected {
    background-color: #343a40;
  }

  @media (max-width: 768px) {
    &__group {
      display: inline-block;
    }
  }
}
</style>
