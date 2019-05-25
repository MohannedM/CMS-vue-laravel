import axios from 'axios';
import {routes} from '../routes';

const state = {
    products:[]
};

const mutations = {
    setProducts(state, products){
        state.products = products;
    }
};

const actions = {
    createProduct({commit, dispatch}, product){
        axios.post('/api/products', {
            user_id: product.user_id,
            category_id: product.category_id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            description: product.description,
            image: product.image
        })
        .then(res=>{
            console.log(res);
            dispatch('getAllProducts');
        })
        .catch(err=>{
            console.log(err);
        });
    },
    getAllProducts({commit}){
        axios.get('api/products')
        .then(res=>{
            console.log(res);
            commit('setProducts', res.data.products);
        })
        .catch(err=>{
            console.log(err);
        });
    }
};

const getters = {
    getProducts(state){
        return state.products;
    }
};

export default{
    state,
    mutations,
    actions,
    getters
}