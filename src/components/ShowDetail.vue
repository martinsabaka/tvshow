<template>
  <router-link :to="`/detail/${show.id}`">
    <div class="show-item">
      <b-img
        class="show-item--thumbnail"
        rounded
        :src="show.image.medium"
      ></b-img>
      <div class="show-item__detail">
        <b class="show-item__detail--title">{{ show.name }}</b>
        {{ show.genres.toString() }}<br />
        {{ show.premiered.substring(0, 4) }}<br />
        {{ show.rating.average }}
      </div>
      <div class="show-item--title">
        {{ show.name }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ShowDetail",
  props: ["show"]
};
</script>

<style lang="scss" scoped>
a {
  color: black;
}

.show-item {
  &--thumbnail {
    object-fit: cover;
  }

  &--thumbnail:hover {
    filter: brightness(40%);
  }

  &__detail {
    pointer-events: none;
    display: none;
    padding-right: 1rem;
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
