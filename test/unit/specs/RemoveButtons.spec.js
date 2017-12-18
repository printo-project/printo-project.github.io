import Vue from 'vue';
import RemoveButtons from '@/components/Header/RemoveButtons';
import router from '@/routes';
import store from '@/store';

describe('RemoveButtons.vue', () => {
  it('clearAllDraggables is function.', () => {
    const Constructor = Vue.extend(RemoveButtons);
    const vm = new Constructor({
      router,
      store,
    }).$mount();

    vm.clearAllDraggables();
    expect(true).to.equal(true);
  });
});
