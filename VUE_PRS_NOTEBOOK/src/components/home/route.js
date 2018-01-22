import home from './home.vue'
import home_recently from './home.recently.vue'

export default {
  path: "/",
  component: home,
  children:[
    {
      path: "/",
      component: home_recently
    }
  ]
};
