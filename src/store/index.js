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
});
