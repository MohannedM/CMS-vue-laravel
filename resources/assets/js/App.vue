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
    }
}
</script>