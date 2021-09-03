<template>
  <div id="app">
    <NavBar />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
/* @import "./assets/styles/variables"; */
@import "./assets/styles/bootstrap";
:root {
  --color-bg-primary: #0d1117;
  --color-border-primary: #30363d;
  --color-green-primary: #42b983;
}
body {
  padding: 0;
  margin: 0;
  background-color: #0d1117;
}
#app {
  height: 100vh;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
