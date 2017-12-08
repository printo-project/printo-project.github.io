/* eslint-disable no-param-reassign */
export default {
  state: {
    entries: [],
  },
  actions: {
    setEntries(context, entries) {
      context.commit('setEntries', entries);
    },
  },
  mutations: {
    setEntries(state, entries) {
      state.entries = entries;
    },
  },
};
