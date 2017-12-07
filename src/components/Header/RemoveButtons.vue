<template>
  <div class="btn-group">
    <button type="button"
      class="btn btn-danger dropdown-toggle"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      :disabled="disabled">
      <icon :icon="'glyphicon glyphicon-remove'" /> Kaldır
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <li>
        <a href="#"
          @click="removeAllDraggableItems">
          Alanları Kaldır
        </a>
      </li>
      <li>
        <a href="#"
          @click="removeAllDraggableLines">
          Çizgileri Kaldır
        </a>
      </li>
      <li>
        <a href="#"
          @click="clearPageBackground">
          Resmi Kaldır
        </a>
      </li>
      <li role="separator"
        class="divider"></li>
      <li>
        <a href="#"
          @click="clearAllDraggables">
          Tümünü Temizle
        </a>
      </li>
    </ul>
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
      this.removeAllDraggableLines();
      this.clearPageBackground();
    },
    ...mapActions([
      'removeAllDraggableItems',
      'removeAllDraggableLines',
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
