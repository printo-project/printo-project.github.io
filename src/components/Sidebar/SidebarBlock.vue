<template>
  <span class="nav">
    <item :type="'title'"
      :title="title" />
    <item v-for="element in elements"
      :key="element.id"
      :title="element" @added="addItem()" />
  </span>
</template>

<script>
import Item from './SidebarItem';

export default {
  name: 'SidebarBlock',
  components: {
    Item,
  },
  props: ['title', 'elements'],
  methods: {
    addItem() {
      console.log('emitting block');
      this.$emit('added');
    },
  },
};
</script>

<style>

</style>
