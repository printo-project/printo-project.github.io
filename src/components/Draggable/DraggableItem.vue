<template>
  <div style="height: 100px; transform: translate(0px, 0px);"
    class="resize-drag text-container"
    :data-x="x"
    :data-y="y">
    <a class="close"
      @click="removeItem">×</a>
    <span>{{ item.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'DraggableItem',
  props: {
    item: Object,
    index: Number,
  },
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
  methods: {
    removeItem() {
      this.$store.dispatch('removeDraggable', {
        itemIndex: this.index,
        sidebarItemIndex: this.item.parentIndex,
      });
    },
  },
};
</script>

<style>
.resize-drag {
  background-color: rgba(3, 93, 206, 0.5);
  color: white;
  font-size: 20px;
  font-family: sans-serif;
  border-radius: 8px;
  min-height: 40px;
  min-width: 50px;
  width: 150px;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
}

.text-container {
  text-align: center;
  height: 100%;
}

.text-container span {
  display: block;
  position: relative;
  top: 50%;
  font-size: 12px;
  width: 90%;
  transform: translateY(-50%);
}
</style>
