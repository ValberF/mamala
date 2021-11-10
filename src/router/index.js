import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import RegisterDonorPersonalDetails from "../views/RegisterDonorPersonalDetails";
import RegisterDonorPostNatal from "../views/RegisterDonorPostNatal";
import RegisterDonorPreNatal from "../views/RegisterDonorPreNatal";
import RegisterBeneficiary from "../views/RegisterBeneficiary";
import RegisterAdmin from "../views/RegisterAdmin";
import DonorList from "../views/DonorList";
import BeneficiaryList from "../views/BeneficiaryList";
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
    name: "RegisterDonorPersonalDetails",
    component: RegisterDonorPersonalDetails,
  },
  {
    path: "/register-donor-post-natal",
    name: "RegisterDonorPostNatal",
    component: RegisterDonorPostNatal,
  },
  {
    path: "/register-donor-pre-natal",
    name: "RegisterDonorPreNatal",
    component: RegisterDonorPreNatal,
  },
  {
    path: "/donor-list",
    name: "DonorList",
    component: DonorList,
  },
  {
    path: "/beneficiary-list",
    name: "BeneficiaryList",
    component: BeneficiaryList,
  },
  {
    path: "/donor-page",
    name: "DonorPage",
    component: DonorPage,
  },
  {
    path: "/register-beneficiary",
    name: "RegisterBeneficiary",
    component: RegisterBeneficiary,
  },
  {
    path: "/register-admin",
    name: "RegisterAdmin",
    component: RegisterAdmin,
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
