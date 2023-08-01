import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes.js";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'uk-active',
    routes
});

export default router;
