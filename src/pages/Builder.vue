<template>
  <div>
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
#builder-canvas {
  margin-top: 10vh;
}
</style>
