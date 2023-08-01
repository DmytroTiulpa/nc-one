// import './bootstrap';

/*import "datatables.net-css";
import "bootstrap/dist/css/bootstrap.min.css";*/

import jQuery from "jquery";
window.$ = jQuery;

import DataTable from 'datatables.net';
window.DataTable = DataTable;

import { createApp } from "vue";
import App from './src/app.vue';
import Router from "./src/router/router.js";

createApp(App)
    .use(Router)
    .mount('#app')

