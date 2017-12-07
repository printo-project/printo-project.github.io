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
    <div class="col-md-4">
      <div class="pull-right right-buttons">
        <remove-buttons :disabled="noItemsExist" />
        <save-button :disabled="noItemsExist" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ImageUpload from './ImageUpload';
import LineButton from './LineButton';
import RemoveButtons from './RemoveButtons';
import SaveButton from './SaveButton';

export default {
  name: 'Topbar',
  components: {
    ImageUpload,
    LineButton,
    RemoveButtons,
    SaveButton,
  },
  computed: {
    noItemsExist() {
      return !(this.draggableItems.length > 0 ||
        this.draggableLines.length > 0 ||
        this.background !== '');
    },
    ...mapState({
      buttons: state => state.topbar.buttons,
      draggableLines: state => state.draggable.lines,
      draggableItems: state => state.draggable.items,
      background: state => state.page.background,
    }),
  },
};
</script>

<style>
.header {
  margin-top: 24px;
  margin-bottom: 24px;
}

.right-buttons {
  padding-right: 16px;
}

.btn-danger {
  border: none;
}
</style>
