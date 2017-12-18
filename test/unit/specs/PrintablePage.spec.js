import Vue from 'vue';
import PrintablePage from '@/components/PrintablePage/PrintablePage';
import router from '@/routes';
import store from '@/store';

describe('PrintablePage.vue', () => {
  it('background is empty', () => {
    const Constructor = Vue.extend(PrintablePage);
    const vm = new Constructor({
      router,
      store,
    }).$mount();

    expect(vm.background).to.equal('');
  });
});
