import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import users from './modules/users';
import categories from './modules/categories';
import products from './modules/products';

Vue.use(Vuex);
export default new Vuex.Store({
    state:{

    },
    mutations: {

    },
    actions:{

    },
    getters:{

    },
    modules:{
        auth,
        users,
        categories,
        products
    }
});