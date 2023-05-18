import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory("/"),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/cart",
            name: "cart",
            component: () => import("../views/CartView.vue"),
        },
        {
            path: "/category/:slug",
            name: "Category",
            component: () => import("../views/CategoryView.vue"),
        },
    ],
    linkActiveClass: "active-nav-link",
});

export default router;
