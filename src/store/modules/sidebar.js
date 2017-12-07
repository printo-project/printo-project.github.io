/* eslint-disable no-param-reassign */
import items from '@/components/Sidebar/sidebar-items';

export default {
  state: {
    items,
  },
  mutations: {
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
