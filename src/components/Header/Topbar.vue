<template>
  <div class="row header">
    <div class="col-md-2 offset-md-1">
      <image-upload />
    </div>
    <p class="text-uppercase font-weight-light d-flex align-items-lg-end" style="margin-left:2.5%;">OR</p>
    <div class="col-md-1">
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse-templates" aria-expanded="false" aria-controls="collapseExample">
        <i class="fa fa-clone" aria-hidden="true"></i> Use our templates
      </button>
    </div>

    <div class="col-md-4 offset-md-2">
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

.seperator {
  text-align: center;
}
</style>
