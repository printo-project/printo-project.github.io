import Vue from 'vue';
import Index from '@/pages/Index';
import router from '@/routes';

describe('Index.vue', () => {
  it('Invitation card title is there.', () => {
    const Constructor = Vue.extend(Index);
    const vm = new Constructor({ router }).$mount();

    expect(vm.$el.querySelector('#invitation-title').textContent).to.equal('Wedding Invitation');
  });

  it('Invoice card title is there.', () => {
    const Constructor = Vue.extend(Index);
    const vm = new Constructor({ router }).$mount();

    expect(vm.$el.querySelector('#invoice-title').textContent).to.equal('Invoice');
  });

  it('Certificate card test is there.', () => {
    const Constructor = Vue.extend(Index);
    const vm = new Constructor({ router }).$mount();

    expect(vm.$el.querySelector('#certificate-title').textContent).to.equal('Certificate');
  });
});
