<template>
  <section class="upcom_main">
    <div class="upcom_main_title">
      <h3>Upcoming</h3>
    </div>
    <div class="scrollTest isFading">
      <MainUpcomingItem
        :db_upcoming_movie="db_upcoming_movie"
        :db_genre="db_genre"
      />
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MainUpcomingItem from "./MainUpcomingItem.vue";

// import "swiper/css";
export default {
  data() {
    return {
      dbAll: [],
      isActive: "Upcoming",
      isLoading: false,
    };
  },
  components: {
    MainUpcomingItem,
  },
  computed: {
    ...mapGetters(["db_upcoming_movie", "db_genre"]),
  },
  methods: {
    ...mapActions(["getUpcomingMovie", "getGenre"]),

    handleScroll() {
      const a = document.querySelector(".upcom_main_tab_content");
      a.addEventListener("scroll", (e) => {
        if (e.target.scrollLeft > 0) {
          document.querySelector(".scrollTest").classList.add("hidden");
        } else {
          document.querySelector(".scrollTest").classList.remove("hidden");
        }
      });
    },
  },
  mounted() {
    this.getUpcomingMovie();
    this.getGenre();
    this.handleScroll();
  },
};
</script>

<style lang="scss">
@import "MainUpcoming.scss";
</style>