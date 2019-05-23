<template>
    <div>
        <admin-header></admin-header>
        <router-view></router-view>
     </div>
</template>
<script>
import AdminHeader from './AdminHeader.vue';
export default {
    components:{
        adminHeader: AdminHeader
    }
}
</script>