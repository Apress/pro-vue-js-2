import Vue from "vue";
import VueRouter from "vue-router";

import BasicRoutes from "./basicRoutes";
import SideBySideRoutes from "./sideBySideRoutes";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        ...BasicRoutes,
        SideBySideRoutes,
        { path: "*", redirect: "/products" }
    ]
});

export default router;

router.beforeEach((to, from, next) => {
    if (to.path == "/preferences" && from.path.startsWith("/named")) {
        next(false);
    } else {
        next();
    }
});

router.beforeResolve((to, from, next) => {
    if (to.path == "/named/tableright") {
        next({ name: "editor", params: { op: "edit", id: 1} });
    } else {
        next();
    }
})
