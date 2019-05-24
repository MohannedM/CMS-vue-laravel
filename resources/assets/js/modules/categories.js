import axios from 'axios';

const state = {
    categories: []
};

const mutations = {
    setCategories(state, categories){
        state.categories = categories;
    }
};

const actions = {
    insertCategory({commit, dispatch}, name){
        axios.post('/api/admin/categories', {name})
        .then(res=>{
            dispatch('getAllCategories');
        })
        .catch(err=>{
            console.log(err);
        });
    },
    getAllCategories({commit}){
        axios.get('/api/admin/categories')
        .then(res=>{
            commit('setCategories', res.data.categories);
        })
        .catch(err=>{
            console.log(err);
        });
    },
    modifyCategory({commit, dispatch}, category){
        axios.put('/api/admin/categories/' + category.id, {name: category.name})
        .then(res=>{
            dispatch('getAllCategories');
        })
        .catch(err=>{
            console.log(err);
        });
    },
    deleteCategory({commit, dispatch}, id){
        axios.delete('/api/admin/categories/' + id)
        .then(res=>{
            dispatch('getAllCategories');
        })
        .catch(err=>{
            console.log(err);
        })
    }
};

const getters = {
    getCategories(state){
        return state.categories;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};