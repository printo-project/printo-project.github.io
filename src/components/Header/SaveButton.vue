<template>
  <button type="button"
    class="btn btn-default"
    :disabled="disabled">
    <icon :icon="'glyphicon glyphicon-floppy-disk'" /> Kaydet
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
