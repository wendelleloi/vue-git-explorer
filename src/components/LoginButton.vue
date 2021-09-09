<template>
  <button class="btn btn-primary btn-block" @click="$emit('onClick')">
    <!-- v-if="!$auth.isAuthenticated" -->
    Log In
  </button>
</template>

<script>
export default {
  name: "LoginButton",
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
  },
};
</script>
