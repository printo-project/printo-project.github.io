import Vue from 'vue';
import Sidebar from '@/components/Sidebar/Sidebar';
import router from '@/routes';
import store from '@/store';

describe('Sidebar.vue', () => {
  it('items are there.', () => {
    const Constructor = Vue.extend(Sidebar);
    const vm = new Constructor({
      router,
      store,
    }).$mount();

    expect(vm.items).to.deep.equal([]);
  });
});
