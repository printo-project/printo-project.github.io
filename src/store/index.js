/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';
import sidebar from './modules/sidebar';
import topbar from './modules/topbar';
import draggable from './modules/draggable';
import page from './modules/page';
import printable from './modules/printable';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sidebar,
    topbar,
    draggable,
    page,
    printable,
  },
  actions: {
    setState(context, state) {
      context.commit('setState', state);
    },
  },
  mutations: {
    setState(state, selectedState) {
      if(typeof selectedState != 'undefined' ){
        state.draggable = JSON.parse(JSON.stringify(selectedState.draggable));
        state.sidebar = JSON.parse(JSON.stringify(selectedState.sidebar));
        state.topbar = JSON.parse(JSON.stringify(selectedState.topbar));
        state.page = JSON.parse(JSON.stringify(selectedState.page));
        
        
      }
    },
  },
});
