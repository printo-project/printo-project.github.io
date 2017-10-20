<template>
  <div class="page"
    size="A4"
    id="invoice">
    <drag-container />
  </div>
</template>

<script>
import DragContainer from './Draggable/DragContainer';

export default {
  name: 'Page',
  components: {
    DragContainer,
  },
};
</script>

<style>

</style>
