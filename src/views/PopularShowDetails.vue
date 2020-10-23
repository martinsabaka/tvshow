<template>
  <div>
    <b-container fluid>
      <b-row class="show" v-if="show.image">
        <b-col cols="12" md="5" xl="3">
          <b-img class="show-image" rounded :src="show.image.original"></b-img>
        </b-col>
        <b-col cols="12" md="7" xl="3">
          <div class="show__detail">
            <h1>
              <b>{{ show.name }}</b> ({{ show.premiered.substring(0, 4) }})
            </h1>
            <i>{{ show.genres.toString() }}</i>
            <br />
            <div class="show__detail--details">
              <b>Language: </b> {{ show.language }}<br />
              <b>Runtime: </b> {{ show.runtime }} minutes<br />
              <b>Status: </b> {{ show.status }}<br />
              <b>Average rating: </b> {{ show.rating.average }}<br />
              <a
                v-if="show.externals.imdb"
                :href="'https://www.imdb.com/title/' + show.externals.imdb"
              >
                <img
                  class="show__detail--details--imdb-icon"
                  src="@/assets/imdb-icon.jpg"
                />
              </a>
              <a v-if="show.officialSite" :href="show.officialSite">
                Official Site
              </a>
              <p
                class="show__detail--details--summary"
                v-html="show.summary"
              ></p>
            </div>
          </div>
        </b-col>
      </b-row>
      <div class="show__go-back">
        <b-button to="/" variant="info">Go to shows list</b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PopularShowDetails",
  data() {
    return {
      show: {}
    };
  },
  methods: {
    /**
     * Fetches data about show
     */
    getShowDetailsData() {
      this.$emit("loading", true);

      axios
        .get("http://api.tvmaze.com/shows/" + this.$route.params.id)
        .then(response => {
          this.show = response.data;
        });
    }
  },
  mounted() {
    this.getShowDetailsData();
  },
  beforeRouteUpdate(to) {
    this.$route.params.id = to.params.id;
    this.getShowDetailsData();
  }
};
</script>

<style lang="scss" scoped>
.show-image {
  width: 100%;
}

.show {
  justify-content: center;

  &__detail {
    h1 {
      text-transform: uppercase;
    }

    &--details {
      padding-top: 2rem;

      a:hover {
        text-decoration: none;
      }

      &--imdb-icon {
        width: 50px;
      }

      &--summary {
        padding-top: 2rem;
      }
    }
  }

  &__go-back {
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-align: center;
  }
}
</style>
