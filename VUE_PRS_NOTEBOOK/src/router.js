import home from "./components/home/home.vue";

export default {
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      component: home
    }
  ]
};
