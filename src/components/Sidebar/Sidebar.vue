<template>
  <div class="col-md-3 col-md-offset-1">
    <ul class="nav nav-pills nav-stacked with-shadow"
      id="sidebar">
      <sidebar-block v-for="block in sidebarData"
        :key="block.id"
        :title="block.title"
        :elements="block.elements" @added="addItem()" />
    </ul>
  </div>
</template>

<script>
import SidebarBlock from './SidebarBlock';

export default {
  components: {
    SidebarBlock,
  },
  data() {
    return {
      sidebarData: [
        {
          title: 'Kişisel Bilgiler',
          elements: [
            'Müşteri Adı',
            'Müşteri Ünvanı',
            'Müşteri Adresi',
            'Müşteri Telefonu',
            'Vergi Dairesi',
            'Vergi Numarası',
            'Düzenlenme Tarihi',
          ],
        },
        {
          title: 'Fatura Bilgileri',
          elements: [
            'Fatura No',
            'İrsaliye No',
            'Fiili Sevk Tarihi',
            'Fiili Sevk Saati',
            'Sevk Adresi',
            'Ödeme Tarihi',
            'Müşteri Bakiyesi',
          ],
        },
        {
          title: 'Ürün Bilgileri',
          elements: [
            'Ürün Fiyatı',
            'Ürün Kodu',
            'Ürün Adı',
            'Ürün Birimi',
            'Ürün Adedi',
            'Ürün Tutarı',
          ],
        },
        {
          title: 'Meblağ Bilgileri',
          elements: [
            'Ara Toplam',
            'Toplam İndirim',
            'Toplam KDV',
            'Vergi Matrahı',
            'Genel Toplam',
            'Yazı ile Toplam',
          ],
        },
      ],
    };
  },
  methods: {
    addItem() {
      console.log('emitting sidebar');
      this.$emit('added');
    },
  },
};
</script>

<style>

</style>
