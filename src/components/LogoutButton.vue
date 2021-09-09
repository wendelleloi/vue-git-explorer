<template>
  <button class="btn btn-danger btn-block" @click.prevent="$emit('onClick')">
    <!-- v-if="$auth.isAuthenticated" -->
    Log Out
  </button>
</template>

<script>
export default {
  name: "LogoutButton",
  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push({ path: "/" });
    },
  },
};
</script>
