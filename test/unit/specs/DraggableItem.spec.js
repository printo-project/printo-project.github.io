import Vue from 'vue';
import DraggableItem from '@/components/Draggable/DraggableItem';
import router from '@/routes';
import store from '@/store';

describe('DraggableItem.vue', () => {
  it('Item name is true.', () => {
    const item = {
      name: 'TestItem',
      width: '130px',
      height: '100px',
      x: 0,
      y: 0,
      parentIndex: 1,
    };

    const Constructor = Vue.extend(DraggableItem);
    const vm = new Constructor({
      router,
      store,
      propsData: {
        item,
        number: 1,
      },
    }).$mount();

    expect(vm.$el.querySelector('span').textContent).to.equal(item.name);
  });
});
