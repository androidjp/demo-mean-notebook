// router load components
import home from "./components/home.vue";
import note from "./components/note.vue";

// {
//   mode: 'history',
//   base: __dirname,
//   routes: Routers
// }
export default {
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      component: home
    },
    {
      path: "/note",
      component: note
    }
  ]
};
