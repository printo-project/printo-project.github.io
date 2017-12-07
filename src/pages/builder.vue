<template>
  <div>
    <topbar />
    <div class="row">
      <sidebar />
      <page />
    </div>
  </div>
</template>

<script>
import Sidebar from './../components/Sidebar/Sidebar';
import Page from './../components/Page';
import Topbar from './../components/Header/Topbar';

export default {
  name: 'Builder',
  components: {
    Sidebar,
    Page,
    Topbar,
  },
};
</script>

<style>

</style>
