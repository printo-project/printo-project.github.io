import Vue from 'vue';
import Page from '@/components/Page';
import router from '@/routes';
import store from '@/store';

describe('Page.vue', () => {
  it('Background is empty.', () => {
    const Constructor = Vue.extend(Page);
    const vm = new Constructor({
      router,
      store,
    }).$mount();

    expect(vm.background).to.equal('');
  });
});
