/* eslint-disable no-param-reassign */
export default {
  state: {
    buttons: [
      {
        id: 'header-line-button',
        y: 250,
        title: 'Ürün Liste Başlangıcı',
        text: 'Liste Başlangıcı',
        icon: 'glyphicon-tag',
        disabled: false,
      },
      {
        id: 'footer-line-button',
        y: 350,
        title: 'Ürün Listesi Bitişi',
        text: 'Liste Bitişi',
        icon: 'glyphicon-list',
        disabled: false,
      },
    ],
  },
  mutations: {
    toggleButtonState(state, itemIndex) {
      const button = state.buttons[itemIndex];
      button.disabled = !button.disabled;
    },

    enableAllButtons(state) {
      for (let i = 0; i < state.buttons.length; i += 1) {
        state.buttons[i].disabled = false;
      }
    },
  },
};
