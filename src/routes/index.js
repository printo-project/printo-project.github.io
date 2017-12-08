// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Builder from '@/pages/Builder';
import Index from '@/pages/Index';
import DataInput from '@/pages/DataInput';
import Printer from '@/pages/Printer';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/builder',
      name: 'Builder',
      component: Builder,
    },
    {
      path: '/builder/input',
      name: 'Data Input',
      component: DataInput,
    },
    {
      path: '/builder/print',
      name: 'Printable Output',
      component: Printer,
    },
  ],
});
