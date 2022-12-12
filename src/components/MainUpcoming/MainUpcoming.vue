<template>
  <section class="upcom_main">
    <div class="upcom_main_title">
      <h3>{{ isActive }}</h3>
    </div>
    <div class="upcom_main_tabs">
      <ul>
        <li
          v-for="(item, index) in tabs"
          :key="index"
          @click="handleTabs(item, $event)"
          ref="selected"
        >
          <a :class="{ active: isActive === item.name }">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <div class="scrollTest isFading">
      <MainUpcomingItem
        :db_upcommit_movie="getTabsShowMovie()"
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
      tabs: [
        { id: 1, name: "Upcoming" },
        { id: 2, name: "Top Rated" },
        { id: 3, name: "Popular" },
      ],
      isActive: "Upcoming",
      isLoading: false,
    };
  },
  components: {
    MainUpcomingItem,
  },
  computed: {
    ...mapGetters([
      "db_upcommit_movie",
      "db_genre",
      "db_toprate",
      "db_popular",
    ]),
  },
  methods: {
    ...mapActions(["getUpcomingMovie", "getGenre", "getPopular", "getToprate"]),

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
    handleTabs(value) {
      const textTabs = this.$refs.selected[value.id - 1].innerText;
      if (value.name.toLowerCase() === textTabs.toLowerCase()) {
        this.setDbAll(value.id);
        return (this.isActive = textTabs);
      }
    },
    setDbAll(value) {
      this.tabs.map((item) => {
        if (item.id === value) {
          if (value === 2) {
            return (this.dbAll = this.db_toprate);
          } else if (value === 3) {
            return (this.dbAll = this.db_popular);
          } else {
            return (this.dbAll = this.db_upcommit_movie);
          }
        }
      });
    },
    getTabsShowMovie() {
      if (this.dbAll.length > 0) {
        return this.dbAll;
      }
      return this.db_upcommit_movie;
    },
  },
  mounted() {
    this.getUpcomingMovie();  
    this.getGenre();
    this.getPopular();
    this.getToprate();
    this.handleScroll();
  },
};
</script>

<style lang="scss">
@import "MainUpcoming.scss";
</style>