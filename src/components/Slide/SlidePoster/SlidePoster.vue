<template>
  <div className="sliderHome">
    <swiper
      :breakpoints="{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }"
      :slidesPerGroup="1"
      :loop="true"
      :speed="5000"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <img
          src="https://www.webstrot.com/html/moviepro/html/images/index_II/top-4.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://www.webstrot.com/html/moviepro/html/images/index_II/top-5.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://www.webstrot.com/html/moviepro/html/images/index_II/top-1.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://www.webstrot.com/html/moviepro/html/images/index_II/top-2.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://www.webstrot.com/html/moviepro/html/images/index_II/top-6.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://www.webstrot.com/html/moviepro/html/images/index_II/top-6.jpg"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// import required modules
import { Autoplay } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>

<style>
</style>