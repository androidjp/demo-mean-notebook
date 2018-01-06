import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(iView);

/// my router config
import Routers from './router';

const router = new VueRouter(Routers);

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
