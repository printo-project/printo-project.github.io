/* eslint-disable no-param-reassign */

export default {
  state: {
    items: [],
  },
  actions: {
    setSidebarItems(context, allItems) {
      context.commit('setSidebarItems', allItems);
    },
  },
  mutations: {
    setSidebarItems(state, allItems) {
      state.items = allItems;
    },

    /**
     * Toggle the disabled value of the given sidebar element.
     * @argument itemIndex - index of the item that will be removed.
     */
    toggleSidebarItem(state, itemIndex) {
      const item = state.items[itemIndex];
      item.disabled = !item.disabled;
    },

    enableAllSidebarItems(state) {
      for (let i = 0; i < state.items.length; i += 1) {
        state.items[i].disabled = false;
      }
    },
  },
};
