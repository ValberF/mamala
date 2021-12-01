import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import RegisterDonorPersonalDetails from "../views/RegisterDonorPersonalDetails";
import RegisterDonorPostNatal from "../views/RegisterDonorPostNatal";
import RegisterDonorPreNatal from "../views/RegisterDonorPreNatal";
import RegisterBeneficiary from "../views/RegisterBeneficiary";
import RegisterAdmin from "../views/RegisterAdmin";
import RegisterObstetrician from "../views/RegisterObstetrician";
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
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register-donor-personal-details",
    name: "RegisterDonorPersonalDetails",
    beforeEnter(to, from, next) {
      // check vuex store //
      if (localStorage.getItem("__user")) {
        next();
      } else {
        next({
          name: "Login", // back to safety route //
        });
      }
    },
    component: RegisterDonorPersonalDetails,
  },
  {
    path: "/register-donor-post-natal",
    name: "RegisterDonorPostNatal",
    beforeEnter(to, from, next) {
      // check vuex store //
      if (localStorage.getItem("__user")) {
        next();
      } else {
        next({
          name: "Login", // back to safety route //
        });
      }
    },
    component: RegisterDonorPostNatal,
  },
  {
    path: "/register-donor-pre-natal",
    name: "RegisterDonorPreNatal",
    beforeEnter(to, from, next) {
      // check vuex store //
      if (localStorage.getItem("__user")) {
        next();
      } else {
        next({
          name: "Login", // back to safety route //
        });
      }
    },
    component: RegisterDonorPreNatal,
  },
  {
    path: "/donor-list",
    name: "DonorList",
    beforeEnter(to, from, next) {
      // check vuex store //
      if (localStorage.getItem("__user")) {
        next();
      } else {
        next({
          name: "Login", // back to safety route //
        });
      }
    },
    component: DonorList,
  },
  {
    path: "/beneficiary-list",
    name: "BeneficiaryList",
    beforeEnter(to, from, next) {
      // check vuex store //
      if (localStorage.getItem("__user")) {
        next();
      } else {
        next({
          name: "Login", // back to safety route //
        });
      }
    },
    component: BeneficiaryList,
  },
  {
    path: "/donor-page",
    name: "DonorPage",
    beforeEnter(to, from, next) {
      // check vuex store //
      if (localStorage.getItem("__user")) {
        next();
      } else {
        next({
          name: "Login", // back to safety route //
        });
      }
    },
    component: DonorPage,
  },
  {
    path: "/register-beneficiary",
    name: "RegisterBeneficiary",
    beforeEnter(to, from, next) {
      // check vuex store //
      if (localStorage.getItem("__user")) {
        next();
      } else {
        next({
          name: "Login", // back to safety route //
        });
      }
    },
    component: RegisterBeneficiary,
  },
  {
    path: "/register-admin",
    name: "RegisterAdmin",
    beforeEnter(to, from, next) {
      // check vuex store //
      if (localStorage.getItem("__user")) {
        next();
      } else {
        next({
          name: "Login", // back to safety route //
        });
      }
    },
    component: RegisterAdmin,
  },
  {
    path: "/register-obstetrician",
    name: "RegisterObstetrician",
    beforeEnter(to, from, next) {
      // check vuex store //
      if (localStorage.getItem("__user")) {
        next();
      } else {
        next({
          name: "Login", // back to safety route //
        });
      }
    },
    component: RegisterObstetrician,
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
