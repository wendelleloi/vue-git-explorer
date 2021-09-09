<template>
  <div class="full-screen">
    <img alt="Vue logo" src="../assets/404.svg" />
  </div>
</template>

<script>
export default {
  name: "404",
};
</script>

<style lang="scss">
.full-screen {
  display: flex;
  flex: 1;
  height: 100%;
  img {
    margin: 0 auto;
    width: 80%;
    height: 100%;
  }
}
</style>
