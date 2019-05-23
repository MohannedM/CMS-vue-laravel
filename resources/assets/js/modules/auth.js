import axios from 'axios';
const state = {
    user:{
        id: null,
        name: null,
        email: null,
        token: null,
        is_active: null,
        is_admin: null,
        role: null
    }
};
const mutations = {
    authUser(state, userData){
        state.user.id = userData.id;
        state.user.name = userData.name;
        state.user.email = userData.email;
        state.user.token = userData.token;
        state.user.is_active = userData.is_active;
        state.user.is_admin = userData.is_admin;
        state.user.role = userData.role;
    },
    clearAuthData(state){
        state.user.id = null;
        state.user.name = null;
        state.user.email = null;
        state.user.token = null;
        state.user.role = null;
        state.user.is_admin = null;
        state.user.is_active = null;
    }
};
const actions = {
    register({commit}, user){
        axios.post('api/user/register', user)
        .then(res=>{
            console.log(res);
            commit('authUser', res.data.user);
            localStorage.setItem('userId', res.data.user.id);
            localStorage.setItem('userName', res.data.user.name);
            localStorage.setItem('userEmail', res.data.user.email);
            localStorage.setItem('userToken', res.data.user.token);
            localStorage.setItem('userAdmin', res.data.user.is_admin);
            localStorage.setItem('userRole', res.data.user.role);
            localStorage.setItem('userIsActive', res.data.user.is_active);
            dispatch('setLogoutTimer');
        })
        .catch(err=>{
            console.log(err);
            
        });
    },
    login({commit, dispatch}, user){
        axios.post('api/user/login', {email: user.email, password: user.password})
        .then(res=>{
            console.log(res);
            commit('authUser', res.data.user);
            localStorage.setItem('userId', res.data.user.id);
            localStorage.setItem('userName', res.data.user.name);
            localStorage.setItem('userEmail', res.data.user.email);
            localStorage.setItem('userToken', res.data.user.token);
            localStorage.setItem('userAdmin', res.data.user.is_admin);
            localStorage.setItem('userRole', res.data.user.role);
            localStorage.setItem('userIsActive', res.data.user.is_active);
            dispatch('setLogoutTimer');
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
            localStorage.removeItem('userId');
            localStorage.removeItem('userName');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userToken');
            localStorage.removeItem('userAdmin');
            localStorage.removeItem('userRole');
            localStorage.removeItem('userIsActive');
            
        })
        .catch(err=>{
            console.log(err);
        })
    },
    checkLogin({commit}){
        let user = {
          id: localStorage.getItem('userId'),
          name: localStorage.getItem('userName'),
          email: localStorage.getItem('userEmail'),
          token: localStorage.getItem('userToken'),
          is_active: localStorage.getItem('userIsActive'),
          is_admin: localStorage.getItem('userAdmin'),
          role: localStorage.getItem('userRole')  
        };
        if(user.id && user.name && user.email && user.token && user.role){
            commit('authUser', user);
        }
    },
    setLogoutTimer({commit, dispatch}){
        setTimeout(()=>{
            dispatch('logoutUser');
        },900000);
    }
};
const getters = {
    userData(state){
        return state.user;
    },
    isLoggedIn(state){
        if(state.user.email && state.user.token){
            return true;
        } else{
            return false;
        }
    },
    isAdmin(state){
        if(state.user.is_admin == 1){
            return true;
        }else{
            return false;
        }
    }
};

export default{
    state,
    mutations,
    actions,
    getters
}

