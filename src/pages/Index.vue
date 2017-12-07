<template>
  <div class="container">
    <image-card/>
    <div class="jumbotron">
      <h1 class="display-3">Ne hazırlamak istersiniz?</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <router-link to="/builder" class="btn btn-primary btn-lg">Go to Bar</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import ImageCard from './../components/Common/ImageCard';

export default {
  name: 'index',
  components: {
    ImageCard,
  },
};
</script>

<style>

</style>
