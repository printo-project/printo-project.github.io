<template>
  <div class="page" :style="{ backgroundImage: background }" size="A4" id="invoice">
    <div v-for="(value, key) in individualData" :key="key" :style="{
      marginLeft: `${placements[key].x}px`,
      marginTop: `${placements[key].y}px`,
      width: placements[key].width,
      height: placements[key].height,
      backgroundImage: background,
    }">
      {{value}}
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
  props: ['placements', 'individualData'],
  computed: {
    distance() {
      return pageCount * 842;
    },
    ...mapState({
      background: state => state.page.background,
    }),
  },
};
</script>

<style>
.page[size='invitation'] {
  width: 21cm;
  height: 14.8cm;
}
.page[size='A4'] {
  width: 21cm;
  height: 29.7cm;
}
</style>
