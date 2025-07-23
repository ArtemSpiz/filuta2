import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Government from "@/pages/Government.vue";
import Research from "./pages/Research.vue";
import AboutUs from "./pages/AboutUs.vue";

// const Government = () => import("@/pages/Government.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/government-&-education", component: Government },
  { path: "/research", component: Research },
  { path: "/about-us", component: AboutUs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0, behavior: "auto" };
  },
});

export default router;
