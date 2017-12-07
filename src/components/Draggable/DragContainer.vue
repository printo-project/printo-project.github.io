<template>
  <div class="resize-container"
    id="resize-container">
    <draggable-item v-for="(item, index) in items"
      :key="item.parentIndex"
      :item="item"
      :index="index"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { interact } from 'interactjs';
import Helpers from '../mixins/Helpers';
import DraggableItem from './DraggableItem';

export default {
  name: 'DragContainer',
  mixins: [Helpers],
  components: {
    DraggableItem,
  },
  methods: {
    dragMoveListener(event) {
      const target = event.target;
      const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
      const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

      // translate the element
      target.style.webkitTransform = `translate(${x}px, ${y}px)`;
      target.style.transform = `translate(${x}px, ${y}px)`;

      // update the posiion attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    },
    initializeResizeDrag() {
      interact('.resize-drag')
        .draggable({
          // enable inertial throwing
          inertia: true,
          // keep the element within the area of it's parent
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
          // enable autoScroll
          autoScroll: true,

          // call this function on every dragmove event
          onmove: this.dragMoveListener,
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
        .on('resizemove', (event) => {
          const target = event.target;
          let x = (parseFloat(target.getAttribute('data-x')) || 0);
          let y = (parseFloat(target.getAttribute('data-y')) || 0);

          // update the element's style
          target.style.width = `${event.rect.width}px`;
          target.style.height = `${event.rect.height}px`;

          // translate when resizing from top or left edges
          x += event.deltaRect.left;
          y += event.deltaRect.top;

          target.style.webkitTransform = `translate(${x}px, ${y}px)`;
          target.style.transform = `translate(${x}px, ${y}px)`;

          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        });
    },
    initializeLineDrag() {
      interact('.line-drag')
        .draggable({
          // enable inertial throwing
          inertia: true,
          // keep the element within the area of it's parent
          restrict: {
            restriction: 'parent',
            elementRect: {
              top: 0,
              left: 0,
              bottom: 1,
              right: 1,
            },
          },
          // enable autoScroll
          autoScroll: true,

          // call this function on every dragmove event
          onmove: this.dragMoveListener,
        })
        .on('resizemove', (event) => {
          const target = event.target;
          let x = (parseFloat(target.getAttribute('data-x')) || 0);
          let y = (parseFloat(target.getAttribute('data-y')) || 0);

          // translate when resizing from top or left edges
          x += event.deltaRect.left;
          y += event.deltaRect.top;

          target.style.webkitTransform = `translate(${x}px, ${y}px)`;
          target.style.transform = `translate(${x}px, ${y}px)`;

          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        });
    },
  },
  computed: {
    ...mapState({
      items: state => state.draggableItems,
    }),
  },
  created() {
    this.initializeResizeDrag();
    this.initializeLineDrag();
  },
};
</script>

<style>
.resize-container {
  width: 100%;
  height: 100%;
}
</style>
