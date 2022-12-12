<template>
  <div :class="searchClickShow ? 'search__mobile show' : 'search__mobile'">
    <input type="text" placeholder="search" />
    <button type="submit">
      <font-awesome-icon icon="fas fa-search" />
    </button>
    <ListSearchNav />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListSearchNav from "../ListSearchNav/ListSearchNav.vue";
export default {
    computed: {
        ...mapGetters(["searchClickShow"]),
    },
    components: { ListSearchNav }
};
</script>

<style>
</style>