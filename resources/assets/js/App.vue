<template>
    <div>
        <transition name="slide" mode="out-in">
        <router-view class="py-4"></router-view>
        </transition>   
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
<style scoped>

    .slide-enter-active{
        animation: slide-in 500ms ease-out forwards;
    }
    .slide-leave-active{
        animation: slide-out 500ms ease-out forwards;
    }

    @keyframes slide-in {
        from{
            transform: translateY(-30px);
            opacity: 0;
        }
        to{
            transform: translateY(0px);
            opacity: 1;
        }
    }
        @keyframes slide-out {
        from{
            transform: translateY(0px);
            opacity: 1;
        }
        to{
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
