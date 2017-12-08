<template>
  <div class="col-md-3 offset-md-1" id="sidebar">
    <ul class="nav flex-column">
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
    items: state => state.sidebar.items,
  }),
};
</script>

<style>
.nav {
  background-color: white;
}

.nav-title {
  display: block;
  padding: 10px 12px;
  font-size: 16px;
  line-height: 18px;
  color: #676767;
  background: #efefef;
  position: relative;
}

.nav-title::after {
  content: '';
  position: absolute;
  width: 10%;
  height: 0px;
  background: #cccccc;
  bottom: 0;
  left: 12px;
  margin: auto;
}
</style>
