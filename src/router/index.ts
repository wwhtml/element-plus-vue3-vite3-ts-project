import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Container from "../components/container/src/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Container,
      children: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: Home },
        {
          path: "/chooseIcon",
          component: () => import("../views/chooseIcon/index.vue"),
        },
        {
          path: "/chooseArea",
          component: () => import("@/views/chooseArea/index.vue"),
        },
      ],
    },
  ],
});

export default router;
