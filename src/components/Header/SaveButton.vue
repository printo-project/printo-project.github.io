<template>
  <router-link to="/builder/input" class="btn btn-success">
    <i class="fa fa-pencil" aria-hidden="true"></i> Enter data
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
