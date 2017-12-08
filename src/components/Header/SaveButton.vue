<template>
  <router-link to="/builder/input" class="btn btn-success">
    <i class="fa fa-floppy-o" aria-hidden="true"></i> Save
  </router-link>
</template>

<script>
import Icon from '@/components/Common/Icon';

export default {
  name: 'SaveButton',
  props: {
    disabled: Boolean,
  },
  components: {
    Icon,
  },
  methods: {
    saveLayout() {
      // TODO: implement layout save methods.
    },
  },
};
</script>

<style>

</style>
