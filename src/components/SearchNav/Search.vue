<template>
  <div>
    <button type="submit" class="searchMobile">
      <font-awesome-icon icon="fas fa-search" />
    </button>
    <div class="nav-search">
      <input type="text" placeholder="search" />
      <button type="submit"><font-awesome-icon icon="fas fa-search" /></button>
      <ListSearchNav />
    </div>
  </div>
</template>

<script>
import ListSearchNav from "../ListSearchNav/ListSearchNav.vue";

export default {
  components: {
    ListSearchNav,
  },
};
</script>

<style>
@import "Search.scss";
</style>