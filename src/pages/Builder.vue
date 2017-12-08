<template>
  <div id="builder-wrapper">
    <topbar/>

    <div id="templates">
      <div class="collapse" id="collapse-templates">
        <div class="row">
          <div class="col-md-2" v-for="(image, index) in images" :key="index" :index="index">
            <image-card :image="image" v-on:click.native="setBackground(image)" />
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="builder-canvas">
      <sidebar />
      <page />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Sidebar from './../components/Sidebar/Sidebar';
import Topbar from './../components/Header/Topbar';
import Page from './../components/Page';
import ImageCard from './../components/Common/ImageCard';

export default {
  name: 'Builder',
  components: {
    Sidebar,
    Page,
    ImageCard,
    Topbar,
  },
  data() {
    return {
      images: [
        '/static/img/certificate/lq/1.jpg',
        '/static/img/certificate/lq/2.jpg',
        '/static/img/certificate/lq/3.jpg',
        '/static/img/certificate/lq/4.jpg',
        '/static/img/certificate/lq/5.jpg',
        '/static/img/certificate/lq/6.jpg',
      ],
    };
  },
  methods: {
    setBackground(image) {
      this.setPageBackground(`url(${image})`);
    },
    ...mapActions(['setPageBackground']),
  },
};
</script>

<style>
#builder-wrapper {
  margin-top: 3vh;
}

#builder-canvas {
  margin-top: 3vh;
}

#templates {
  text-align: center;
}
</style>
