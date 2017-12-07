<template>
  <div class="row header">
    <div class="col-md-3 col-md-offset-1">
      <image-upload />
    </div>
    <div class="col-md-2">
      <line-button :id="first.id"
        :y="first.y"
        :title="first.title"
        :text="first.text"
        :icon="first.icon" />
    </div>
    <div class="col-md-2">
      <line-button :id="second.id"
        :y="second.y"
        :title="second.title"
        :text="second.text"
        :icon="second.icon" />
    </div>
  </div>
</template>

<script>
import ImageUpload from './ImageUpload';
import LineButton from './LineButton';

export default {
  name: 'Topbar',
  components: {
    ImageUpload,
    LineButton,
  },
  data() {
    return {
      first: {
        id: 'header-line-button',
        y: '250',
        title: 'Fatura Antet Bitişi',
        text: 'Fatura Antet Başlangıcı Ekle',
        icon: 'glyphicon-tag',
      },
      second: {
        id: 'footer-line-button',
        y: '850',
        title: 'Fatura Ürün Listesi Bitişi',
        text: 'Fatura Ürün Liste Bitişi Ekle',
        icon: 'glyphicon-list',
      },
    };
  },
};
</script>

<style>
.header {
  margin-top: 24px;
  margin-bottom: 24px;
}
</style>
