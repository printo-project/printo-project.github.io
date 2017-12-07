<template>
  <div class="row header">
    <div class="col-md-3 col-md-offset-1">
      <image-upload />
    </div>
    <div class="col-md-3">
      <line-button v-for="(button, index) in buttons"
        :key="button.id"
        :button="button"
        :index="index" />
    </div>
    <div class="col-md-5">
      <remove-buttons />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ImageUpload from './ImageUpload';
import LineButton from './LineButton';
import RemoveButtons from './RemoveButtons';

export default {
  name: 'Topbar',
  components: {
    ImageUpload,
    LineButton,
    RemoveButtons,
  },
  computed: mapState({
    buttons: state => state.topbar.buttons,
  }),
};
</script>

<style>
.header {
  margin-top: 24px;
  margin-bottom: 24px;
}
</style>
