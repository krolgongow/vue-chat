<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  created() {
    this.$store.dispatch("tryLogin");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #eee;
  font-family: "Lato", sans-serif;
}
form {
  display: flex;
  flex-direction: column;
}
</style>
