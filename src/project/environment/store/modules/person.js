// initial state
const state = {
  testdata: false,
};

// getters
const getters = {};

// actions
const actions = {
  testfn({ commit }) {
    commit('UPDATA_TESTDATA', true);
  },
};

// mutations
const mutations = {
  UPDATA_TESTDATA(state, status) {
    state.testdata = status;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
