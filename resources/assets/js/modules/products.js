import axios from 'axios';

const state = {

};

const mutations = {

};

const actions = {
    createProduct({commit}, product){
        axios.post('/api/products', {
            user_id: product.user_id,
            category_id: product.category_id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            description: product.description
        })
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        });
    }
};

const getters = {

};

export default{
    state,
    mutations,
    actions,
    getters
}