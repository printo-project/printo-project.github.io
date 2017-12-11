import Vue from 'vue';
import ImageUpload from '@/components/Header/ImageUpload';

describe('ImageUpload.vue', () => {
  it('handleImageUpload is function.', () => {
    const Constructor = Vue.extend(ImageUpload);
    const vm = new Constructor().$mount();

    expect(vm.handleImageUpload).to.be.a('function');
  });

  it('data function returns null value key.', () => {
    const Constructor = Vue.extend(ImageUpload);
    const vm = new Constructor().$mount();

    expect(vm.value).to.equal(null);
  });
});
