const sidebarData = [{
    title: "Kişisel Bilgiler",
    elements: [
      "Müşteri Adı",
      "Müşteri Ünvanı",
      "Müşteri Adresi",
      "Müşteri Telefonu",
      "Vergi Dairesi",
      "Vergi Numarası",
      "Düzenlenme Tarihi"
    ]
  },
  {
    title: "Fatura Bilgileri",
    elements: [
      "Fatura No",
      "İrsaliye No",
      "Fiili Sevk Tarihi",
      "Fiili Sevk Saati",
      "Sevk Adresi",
      "Ödeme Tarihi",
      "Müşteri Bakiyesi"
    ]
  },
  {
    title: "Ürün Bilgileri",
    elements: [
      "Ürün Fiyatı",
      "Ürün Kodu",
      "Ürün Adı",
      "Ürün Birimi",
      "Ürün Adedi",
      "Ürün Tutarı"
    ]
  },
  {
    title: "Meblağ Bilgileri",
    elements: [
      "Ara Toplam",
      "Toplam İndirim",
      "Toplam KDV",
      "Vergi Matrahı",
      "Genel Toplam",
      "Yazı ile Toplam"
    ]
  }
];

function createSidebarTitle(title) {
  var li = document.createElement('li');
  li.className = 'nav-title';
  li.textContent = title;

  return li;
}

function createSidebarElement(title) {
  var a = document.createElement('a');
  a.href = '#';
  a.textContent = title;

  var li = document.createElement('li');
  li.className = 'element';
  li.setAttribute('data-title', title);
  li.appendChild(a);

  return li;
}

function constructSidebar(sidebarData) {
  var sidebar = document.getElementById('sidebar');

  for (var i = 0; i < sidebarData.length; i++) {
    var obj = sidebarData[i];
    sidebar.appendChild(createSidebarTitle(obj.title));

    obj.elements.forEach(function(element) {
      sidebar.appendChild(createSidebarElement(element));
    });
  }
}

constructSidebar(sidebarData);