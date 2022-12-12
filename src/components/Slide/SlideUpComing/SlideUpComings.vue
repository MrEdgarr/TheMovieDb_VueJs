<template>
  <div className="sliderHome_upcoming">
    <div className="sliderHome_upcoming_heading">
      <img
        src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        alt=""
      />
      <h3>LATEST AND UPCOMING MOVIES</h3>
    </div>
    <div className="sliderHome_upcoming_heading_slider">
      <swiper
        :breakpoints="{
          480: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
          1480: { slidesPerView: 4 },
        }"
        :slidesPerGroup="1"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :speed="3000"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="items in db_upcommit_movie" :key="items.id">
          <div className="sliderHome_upcoming_heading_slider_context">
            <router-link
              :to="{ name: 'moviedetail', params: { id: items.id } }"
            >
              <img :src="getPosterURL(items.backdrop_path)" alt="" />
            </router-link>
            <h4>
              Aquaman &nbsp;&nbsp;
              <span> release on 30 nov </span>
            </h4>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["db_upcommit_movie"],
  data() {
    return {
      modules: [Autoplay],
    };
  },
  methods: {
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  },
};
</script>

<style>
</style>