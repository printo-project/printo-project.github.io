import Vue from 'vue';
import DataInput from '@/pages/DataInput';
import router from '@/routes';
import store from '@/store';

describe('DataInput.vue', () => {
  it('items is empty.', () => {
    const Constructor = Vue.extend(DataInput);
    const vm = new Constructor({
      router,
      store,
    }).$mount();

    expect(vm.items).to.deep.equal([]);
  });
});
