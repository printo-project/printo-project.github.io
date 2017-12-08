<template>
  <div class="row header">
    <div class="col-md-3">
      <image-upload />
    </div>
    <div class="col-md-4 offset-md-4">
      <div class="float-right">
        <remove-buttons :disabled="noItemsExist" />
        <save-button :disabled="noItemsExist" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ImageUpload from './ImageUpload';
import RemoveButtons from './RemoveButtons';
import SaveButton from './SaveButton';

export default {
  name: 'Topbar',
  components: {
    ImageUpload,
    RemoveButtons,
    SaveButton,
  },
  computed: {
    noItemsExist() {
      return !(this.draggableItems.length > 0 || this.background !== '');
    },
    ...mapState({
      buttons: state => state.topbar.buttons,
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

.btn-danger {
  border: none;
}
</style>
