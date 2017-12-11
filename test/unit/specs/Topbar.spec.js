import Vue from 'vue';
import Topbar from '@/components/Header/Topbar';
import router from '@/routes';
import store from '@/store';

describe('Topbar.vue', () => {
  it('button item background are there.', () => {
    const Constructor = Vue.extend(Topbar);
    const vm = new Constructor({
      router,
      store,
    }).$mount();

    expect(vm.buttons).to.deep.equal([]);
    expect(vm.items).to.deep.equal([]);
  });
});
