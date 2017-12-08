<template>
  <div class="page sheet" :style="{
      background: background,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    }" size="A4" id="invoice">

    <div v-for="(value, key) in individualData" :key="key" :style="{
      marginLeft: `${placements[key].x}px`,
      marginTop: `${placements[key].y}px`,
      width: placements[key].width,
      height: placements[key].height,
    }" style="position: absolute;">
      {{value}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Page',
  props: ['placements', 'individualData'],
  computed: {
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
