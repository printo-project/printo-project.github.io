<template>
  <div class="container">
    <printable-page v-for="(entry, index) in entries" :key="index" :placements="placements" :individualData="entry" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PrintablePage from '@/components/PrintablePage/PrintablePage';

export default {
  name: 'DataInput',
  components: {
    PrintablePage,
  },
  data() {
    return {
      placements: {},
    };
  },
  computed: mapState({
    items: state => state.draggable.items,
    entries: state => state.printable.entries,
  }),
  created() {
    this.placements = {};
    for (let i = 0; i < this.items.length; i += 1) {
      this.placements[this.items[i].name] = this.items[i];
    }
  },
  methods: {},
};
</script>

<style>
@media print {
  .container,
  .container-fluid {
    padding-left: 0 !important;
  }

  .container {
    margin-left: 0;
  }
}
</style>
