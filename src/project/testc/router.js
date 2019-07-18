import Vue from 'vue';
import Router from 'vue-router';

import Index from './pages/index/index.vue'; // 项目入口页面，获取身份信息等处理

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: '/testc',
  routes: [
    {
      path: '/',
      component: Index,
      // beforeEnter(){
      //   console.log('36');
      //   window.location = '/backend.html'
      // },
    },
    {
      path: '/detail/:sid', // sid 空间id
      name: 'detail',
      component: () => import(/* webpackChunkName: "detail" */ './pages/detail/index.vue'),
      meta: {
        name: '空间详情',
      },
    },
    {
      path: '/alarm',
      name: 'alarm',
      redirect: '/alarm/list',
    },
    {
      path: '/alarm/list',
      name: 'alarmlist',
      component: () => import(/* webpackChunkName: "alarm" */ './pages/alarm/index.vue'),
      meta: {
        name: '报警记录',
      },
    },
    {
      path: '/alarm/detail/:sid', // 空间id
      name: 'alarmDetail',
      component: () => import(/* webpackChunkName: "alarm" */ './pages/alarm/detail.vue'),
      meta: {
        name: '报警记录详情',
      },
    },
    {
      path: '/building',
      name: 'building',
      redirect: '/building/list',
    },
    {
      path: '/building/list',
      name: 'buildingList',
      component: () => import(/* webpackChunkName: "building" */ './pages/building/list.vue'),
      meta: {
        name: '建筑列表',
      },
    },
    {
      path: '/build/detail/:bid', // 建筑id
      name: 'buildingDetail',
      component: () => import(/* webpackChunkName: "building" */ './pages/building/detail.vue'),
      meta: {
        name: '建筑详情',
      },
    },
    {
      path: '/report',
      name: 'reporIndex',
      component: () => import(/* webpackChunkName: "report" */ './pages/report/index.vue'),
      meta: {
        name: '报告主页',
      },
    },
    {
      path: '/report/list',
      name: 'reporList',
      component: () => import(/* webpackChunkName: "report" */ './pages/report/list.vue'),
      meta: {
        name: '报告列表',
      },
    },
    {
      path: '/report/detail/:rid', // rid 报告id
      name: 'reportDetail',
      component: () => import(/* webpackChunkName: "report" */ './pages/report/detail.vue'),
      meta: {
        name: '报告详情',
      },
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "report" */ './pages/notFound.vue'),
      name: 'noFound',
      meta: {
        name: '无此页面',
      },
    },
  ],
});
