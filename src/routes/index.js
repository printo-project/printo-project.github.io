// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Builder from '@/pages/Builder';
import Index from '@/pages/Index';
import DataInput from '@/pages/DataInput';
import Printer from '@/pages/Printer';

import certificateSidebar from '@/components/Sidebar/certificate-sidebar-items';
import weddingSidebar from '@/components/Sidebar/wedding-sidebar-items';
import invoiceSidebar from '@/components/Sidebar/invoice-sidebar-items';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/builder/certificate',
      name: 'Builder',
      component: Builder,
      props: {
        sidebarItems: certificateSidebar,
      },
    },
    {
      path: '/builder/wedding',
      name: 'Builder',
      component: Builder,
      props: {
        sidebarItems: weddingSidebar,
      },
    },
    {
      path: '/builder/invoice',
      name: 'Builder',
      component: Builder,
      props: {
        sidebarItems: invoiceSidebar,
      },
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
