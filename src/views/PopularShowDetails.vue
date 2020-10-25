<template>
  <div>
    <b-container fluid>
      <b-row class="show" v-if="showDetail.image">
        <b-col cols="12" md="5" xl="3">
          <b-img
            class="show-image"
            rounded
            :src="showDetail.image.original"
          ></b-img>
        </b-col>
        <b-col cols="12" md="7" xl="3">
          <div class="show__detail">
            <h1>
              <b>{{ showDetail.name }}</b> ({{
                showDetail.premiered.substring(0, 4)
              }})
            </h1>
            <i>{{ showDetail.genres.toString() }}</i>
            <br />
            <div class="show__detail--details">
              <p>
                <b>Language: </b> {{ showDetail.language }}<br />
                <b>Runtime: </b> {{ showDetail.runtime }} minutes<br />
                <b>Status: </b> {{ showDetail.status }}<br />
                <b>Average rating: </b> {{ showDetail.rating.average }}<br />
                <a
                  v-if="showDetail.externals.imdb"
                  :href="
                    'https://www.imdb.com/title/' + showDetail.externals.imdb
                  "
                >
                  <img
                    class="show__detail--details--imdb-icon"
                    src="@/assets/imdb-icon.jpg"
                  />
                </a>
                <a
                  v-if="showDetail.officialSite"
                  :href="showDetail.officialSite"
                >
                  Official Site
                </a>
              </p>
              <p
                class="show__detail--details--summary"
                v-html="showDetail.summary"
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PopularShowDetails",
  data() {
    return {
      show: {}
    };
  },
  methods: {
    ...mapActions(["fetchShowDetails"])
  },
  computed: mapGetters(["showDetail"]),
  created() {
    this.fetchShowDetails(this.$route.params.id);
  },
  beforeRouteUpdate(to) {
    this.$route.params.id = to.params.id;
    this.fetchShowDetails(this.$route.params.id);
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
