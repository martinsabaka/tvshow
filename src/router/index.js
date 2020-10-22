import Vue from "vue";
import VueRouter from "vue-router";
import PopularShows from "../views/PopularShows.vue";
import PopularShowDetails from "../views/PopularShowDetails.vue";
import DefaultError from "../views/DefaultError.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PopularShows",
    component: PopularShows
  },
  {
    path: "/detail/:id",
    name: "PopularShowDetails",
    component: PopularShowDetails
  },
  {
    path: "/error",
    name: "DefaultError",
    component: DefaultError
  }
];

const router = new VueRouter({
  routes
});

export default router;
