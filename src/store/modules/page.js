/* eslint-disable no-param-reassign */
export default {
  state: {
    background: '',
  },
  actions: {
    setPageBackground(context, backgroundImage) {
      context.commit('setBackgroundImage', backgroundImage);
    },

    clearPageBackground(context) {
      context.commit('removeBackgroundImage');
    },
  },
  mutations: {
    setBackgroundImage(state, backgroundImage) {
      state.background = backgroundImage;
    },
    removeBackgroundImage(state) {
      state.background = '';
    },
  },
};
