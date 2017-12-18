<template>
  <button type="button"
    class="btn btn-default"
    :class="{disabled: button.disabled, righty: index === 1}"
    @click="addDraggableLine(index)">

    <icon :icon="button.icon" /> {{ button.text }}
  </button>
</template>

<script>
import { mapActions } from 'vuex';
import Icon from '../Common/Icon';

export default {
  name: 'LineButton',
  components: {
    Icon,
  },
  props: {
    button: Object,
    index: Number,
  },
  methods: mapActions([
    'addDraggableLine',
  ]),
};
</script>

<style>
.righty {
  margin-left: 4px;
}
</style>
