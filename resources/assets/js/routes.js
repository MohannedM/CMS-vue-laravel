import VueRouter from 'vue-router'
import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import store from './store';
export const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login, beforeEnter(to, from, next){
        if(store.getters.isLoggedIn){
            next('/');
        }else{
            next();
        }
    }},
    {path: '/register', component: Register, beforeEnter(to, from, next){
        if(store.getters.isLoggedIn){
            next('/');
        }else{
            next();
        }
    }},
];
