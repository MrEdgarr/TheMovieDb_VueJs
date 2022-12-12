<template>
  <div>
    <SlidePoster />
    <SlideUpComings :db_upcoming_movie="db_upcoming_movie" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SlidePoster from "./SlidePoster/SlidePoster.vue";
import SlideUpComings from "./SlideUpComing/SlideUpComings.vue";
export default {
  components: {
    SlidePoster,
    SlideUpComings,
  },
  data() {
    return {
      // modules: [Autoplay],
    };
  },
  computed: {
    ...mapGetters(["db_upcoming_movie"]),
  },
  methods: {
    ...mapActions(["getUpcomingMovie"]),
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  },
  mounted() {
    this.getUpcomingMovie();
  },
};
</script>

<style lang="scss">
@import "Slide.scss";
</style>