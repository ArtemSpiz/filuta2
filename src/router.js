import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Government from "@/pages/Government.vue";

// const Government = () => import("@/pages/Government.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/government-&-education", component: Government },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
