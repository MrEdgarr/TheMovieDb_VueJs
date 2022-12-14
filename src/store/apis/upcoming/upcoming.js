import axios from "axios";
const state = {
  db_upcoming_movie: [],
  isLoading: false,
};

// getters
const getters = {
  db_upcoming_movie: (state) => state.db_upcoming_movie,
};

// actions
const actions = {
  async getUpcomingMovie({ commit }) {
    try {
      this.isLoading = true;
      const response = await axios.get(
        `${import.meta.env.VITE_API_HOST}movie/popular?api_key=${
          import.meta.env.VITE_API_KEY_1
        }&language=en-US&page=2`
      );
      this.isLoading = false;
      commit("setUpcomingMovie", response.data.results);
    } catch (error) {
      console.log(error);
    }
  },
};

// mutations
const mutations = {
  setUpcomingMovie(state, db) {
    state.db_upcoming_movie = db;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
