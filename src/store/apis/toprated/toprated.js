// initial state
import axios from "axios";
// import request from "../../../utils/request";
const state = {
  db_toprate: [],
};

// getters
const getters = {
  db_toprate: (state) => state.db_toprate,
};

// actions
const actions = {
  async getToprate({ commit }) {
    const response = await axios.get(
      `${import.meta.env.VITE_API_HOST}movie/top_rated?api_key=${
        import.meta.env.VITE_API_KEY_1
      }&language=en-US`
    );
    commit("setToprate", response.data.results);
  },
};
// mutations
const mutations = {
  setToprate(state, db) {
    state.db_toprate = db;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
