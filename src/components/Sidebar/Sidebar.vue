<template>
  <div class="col-md-3 col-md-offset-1">
    <ul class="nav nav-pills nav-stacked with-shadow">
      <sidebar-item v-for="(item, index) in items"
        :key="item.id"
        :index="index"
        :item="item" />
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SidebarItem from './SidebarItem';

export default {
  name: 'Sidebar',
  components: {
    SidebarItem,
  },
  computed: mapState({
    items: state => state.sidebarItems,
  }),
};
</script>

<style>
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
</style>
