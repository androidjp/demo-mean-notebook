import home from "./components/home/route";
import note from "./components/note/route";
export default {
  mode: "history",
  base: __dirname,
  routes: [
    home,
    note
  ]
};

