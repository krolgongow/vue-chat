import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import ChatPage from "./pages/ChatPage.vue";
import store from "./store";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: LoginPage, meta: { requiresUnauth: true } },
    {
      path: "/register",
      component: RegisterPage,
      meta: { requiresUnauth: true },
    },
    { path: "/chat", component: ChatPage, meta: { requiresAuth: true } },
    { path: "/:notFound(.*)", redirect: "/login" },
  ],
});

router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/login");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/chat");
  } else {
    next();
  }
});

export default router;
