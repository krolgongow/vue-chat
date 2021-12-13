<template>
  <button class="button" v-if="!link">
    <slot></slot>
  </button>
  <router-link class="button" v-else :to="link">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: ["link"],
};
</script>

<style scoped>
.button {
  width: 160px;
  height: 50px;
  margin: 10px 0 0;
  text-transform: uppercase;
  background-color: rgb(100, 182, 89);
  color: #eee;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  border: 0px;
  line-height: 50px;
  border-radius: 18px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
}
.button:hover {
  background-color: rgb(72, 146, 62);
}
</style>
