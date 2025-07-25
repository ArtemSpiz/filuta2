import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Government from "@/pages/Government.vue";
import Research from "./pages/Research.vue";
import AboutUs from "./pages/AboutUs.vue";
import Blog from "./pages/Blog.vue";
import Article from "./pages/Article.vue";

// const Government = () => import("@/pages/Government.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/government-&-education", component: Government },
  { path: "/research", component: Research },
  { path: "/about-us", component: AboutUs },
  { path: "/blog", component: Blog },
  { path: "/blog/:slug", component: Article, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0, behavior: "auto" };
  },
});

export default router;
