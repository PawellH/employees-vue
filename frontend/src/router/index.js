import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import EmployeePage from "../views/EmployeePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/epage",
    component: EmployeePage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
