<template>
<div>
  sdfsdfd
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DataInput',
  data() {
    return {
      name: 'Name',
    };
  },
  computed: mapState({
    items: state => state.sidebar.items,
  }),
};
</script>

<style>

</style>
