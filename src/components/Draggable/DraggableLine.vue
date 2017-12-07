<template>
  <div class="line-drag row"
    :id="validId"
    data-x="0"
    :data-y="y"
    :style="style">

    <span class="col-md-4 col-md-offset-4">
      {{ title }}
    </span>
    <a class="close col-md-1 col-md-offset-2"
      @click="removeDraggableLine({parentIndex, index})">
      ×
    </a>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { interact } from 'interactjs';

export default {
  name: 'DraggableLine',
  props: {
    title: String,
    y: Number,
    index: Number,
    parentIndex: Number,
  },
  computed: {
    style() {
      return {
        transform: `translate(0px, ${this.y}px)`,
      };
    },
    validId() {
      return this.title.replace(/\W/g, '_');
    },
  },
  methods: {
    initializeLineDrag() {
      interact(`#${this.validId}`)
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
          onmove: event => this.moveDraggableLine({
            index: this.index,
            y: this.y + event.dy,
          }),
        });
    },
    ...mapActions([
      'removeDraggableLine',
      'moveDraggableLine',
    ]),
  },
  created() {
    this.initializeLineDrag();
  },
};
</script>
