<template>
  <li v-if="item.isTitle !== undefined" class="nav-title">
    {{ item.name }}
  </li>

  <li v-else class="element nav-item" :class="{disabled: this.item.disabled}" @click="addDraggableItem({itemIndex: index, name: item.name})">
    <a href="javascript:void(0);" class="nav-link">{{ item.name }}</a>
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
  methods: mapActions(['addDraggableItem']),
};
</script>

<style>

</style>
