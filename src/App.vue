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
import axios from 'axios';
import Sidebar from './components/Sidebar/Sidebar';
import Page from './components/Page';
import Topbar from './components/Header/Topbar';

axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Content-Type'] = ' application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.params = {};
axios.defaults.baseURL = 'http://nkolayofis.dev/api';

export default {
  name: 'app',
  components: {
    Sidebar,
    Page,
    Topbar,
  },
  created() {
    if (window.localStorage) {
      if (localStorage.getItem('token') === null) {
        this.authenticate();
      }
    }
  },
  methods: {
    authenticate() {
      const authUrl = '/auth';

      const email = 'burak.karakan@gmail.com';
      const password = 'karakan';

      axios.post(authUrl, { email, password })
        .then((response) => {
          localStorage.setItem('token', response.data.data);
        });
    },
    getParameterByName(name, url = window.location.href) {
      const cleanName = name.replace(/[[\]]/g, '\\$&');
      const regex = new RegExp(`[?&]${cleanName}(=([^&#]*)|&|#|$)`);
      const results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },
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
