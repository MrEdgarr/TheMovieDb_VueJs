<template>
  <div>
    <MainNavVue />
    <Slide />
    <MainUpcoming/>
  </div>
</template>

<script>
import MainUpcoming from "./components/MainUpcoming/MainUpcoming.vue";
import MainNavVue from "./components/MainNav/MainNav.vue";
import Slide from "./components/Slide/Slide.vue";
export default {
  components: {
    MainNavVue,
    Slide,
    MainUpcoming,
  },
};
</script>

<style>
</style>
