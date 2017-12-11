import Builder from '@/pages/Builder';

describe('Builder.vue', () => {
  it('sets the correct images data', () => {
    const defaultData = Builder.data();
    expect(defaultData.images).to.deep.equal([
      '/static/img/certificate/lq/2.jpg',
      '/static/img/certificate/lq/3.jpg',
      '/static/img/certificate/lq/4.jpg',
      '/static/img/certificate/lq/5.jpg',
      '/static/img/certificate/lq/6.jpg',
      '/static/img/certificate/lq/1.jpg',
    ]);
  });
});
