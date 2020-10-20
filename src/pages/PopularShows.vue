<template>
  <div>
    <b-list-group class="shows-list" horizontal>
      <b-list-group-item v-for="show in shows" :key="show.id">
        <!--<b-img class="shows-list--thumbnail" rounded :src="show.image.medium"></b-img>
        <div class="shows-list__detail">
          <b class="shows-list__detail--title">{{ show.name }}</b>
          {{ show.genres.toString() }}<br />
          {{ show.premiered }}<br />
          {{ show.rating.average }}
        </div>
        <div class="shows-list--title">
          {{ show.name }}
        </div>-->
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
      shows: []
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

    &--thumbnail {
      object-fit: cover;

      &:hover {
        filter: brightness(40%);
      }
    }

    &__detail {
      display: none;
      position: absolute;
      left: 2rem;
      top: 2rem;
      color: white;
      font-size: 14px;

      &--title {
        display: block;
        padding-bottom: 1rem;
        font-size: 16px;
      }
    }

    &--thumbnail:hover + &__detail {
      display: block;
    }

    &--title {
      font-weight: bold;
      text-align: center;
    }
  }
</style>