<template>
  <div class="spin">
    <div class="spin__spinner-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinner"
};
</script>

<style lang="scss" scoped>
.spin {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 10;

  &__spinner-ring {
    display: inline-block;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 80px;
      height: 80px;
      margin: 8px;
      border: 8px solid #343a40;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #343a40 transparent transparent transparent;

      &:nth-child(1) {
        animation-delay: -0.8s;
      }
    }
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
