import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

// router load components
import home from './components/home.vue';
import note from './components/note.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: home
    },{
      path: '/note',
      component: note
    }
  ]
});



const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
