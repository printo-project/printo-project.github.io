import Vue from 'vue';
import Printer from '@/pages/Printer';
import router from '@/routes';
import store from '@/store';

describe('Printer.vue', () => {
  it('sets empty placements', () => {
    const defaultData = Printer.data();
    expect(Object.keys(defaultData.placements).length).to.equal(0);
  });
  it('items are there.', () => {
    const Constructor = Vue.extend(Printer);
    const vm = new Constructor({
      router,
      store,
    }).$mount();

    expect(vm.items).to.deep.equal([]);
    expect(vm.entries).to.deep.equal([]);
  });
});
