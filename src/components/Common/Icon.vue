<template>
  <span class="glyphicon"
    :class="icon"
    aria-hidden="true" />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: String,
  },
};
</script>

<style>

</style>
