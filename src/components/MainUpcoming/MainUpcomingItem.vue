<template>
  <div class="upcom_main_tab_content">
    <div
      class="upcom_main_tab_content_item"
      v-for="item in db_upcoming_movie"
      :key="item.id"
    >
      <div class="upcom_main_tab_content_item_img">
        <!-- :src="getPosterURL(item.poster_path)"  -->
        <img
          :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
          :alt="item.original_title"
        />
        <div class="upcom_main_tab_content_item_img_overlay"></div>
        <div class="upcom_main_tab_content_item_img_btn">
          <ul>
            <li>
              <a :to="{ name: 'T_Home', params: { id: item.id } }" class="btn"
                >View Trailer</a
              >
            </li>
            <li>
              <a
                :to="{ name: 'moviedetail', params: { id: item.id } }"
                class="btn"
                >View Details</a
              >
            </li>
          </ul>
        </div>
        <div class="canvas">
          <div
            class="progress-circular"
            :style="{
              background: handleChart(item.vote_average),
            }"
          >
            <span class="value"> {{ voteFormart }}% </span>
          </div>
        </div>
      </div>
      <div class="tab_content_item_desc">
        <div class="tab_content_item_desc_box_inner">
          <div class="tab_content_item_desc_box_inner_text">
            <h3>
              <a :to="{ name: 'moviedetail', params: { id: item.id } }">{{
                item.original_title
              }}</a>
            </h3>
            <p>{{ getDbGenre(item.genre_ids) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["db_upcoming_movie", "db_genre"],
  components: {},
  mounted() {
    console.log(this.$route);
  },

  data() {
    return { voteFormart: "" };
  },
  methods: {
    getDbGenre(id) {
      let a = [];
      id.map((item) => {
        this.db_genre.map((ids) => {
          if (item === ids.id) {
            return (a = [...a, (a = ids.name)]);
          }
        });
      });
      return a.join(", ");
    },

    handleChart(chart) {
      let base = 10 ** 1;
      this.voteFormart = Math.round(chart * base);

      return `conic-gradient(
                rgba(30, 213, 169) ${chart * 36}deg,
                rgba(30, 213, 169, 0.2) 0deg
              )`;
    },
  },
};
</script>

<style scoped>
</style>