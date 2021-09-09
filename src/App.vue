<template>
  <div id="app">
    <NavBar
      v-if="['Home', 'userDetail'].includes($route.name)"
      :isUserDetailsView="['userDetail'].includes($route.name)"
      :isAuthenticated="$auth.isAuthenticated"
    />
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
  --color-header-bg: #161b22;
  --color-header-text: rgba(240, 246, 252, 0.7);
  --color-text-primary: #c9d1d9;
  --color-bg-canvas: #0d1117;
  --color-text-secondary: #8b949e;
  --color-border-primary: #30363d;
  --color-avatar-border: rgba(240, 246, 252, 0.1);
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
