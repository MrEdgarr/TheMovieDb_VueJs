// initial state
const state = {
  barsClickShow: false,
  searchClickShow: false,
  useClickShow: false,
};

// getters
const getters = {
  barsClickShow: (state) => state.barsClickShow,
  searchClickShow: (state) => state.searchClickShow,
  useClickShow: (state) => state.useClickShow,
};

// actions
const actions = {
  barsHandleClickShow({ commit }, payload) {
    commit("barsHandleClickShow", payload);
  },
  searchHandleClickShow({ commit }, payload) {
    commit("searchHandleClickShow", payload);
  },
  useHandleClickShow({ commit }, payload) {
    commit("useHandleClickShow", payload);
  },
};

// mutations
const mutations = {
  barsHandleClickShow(state, bars) {
    state.searchClickShow = false;
    state.useClickShow = false;
    return (state.barsClickShow = bars);
  },
  searchHandleClickShow(state, search) {
    state.useClickShow = false;
    state.barsClickShow = false;
    return (state.searchClickShow = search);
  },
  useHandleClickShow(state, use) {
    state.barsClickShow = false;
    state.searchClickShow = false;
    return (state.useClickShow = use);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
