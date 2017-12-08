<template>
  <div id="app" class="container-fluid">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  cursor: default;
  background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
  height: 100%;
}

#invoice {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.disabled {
  pointer-events: none;
  opacity: 0.6;
  box-shadow: none;
}

.disabled a {
  color: #868686;
}

.line-drag {
  width: 100%;
  background: rgba(66, 66, 66, 0.8);
  text-align: center;
  color: white;
}

.line-drag.row {
  margin: 0;
}

.line-drag .close {
  color: white;
  opacity: 0.5;
  line-height: 16px;
}

.line-drag .close:hover {
  opacity: 0.8;
}

.glyphicon {
  vertical-align: text-top;
}

.btn:focus {
  outline: none;
}
</style>
