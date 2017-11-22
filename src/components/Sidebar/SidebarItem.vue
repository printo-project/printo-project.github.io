<template>
  <li v-if="type == 'title'"
    class="nav-title">
    {{ title }}</li>

  <li v-else
    class="element"
    :data-title="title"
    @click="addItem()">
    <a href="#">{{ title }}</a>
  </li>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    title: String,
    type: {
      type: String,
      default: '',
    },
  },
  methods: {
    addItem() {
      console.log('emitting item');
      this.$emit('added');
    },
  },
};
</script>

<style>

</style>
