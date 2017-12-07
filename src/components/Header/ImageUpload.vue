<template>
  <form action="myform.cgi"
    class="invoice-upload">
    <input type="file"
      name="fileupload"
      value="fileupload"
      id="fileupload"
      @change="handleImageUpload">
  </form>
</template>

<script>
export default {
  name: 'ImageUpload',
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
</style>
