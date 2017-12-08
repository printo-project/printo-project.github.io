<template>
  <div class="container">

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DataInput',
  data() {
    return {
      placements: {},
    };
  },
  computed: mapState({
    items: state => state.draggable.items,
  }),
  created() {
    this.placements = {};
    for (let i = 0; i < this.items.length; i += 1) {
      this.placements[this.items[i].name] = this.items[i];
    }

    console.log('placements set');
    console.log(this.placements);
  },
  methods: {},
};
</script>

<style scoped>
button:not(#save-button) {
  cursor: pointer;
  width: 40px;
}
th {
  text-align: center;
}
h1 {
  padding-top: 5vh;
  padding-bottom: 5vh;
}
</style>
