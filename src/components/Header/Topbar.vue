<template>
  <div class="row header">
    <div class="col-md-3 col-md-offset-1">
      <image-upload/>
    </div>
    <div class="col-md-2">
      <line-button :id="'header-line-button'"
        :y="'230'"
        :title="'Fatura Antet Bitişi'"
        :text="'Fatura Antet Başlangıcı Ekle'"
        :icon="'glyphicon-tag'" />
    </div>
    <div class="col-md-2">
      <line-button :id="'footer-line-button'"
        :y="'850'"
        :title="'Fatura Ürün Listesi Bitişi'"
        :text="'Fatura Ürün Liste Bitişi Ekle'"
        :icon="'glyphicon-list'" />
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
};
</script>

<style>

</style>
