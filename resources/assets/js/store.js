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
        'REGISTER'(state){
            
        }
    },
    actions:{
        register({commit}, user){
            axios.post('api/users', user)
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            });
        }
    }
});