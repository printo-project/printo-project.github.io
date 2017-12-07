<template>
  <form action="myform.cgi"
    class="invoice-upload">
    <label class="btn btn-default btn-block">
      <span class="glyphicon glyphicon-file"
        aria-hidden="true"></span> Arkaplan Resmi Yükle
      <input type="file"
        name="fileupload"
        id="fileupload"
        value="value"
        @change="handleImageUpload"
        hidden>
    </label>
  </form>
</template>

<script>
export default {
  name: 'ImageUpload',
  data() {
    return {
      value: null,
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (FileReader && file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.$store.dispatch('setPageBackground', `url(${reader.result})`);
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      }
    },
  },
};
</script>

<style>
.invoice-upload {
  text-align: center;
  margin-bottom: 0;
}

[hidden] {
  display: none !important;
}
</style>
