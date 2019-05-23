<template>
    <div>
        <app-header></app-header>
        <router-view class="py-4"></router-view>   
    </div>
</template>
<script>
import Header from './components/shared/Header.vue';
export default {
    components:{
        appHeader: Header
    },
    mounted(){
        if(!this.isLogged){
            this.$store.dispatch('checkLogin');
            console.log('checked');
        }else{
            this.$store.dispatch('setLogoutTimer');
        }
    },
    computed:{
        isLogged(){
            return this.$store.getters.isLoggedIn;
        }
    }
}
</script>