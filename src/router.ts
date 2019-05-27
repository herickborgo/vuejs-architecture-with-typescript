import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About/About.vue'),
    },
  ],
});
