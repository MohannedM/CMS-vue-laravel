import VueRouter from 'vue-router'
import Vue from 'vue'
import {routes} from './routes'
import store from './store'
import Vuex from 'vuex'

const router = new VueRouter({
    routes,
    mode: 'history'
});


Vue.use(VueRouter);



require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('app', require('./App.vue'));

const app = new Vue({
    el: '#app',
    router,
    store
});
