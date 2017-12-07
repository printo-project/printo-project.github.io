<template>
  <li v-if="item.isTitle !== undefined"
    class="nav-title">
    {{ item.name }}
  </li>

  <li v-else
    class="element"
    :class="{disabled: this.item.disabled}"
    @click="addDraggableItem({itemIndex: index, name: item.name})">
    <a href="#">{{ item.name }}</a>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SidebarItem',
  props: {
    item: Object,
    index: Number,
  },
  methods: mapActions([
    'addDraggableItem',
  ]),
};
</script>

<style>

</style>
