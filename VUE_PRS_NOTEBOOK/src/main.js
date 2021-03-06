import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(iView);

import RouterConfig from './router';

import store from './store'

const router = new VueRouter(RouterConfig);

const app = new Vue({
  router: router,
  store:store,
  render: h => h(App)
}).$mount('#app')
