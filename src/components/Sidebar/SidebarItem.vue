<template>
  <li v-if="item.isTitle !== undefined"
    class="nav-title">
    {{ item.name }}
  </li>

  <li v-else
    class="element"
    :class="{disabled: this.item.disabled}"
    @click="addItem">
    <a href="#">{{ item.name }}</a>
  </li>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: Object,
    index: Number,
  },
  methods: {
    addItem() {
      this.$store.dispatch('addDraggable', this.index);
    },
  },
};
</script>

<style>

</style>
