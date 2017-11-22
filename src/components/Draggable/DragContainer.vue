<template>
  <div class="resize-container"
    id="resize-container">
    <draggable-item v-for="count in componentCount"
      :key="count.id" />
  </div>
</template>

<script>
import { interact } from 'interactjs';
import Helpers from '../mixins/Helpers';
import DraggableItem from './DraggableItem';

export default {
  name: 'DragContainer',
  mixins: [Helpers],
  components: {
    DraggableItem,
  },
  data() {
    return {
      componentCount: 2,
    };
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
    createDraggableElement() {
      // Create a draggable node with the element title.
      const title = this.getAttribute('data-title');
      const div = this.createDraggableNode(title);

      // Add the element to the draggable area.
      const container = document.getElementById('resize-container');
      container.appendChild(div);

      // Using an if statement to check the class
      this.classList.add('disabled');
    },
    removeDraggableElement() {
      const title = this.parentElement.getAttribute('data-title');
      const menuElement = document.querySelectorAll(`[data-title="${title}"]`)[0];
      menuElement.classList.remove('disabled');
      this.parentElement.remove();
    },

    createDraggableNode(title) {
      const uniqId = this.generateUniqueId();

      const div = document.createElement('div');
      div.className = 'resize-drag text-container';
      div.style.height = '100px';
      div.id = uniqId;
      div.setAttribute('data-title', title);

      div.appendChild(this.createCloseButton(this.removeDraggableElement));

      const span = document.createElement('span');
      span.textContent = title;
      div.appendChild(span);

      return div;
    },
  },
  created() {
    this.initializeResizeDrag();
    this.initializeLineDrag();
  },
};
</script>

<style>

</style>
