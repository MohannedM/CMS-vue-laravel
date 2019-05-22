import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        user:{
            id: null,
            name: null,
            email: null,
            token: null,
            role: null
        }
    },
    mutations: {
        'REGISTER'(state, userData){
            state.id = userData.id;
            state.name = userData.name;
            state.email = userData.email;
            state.token = userData.token;
            state.role = userData.role;
        }
    },
    actions:{
        register({commit}, user){
            axios.post('api/users', user)
            .then(res=>{
                console.log(res);
                commit('REGISTER', res.data.user);
                
            })
            .catch(err=>{
                console.log(err);
            });
        }
    }
});