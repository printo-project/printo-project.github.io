<template>
  <div class="resize-container"
    id="resize-container">
    <draggable-line v-for="(line, index) in lines"
      :key="line.parentIndex"
      :title="line.title"
      :y="line.y"
      :index="index"
      :parentIndex="line.parentIndex" />

    <draggable-item v-for="(item, index) in items"
      :key="item.parentIndex"
      :item="item"
      :index="index" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DraggableItem from './DraggableItem';
import DraggableLine from './DraggableLine';

export default {
  name: 'DragContainer',
  components: {
    DraggableItem,
    DraggableLine,
  },
  computed: mapState({
    items: state => state.draggable.items,
    lines: state => state.draggable.lines,
  }),
};
</script>

<style>
.resize-container {
  width: 100%;
  height: 100%;
}
</style>
