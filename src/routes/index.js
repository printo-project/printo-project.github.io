// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Builder from '@/pages/Builder';
import Index from '@/pages/Index';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/builder',
      name: 'Builder',
      component: Builder,
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
  ],
});
