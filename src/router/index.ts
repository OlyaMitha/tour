import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component:() =>
        import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Users",
    name: "Users",
    component: () =>
        import("../views/Users.vue")
  },
  {
    path: "/Flights",
    name: "Flights",
    component:() =>
        import("../views/Flights.vue")
  },
  {
    path: "/Agents",
    name: "Agents",
    component:() =>
        import("../views/Agents.vue")
  },
  {
    path: "/Poisk_turov_vo_vse_strany",
    name: "Poisk_turov_vo_vse_strany",
    component:() =>
        import("../views/Poisk_turov_vo_vse_strany.vue")
  },
  {
    path: "/all_tour",
    name: "all_tour",
    component:() =>
        import("../views/AllTours.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
