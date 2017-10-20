<template>
  <div class="col-md-3 col-md-offset-1">
    <ul class="nav nav-pills nav-stacked with-shadow"
      id="sidebar">
    </ul>
  </div>
</template>

<script>
export default {
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
    createSidebarTitle(title) {
      const li = document.createElement('li');
      li.className = 'nav-title';
      li.textContent = title;

      return li;
    },

    createSidebarElement(title) {
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = title;

      const li = document.createElement('li');
      li.className = 'element';
      li.setAttribute('data-title', title);
      li.appendChild(a);

      return li;
    },

    constructSidebar(sidebarData) {
      const sidebar = document.getElementById('sidebar');
      let obj = {};
      let i = 0;

      for (i = 0; i < sidebarData.length; i += 1) {
        obj = sidebarData[i];
        sidebar.appendChild(this.createSidebarTitle(obj.title));

        obj.elements.forEach((element) => {
          sidebar.appendChild(this.createSidebarElement(element));
        });
      }
    },

  },
  mounted() {
    this.constructSidebar(this.sidebarData);
  },
};
</script>

<style>

</style>
