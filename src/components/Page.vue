<template>
  <div class="col-md-8">
    <div class="page"
      :style="{ backgroundImage: background }"
      size="A4"
      id="invoice">
      <drag-container />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DragContainer from './Draggable/DragContainer';

export default {
  name: 'Page',
  components: {
    DragContainer,
  },
  computed: mapState({
    background: state => state.page.background,
  }),
};
</script>

<style>

</style>
