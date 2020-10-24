<template>
  <div>
    <h1>Something went wrong!</h1>

    <div class="go-back">
      <b-button to="/" variant="info">Go to shows list</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultError"
};
</script>

<style lang="scss" scoped>
.go-back {
  padding-top: 2rem;
}
</style>
