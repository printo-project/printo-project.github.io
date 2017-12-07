<template>
  <div id="builder-wrapper">
    <div class="row">
      <div class="col-md-2">
        <image-card/>
      </div>
    </div>
    <div class="row" id="builder-canvas">
      <sidebar />
      <page />
    </div>
  </div>
</template>

<script>
import Sidebar from './../components/Sidebar/Sidebar';
import Page from './../components/Page';
import ImageCard from './../components/Common/ImageCard';

export default {
  name: 'Builder',
  components: {
    Sidebar,
    Page,
    ImageCard,
  },
};
</script>

<style>
#builder-wrapper {
  margin-top: 3vh;
  margin-left: 5vw;
}

#builder-canvas {
  margin-top: 3vh;
}
</style>
