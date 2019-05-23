import VueRouter from 'vue-router'
import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import store from './store';
import Admin from './components/admin/AdminMain.vue';
import AdminMain from './components/admin/AdminDashboard.vue';
import AdminUsers from './components/admin/users/Users.vue';
import AdminProducts from './components/admin/products/Products.vue';
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
    {path: '/admin', component: Admin, children:[
        {path:'/', component: AdminMain},
        {path: 'users', component: AdminUsers},
        {path: 'products', component: AdminProducts}
    ]}
];
