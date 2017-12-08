<template>
  <button class="btn btn-outline-success" type="button" :disabled="disabled">
    <i class="fa fa-floppy-o" aria-hidden="true"></i> Kaydet
  </button>
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
