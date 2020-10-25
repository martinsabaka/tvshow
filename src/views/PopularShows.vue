<template>
  <div>
    <div>
      <b-row class="filter-buttons">
        <b-button-group class="filter-buttons__group">
          <b-button
            v-for="(genre, index) in genres"
            :key="index"
            class="m-1"
            @click="setFilter(genre)"
            :class="{ selected: filter === genre }"
          >
            {{ genre }}
          </b-button>
          <b-button
            class="m-1 ml-5 filter-buttons__group--sort-btn"
            variant="outline-info"
            @click="filterShowsGenre(!sortByRating)"
            :class="{ sorted: sortByRating }"
          >
            {{ sortByRating ? " Don't order" : "Order by rating" }}
          </b-button>
        </b-button-group>
      </b-row>
    </div>
    <b-list-group class="shows-list" horizontal>
      <b-list-group-item
        class="shows-list__item"
        v-for="show in filterShowsGenre(sortByRating).slice(0, 21)"
        :key="show.id"
      >
        <ShowDetail :show="show" />
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
      genres: [
        "All",
        "Action",
        "Adventure",
        "Anime",
        "Crime",
        "Drama",
        "Horror",
        "Romance",
        "Science-Fiction",
        "Thriller",
        "Western"
      ],
      shows: [],
      filter: "All",
      sortByRating: false
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
    filterShowsGenre(sortByRating) {
      let filteredShows;
      this.sortByRating = sortByRating;

      if (this.filter === "All") {
        filteredShows = this.shows.filter(show => {
          return show;
        });
      } else {
        filteredShows = this.shows.filter(show => {
          return show.genres.includes(this.filter);
        });
      }

      return this.sortByRating
        ? this.filterShowsRating(filteredShows)
        : filteredShows;
    },

    /**
     * Filters by show rating
     */
    filterShowsRating(shows) {
      return shows.sort(
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

  .sorted {
    color: white;
    background-color: #17a2b8;
  }

  &__group {
    display: initial;

    &--sort-btn {
      margin-left: 2rem;
      width: 12rem;
    }
  }

  @media (max-width: 768px) {
    &__group {
      display: inline-block;

      &--sort-btn {
        display: block;
        width: 100%;
        margin-left: 0 !important;
      }
    }
  }
}
</style>
