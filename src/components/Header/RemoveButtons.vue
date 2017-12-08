<template>
  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" :disabled="disabled">
      <i class="fa fa-trash" aria-hidden="true"></i> Kaldır
    </button>
    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a class="dropdown-item" @click="removeAllDraggableItems">Alanları Kaldır</a>
      <a class="dropdown-item" @click="clearPageBackground">Resmi Kaldır</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" @click="clearAllDraggables">Tümünü Temizle</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Icon from '@/components/Common/Icon';

export default {
  name: 'RemoveButtons',
  props: {
    disabled: Boolean,
  },
  components: {
    Icon,
  },
  methods: {
    clearAllDraggables() {
      this.removeAllDraggableItems();
      this.clearPageBackground();
    },
    ...mapActions([
      'removeAllDraggableItems',
      'clearPageBackground',
    ]),
  },
};
</script>

<style scoped>
.pull-right {
  padding-right: 137px;
}
</style>
