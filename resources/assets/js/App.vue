<template>
    <div>
        <router-view class="py-4"></router-view>   
    </div>
</template>
<script>
import Header from './components/shared/Header.vue';
export default {
    created(){
        if(!this.isLogged){
            this.$store.dispatch('checkLogin');
            console.log('checked');
        }else{
            this.$store.dispatch('setLogoutTimer');
        }
        this.$store.dispatch('getAllCategories');
        this.$store.dispatch('getAllProducts');
       
    },
    computed:{
        isLogged(){
            return this.$store.getters.isLoggedIn;
        }
    }
}
</script>