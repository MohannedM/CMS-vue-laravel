import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import users from './modules/users';

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
        users
    }
});