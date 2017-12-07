<template>
  <div class="pull-right">
    <button type="button"
      class="btn btn-default"
      @click="removeAllDraggableItems">
      <icon :icon="'glyphicon-remove'" /> Alanları Kaldır</button>
    <button type="button"
      class="btn btn-default"
      @click="removeAllDraggableLines">
      <icon :icon="'glyphicon-trash'"/> Çizgileri Kaldır</button>

    <button type="button"
      class="btn btn-default"
      @click="clearPageBackground">
      <icon :icon="'glyphicon-ban-circle'"/> Resmi Kaldır</button>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Icon from '@/components/Common/Icon';

export default {
  name: 'RemoveButtons',
  components: {
    Icon,
  },
  methods: mapActions([
    'removeAllDraggableItems',
    'removeAllDraggableLines',
    'clearPageBackground',
  ]),
};
</script>

<style scoped>
.pull-right {
  padding-right: 137px;
}
</style>
