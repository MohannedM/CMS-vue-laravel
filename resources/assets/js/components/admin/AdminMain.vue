<template>
    <div>
        <admin-header></admin-header>
        <transition name="slide" mode="out-in">
        <router-view></router-view>
        </transition>  
     </div>
</template>
<script>
import AdminHeader from './AdminHeader.vue';
export default {
    components:{
        adminHeader: AdminHeader
    },
    created() {
        //Get all users
         this.$store.dispatch('getUsers');
         
    },
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