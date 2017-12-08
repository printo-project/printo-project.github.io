/* eslint-disable no-param-reassign */
export default {
  state: {
    items: [],
  },
  actions: {
    setItems(context, items) {
      context.commit('setItems', items);
    },
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
  },
};
