/* eslint-disable no-param-reassign */

export default {
  state: {
    items: [],
    lines: [],
  },
  actions: {

    /**
     * Add a draggable object to the page, by disabling the menu item and creating a draggable.
     * @param {*} param0 - commit method of the context object.
     * @param {*} itemIndex - index of the clicked sidebar item.
     */
    addDraggableItem(context, { itemIndex, name }) {
      context.commit('toggleSidebarItem', itemIndex);
      context.commit('createDraggableItem', { itemIndex, name });
    },

    /**
     * Remove a draggable from the page, by removing the element and enabling sidebar item.
     * @param {*} param0 - commit method of the context object.
     * @param {*} param1 - payload of the action, with itemIndex and sidebarItemIndex params.
     */
    removeDraggableItem({ commit }, { itemIndex, parentIndex }) {
      commit('deleteDraggableItem', itemIndex);
      commit('toggleSidebarItem', parentIndex);
    },

    /**
     * Add a draggable line to the page.
     * @param {Object} context - action context.
     * @param {Number} itemIndex - index of the button that will be the parent of the line item.
     */
    addDraggableLine(context, itemIndex) {
      const button = context.rootState.topbar.buttons[itemIndex];
      context.commit('createDraggableLine', { itemIndex, button });
      context.commit('toggleButtonState', itemIndex);
    },

    /**
     * Remove a draggable line from the state and toggle the corresponding sidebar button.
     * @param {Object} context - action context.
     * @param {Object} param1 - object that contains the item index and its parent sidebar index.
     */
    removeDraggableLine(context, { index, parentIndex }) {
      context.commit('deleteDraggableLine', index);
      context.commit('toggleButtonState', parentIndex);
    },

    /**
     * Removes all draggable lines.
     * @param {Object} context - action context.
     */
    removeAllDraggableLines(context) {
      context.commit('deleteAllDraggableLines');
      context.commit('enableAllButtons');
    },

    /**
     * Removes all draggable blocks.
     * @param {Object} context - action context.
     */
    removeAllDraggableItems(context) {
      context.commit('deleteAllDraggableItems');
      context.commit('enableAllSidebarItems');
    },

    /**
     * Removes all draggable lines and blocks at once.
     * @param {Object} context - action context.
     */
    removeAllDraggables(context) {
      context.commit('deleteAllDraggableItems');
      context.commit('deleteAllDraggableLines');
      context.commit('enableAllSidebarItems');
    },

    moveDraggableItem(context, payload) {
      context.commit('moveDraggableItem', payload);
    },

    moveResizeDraggableItem(context, payload) {
      context.commit('moveDraggableItem', payload);
      context.commit('resizeDraggableItem', payload);
    },

    moveDraggableLine(context, payload) {
      context.commit('moveDraggableLine', payload);
    },
  },
  mutations: {
    moveDraggableItem(state, payload) {
      state.items[payload.index].x = payload.x;
      state.items[payload.index].y = payload.y;
    },

    resizeDraggableItem(state, payload) {
      state.items[payload.index].width = payload.width;
      state.items[payload.index].height = payload.height;
    },

    /**
     * Create and append a new draggable to the draggableItems.
     * @param {Number} itemIndex - index of the parent of the draggable element to be created.
     */
    createDraggableItem(state, { itemIndex, name }) {
      state.items.push({
        name,
        width: '130px',
        height: '100px',
        x: 0,
        y: 0,
        parentIndex: itemIndex,
      });
    },

    /**
     * Remove a draggable element from page and convert its sidebar element to enabled.
     * @param {Number} itemIndex - index of the draggable that will be removed.
     */
    deleteDraggableItem(state, itemIndex) {
      state.items.splice(itemIndex, 1);
    },

    /**
     * Create a draggable line item.
     * @param {Object} state - state of the module.
     * @param {Object} payload - the object that contains the itemIndex and button attributes.
     */
    createDraggableLine(state, { itemIndex, button }) {
      state.lines.push({
        title: button.title,
        y: button.y,
        parentIndex: itemIndex,
      });
    },

    moveDraggableLine(state, payload) {
      state.lines[payload.index].y = payload.y;
    },

    /**
     * Delete a draggable line item from the lines array of the state.
     * @param {Object} state - state of the module.
     * @param {Number} itemIndex - index of the item that will be removed.
     */
    deleteDraggableLine(state, itemIndex) {
      state.lines.splice(itemIndex, 1);
    },

    deleteAllDraggableLines(state) {
      state.lines.splice(0, state.lines.length);
    },

    deleteAllDraggableItems(state) {
      state.items.splice(0, state.items.length);
    },
  },
};
