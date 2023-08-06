import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainView
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../views/ProductView.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue")
  },
  {
    path: "/order",
    name: "order",
    component: () => import("../views/OrderView.vue")
  },
  {
    path: "/orderInfo",
    name: "orderInfo",
    component: () => import("../views/OrderInfoView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
