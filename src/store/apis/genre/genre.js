// initial state
import axios from "axios";
// import request from "../../../utils/request";
const state = {
  db_genre: [],
};

// getters
const getters = {
  db_genre: (state) => state.db_genre,
};

// actions
const actions = {
  async getGenre({ commit }) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_HOST}genre/movie/list?api_key=${
          import.meta.env.VITE_API_KEY_1
        }&language=en-US`
      );
      commit("setGenre", response.data.genres);
    } catch (error) {
      console.log(error);
    }
  },
};

// mutations
const mutations = {
  setGenre(state, db) {
    state.db_genre = db;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
