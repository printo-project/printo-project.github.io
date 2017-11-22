<template>
  <div class="resize-drag text-container"
    style="height: 100px; transform: translate(0px, 0px);"
    :id="id"
    :data-title="title"
    :data-x="x"
    :data-y="y">
    <a class="close">×</a>
    <span>{{ title }}</span>
  </div>
</template>

<script>
import Helpers from '../mixins/Helpers';

export default {
  name: 'DraggableItem',
  mixins: [Helpers],
  data() {
    return {
      id: this.generateUniqueId(),
      title: 'Ürün Birimi',
      x: 0,
      y: 0,
    };
  },
};
</script>

<style>

</style>
