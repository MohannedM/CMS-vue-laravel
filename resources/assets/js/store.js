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
            is_active: null,
            role: null
        }
    },
    mutations: {
        authUser(state, userData){
            state.user.id = userData.id;
            state.user.name = userData.name;
            state.user.email = userData.email;
            state.user.token = userData.token;
            state.user.is_active = userData.is_active;
            state.user.role = userData.role;
        },
        clearAuthData(state){
            state.user.id = null;
            state.user.name = null;
            state.user.email = null;
            state.user.token = null;
            state.user.role = null;
            state.user.is_active = null;
        }
    },
    actions:{
        register({commit}, user){
            axios.post('api/user/register', user)
            .then(res=>{
                console.log(res);
                commit('authUser', res.data.user);
            })
            .catch(err=>{
                console.log(err);
                
            });
        },
        login({commit}, user){
            axios.post('api/user/login', {email: user.email, password: user.password})
            .then(res=>{
                console.log(res);
                commit('authUser', res.data.user);
            })
            .catch(err=>{
                console.log(err);
            })
        },
        logoutUser({commit, state}){
            axios.post('api/user/logout', {email: state.user.email, apiToken: state.user.token})
            .then(res=>{
                console.log(res);
                commit('clearAuthData');
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
    getters:{
        userData(state){
            return state.user;
        },
        isLoggedIn(state){
            if(state.user.email && state.user.token){
                return true;
            } else{
                return false;
            }
        }
    }
});