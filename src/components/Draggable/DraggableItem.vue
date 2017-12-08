<template>
  <div :style="style" class="resize-drag text-container" :id="validId" :data-x="item.x" :data-y="item.y">
    <a class="close" @click="removeDraggableItem({itemIndex: index, parentIndex: item.parentIndex})">×</a>
    <span>{{ item.name }}</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { interact } from 'interactjs';

export default {
  name: 'DraggableItem',
  props: {
    item: Object,
    index: Number,
  },
  methods: {
    dragMoveListener(event, item, index, isResize = false) {
      let xCoord = item.x;
      let yCoord = item.y;

      if (isResize) {
        // update the element's style
        const width = `${event.rect.width}px`;
        const height = `${event.rect.height}px`;

        // translate when resizing from top or left edges
        xCoord += event.deltaRect.left;
        yCoord += event.deltaRect.top;

        this.moveResizeDraggableItem({
          index,
          x: xCoord,
          y: yCoord,
          width,
          height,
        });

        return;
      }

      xCoord += event.dx;
      yCoord += event.dy;

      this.moveDraggableItem({
        index,
        x: xCoord,
        y: yCoord,
      });
    },
    initializeResizeDrag() {
      interact(`#${this.validId}`)
        .draggable({
          inertia: true,
          restrict: {
            restriction: 'parent',
            endOnly: true,
            elementRect: {
              top: 0,
              left: 0,
              bottom: 1,
              right: 1,
            },
          },
          autoScroll: true,
          onmove: event => this.dragMoveListener(event, this.item, this.index),
        })
        .resizable({
          preserveAspectRatio: false,
          edges: {
            left: true,
            right: true,
            bottom: true,
            top: true,
          },
        })
        .on('resizemove', event =>
          this.dragMoveListener(event, this.item, this.index, true),
        );
    },
    ...mapActions([
      'removeDraggableItem',
      'moveDraggableItem',
      'moveResizeDraggableItem',
    ]),
  },
  computed: {
    validId() {
      return this.item.name.replace(/\W/g, '_');
    },
    style() {
      return {
        transform: `translate(${this.item.x}px, ${this.item.y}px)`,
        width: this.item.width,
        height: this.item.height,
      };
    },
  },
  created() {
    this.initializeResizeDrag();
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
  cursor: move;
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
