<template>
  <div class="nav-container">
    <nav class="navbar navbar-expand-md navbar-light">
      <div class="container">
        <button
          button
          type="button"
          class="btn btn-success"
          @click="$router.push({ name: 'Home' })"
          v-if="isUserDetailsView"
        >
          <!-- v-if="['userDetail'].includes($route.name)" -->
          Voltar
        </button>
        <!-- <MainNav /> -->
        <div class="navbar-nav ml-auto">
          <div>
            <LogoutButton v-if="isAuthenticated" @onClick="logout" />
            <LoginButton v-if="!isAuthenticated" @onClick="login" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import MainNav from '@/components/MainNav';
// import AuthNav from "../components/AuthNav";
// import AuthenticationButton from "../components/AuthenticationButton";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

export default {
  name: "NavBar",
  components: { LoginButton, LogoutButton },
  props: {
    isUserDetailsView: {
      type: Boolean,
      required: true,
    },
    isAuthenticated: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout();
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss">
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
.nav-container {
  background-color: var(--color-header-bg);
  color: var(--color-header-text);
}
</style>
