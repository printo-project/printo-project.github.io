<template>
  <button type="button"
    class="btn btn-default line-creator"
    id=id
    data-y=y
    data-title=lineTitle>
    <span class="glyphicon" :class="icon"
      aria-hidden="true"></span>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'LineButton',
  props: ['id', 'y', 'lineTitle', 'icon', 'text'],
};
</script>

<style>

</style>
