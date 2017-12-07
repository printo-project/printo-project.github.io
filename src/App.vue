<template>
  <div id="app"
    class="container-fluid">
    <topbar />
    <div class="row">
      <sidebar />
      <page />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar';
import Page from './components/Page';
import Topbar from './components/Header/Topbar';

export default {
  name: 'app',
  components: {
    Sidebar,
    Page,
    Topbar,
  },
};
</script>

<style>
body {
  background: rgb(204, 204, 204);
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
  opacity: .5;
  line-height: 16px;
}

.line-drag .close:hover {
  opacity: .8;
}

.glyphicon {
  vertical-align: text-top;
}

.btn:focus {
  outline: none;
}
</style>
