<template>
  <div class="card">
    <img class="card-img-top" :src="image" alt="Card image cap">
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: ['image'],
};
</script>

<style>

</style>
