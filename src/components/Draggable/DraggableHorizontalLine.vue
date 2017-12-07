<template>
  <div class="line-drag row"
    id="header-drag"
    data-x="0"
    :data-y="{y}"
    :style="{style}">

    <span class="col-md-4 col-md-offset-4">
      {{ title }}
    </span>
    <a class="close col-md-1 col-md-offset-2">
      ×
    </a>
  </div>
</template>

<script>
export default {
  name: 'DraggableHorizontalLine',
  props: {
    title: String,
    y: Number,
  },
  computed: {
    style() {
      return {
        transform: `translate(0px, ${this.y}px)`,
      };
    },
  },
}
</script>

<style>

</style>
