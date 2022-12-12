// initial state
import axios from "axios";
// import request from "../../../utils/request";
const state = {
  db_popular: [],
};

// getters
const getters = {
  db_popular: (state) => state.db_popular,
};

// actions
const actions = {
  async getPopular({ commit }) {
    const response = await axios.get(
      `${import.meta.env.VITE_API_HOST}movie/popular?api_key=${
        import.meta.env.VITE_API_KEY_1
      }&language=en-US`
    );
    commit("setPopular", response.data.results);
  },
};

// mutations
const mutations = {
  setPopular(state, db) {
    state.db_popular = db;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
