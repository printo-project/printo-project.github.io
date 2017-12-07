/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import sidebarItems from '../components/Sidebar/sidebar-items';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarItems,
    draggableItems: [],
    draggableLines: [],
    pageBackground: '',
  },
  actions: {
    /**
     * Add a draggable object to the page, by disabling the menu item and creating a draggable.
     * @param {*} param0 - commit method of the context object.
     * @param {*} itemIndex - index of the clicked sidebar item.
     */
    addDraggable({ commit }, itemIndex) {
      commit('toggleSidebarItem', itemIndex);
      commit('createDraggableItem', itemIndex);
    },

    // TODO: add draggable line creator action and mutations.

    /**
     * Remove a draggable from the page, by removing the element and enabling sidebar item.
     * @param {*} param0 - commit method of the context object.
     * @param {*} param1 - payload of the action, with itemIndex and sidebarItemIndex params.
     */
    removeDraggable({ commit }, { itemIndex, sidebarItemIndex }) {
      commit('deleteDraggableItem', itemIndex);
      commit('toggleSidebarItem', sidebarItemIndex);
    },

    setPageBackground({ commit }, backgroundImage) {
      commit('setBackgroundImage', backgroundImage);
    },
  },
  mutations: {
    /**
     * Create and append a new draggable to the draggableItems.
     * @argument itemIndex - index of the parent of the draggable element to be created.
     */
    createDraggableItem(state, itemIndex) {
      state.draggableItems.push({
        name: state.sidebarItems[itemIndex].name,
        parentIndex: itemIndex,
      });
    },

    /**
     * Remove a draggable element from page and convert its sidebar element to enabled.
     * @argument itemIndex - index of the draggable that will be removed.
     */
    deleteDraggableItem(state, itemIndex) {
      state.draggableItems.splice(itemIndex, 1);
    },

    /**
     * Toggle the disabled value of the given sidebar element.
     * @argument itemIndex - index of the item that will be removed.
     */
    toggleSidebarItem(state, itemIndex) {
      const updatedBlock = state.sidebarItems[itemIndex];
      updatedBlock.disabled = !updatedBlock.disabled;
      state.sidebarItems.splice(itemIndex, 1, updatedBlock);
    },

    setBackgroundImage(state, backgroundImage) {
      state.pageBackground = backgroundImage;
    },
  },
});
