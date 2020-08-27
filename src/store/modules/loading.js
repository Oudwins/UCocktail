// This controls the behaviours of our loading spinners.
const state = {
 loading: false
};

const getters = {
 loading: state => {
  return state.loading;
 }
};

const mutations = {
 changeLoading: (state, payload) => {
  state.loading = payload;
 }
};


const actions = {
 changeLoading: ({ commit }, payload) => {
  commit('changeLoading', payload);
 }
};


export default {
 state,
 getters,
 mutations,
 actions
};