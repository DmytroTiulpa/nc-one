import Home from "../pages/home.vue";
import Page1 from "../pages/page1.vue";
import Page2 from "../pages/page2.vue";
import Page3 from "../pages/page3.vue";

const routes = [
    {
         path: '/',
         component: Home
    },
    {
        path: '/page1',
        component: Page1
    },
    {
        path: '/page2',
        component: Page2
    },
    {
        path: '/page3',
        component: Page3
    },
];

export default routes;
