import Vue from 'vue';
import Index from '@/pages/Index';

describe('Index.vue', () => {
  it('Title is there', () => {
    const Constructor = Vue.extend(Index);
    const vm = new Constructor().$mount();

    expect(vm.$el.querySelector('h1.display-3').textContent).to.equal('Design & Print');
  });
});
