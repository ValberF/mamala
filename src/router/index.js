import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import registerDonorPersonalDetails from "../views/RegisterDonorPersonalDetails";
import registerDonorPostNatal from "../views/RegisterDonorPostNatal";
import registerDonorPreNatal from "../views/RegisterDonorPreNatal";
import DonorList from "../views/DonorList";
import DonorPage from "../views/DonorPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register-donor-personal-details",
    name: "registerDonorPersonalDetails",
    component: registerDonorPersonalDetails,
  },
  {
    path: "/register-donor-post-natal",
    name: "registerDonorPostNatal",
    component: registerDonorPostNatal,
  },
  {
    path: "/register-donor-pre-natal",
    name: "registerDonorPreNatal",
    component: registerDonorPreNatal,
  },
  {
    path: "/donor-list",
    name: "DonorList",
    component: DonorList,
  },
  {
    path: "/donor-page",
    name: "DonorPage",
    component: DonorPage,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
