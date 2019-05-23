import axios from "axios";

const state = {
    users:[]
};

const mutations = {
    saveUsers(state, users){
        state.users = users;
    }
};

const actions = {
    getUsers({commit}){
        axios.get('api/admin/users')
        .then(res=>{
            commit('saveUsers', res.data.users);
        })
        .catch(err=>{
            console.log(err);
        });
    },
    activateUser({commit, dispatch}, user){
        axios.put('api/admin/users/changestatus/' + user.id, {is_active: user.is_active})
        .then(res=>{
            dispatch('getUsers');
        })
        .catch(err=>{
            console.log(err);
        });
    },
    makeAdmin({commit, dispatch}, user){
        axios.put('api/admin/users/' + user.id, {is_admin: user.is_admin})
        .then(res=>{
            dispatch('getUsers');
        })
        .catch(err=>{
            console.log(err);
        });
    },
    deleteUser({commit, dispatch}, id){
        axios.delete('api/admin/users/' + id)
        .then(res=>{
            dispatch('getUsers');
        })
        .catch(err=>{
            console.log(err);
        });
    }
};

const getters = {
    getUsers(state){
        return state.users;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}