<template>
  <div id="app"
    class="container-fluid">
    <topbar />
    <div class="row">
      <sidebar />
      <div class="col-md-8">
        <page></page>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
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

Element.prototype.remove = () => {
  this.parentElement.removeChild(this);
};

const remover = () => {
  for (let i = this.length - 1; i >= 0; i -= 1) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
};

NodeList.prototype.remove = remover;
HTMLCollection.prototype.remove = remover;
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

.resize-container {
  width: 100%;
  height: 100%;
}

body {
  background: rgb(204, 204, 204);
}

.invoice-upload {
  text-align: center;
  margin-bottom: 0;
}

#invoice {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
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

.disabled {
  pointer-events: none;
  opacity: 0.6;
  box-shadow: none;
}

.disabled a {
  color: #868686;
}

.nav {
  background-color: white;
}

.nav-title {
  display: block;
  padding: 3px 12px;
  font-size: 11px;
  font-weight: bold;
  line-height: 18px;
  color: #999999;
  text-transform: uppercase;
  position: relative;
  margin: 10px 0;
}

.nav-title::after {
  content: '';
  position: absolute;
  width: 30%;
  height: 1px;
  background: #cccccc;
  bottom: 0;
  left: 12px;
  margin: auto;
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

.header {
  margin-top: 24px;
  margin-bottom: 24px;
}

.glyphicon {
  vertical-align: text-top;
}
</style>
