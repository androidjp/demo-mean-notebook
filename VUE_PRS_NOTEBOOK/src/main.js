import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

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

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
