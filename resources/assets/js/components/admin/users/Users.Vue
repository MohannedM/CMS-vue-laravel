<template>
    <div>
        <div class="col-md-8 offset-md-2 mt-5">
            <div>
                <h4>Users</h4>
            </div>
            <table class="table table-striped">
                <thead class="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Admin</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.role}}</td>
                    <td><a style="cursor:pointer" @click="changeStatus(user.id, user.is_active)" class="btn btn-outline-primary">{{user.is_active == 0 ? 'Pending' : 'Active'}}</a></td>
                    <td><a style="cursor:pointer" @click="changeAdmin(user.id, user.is_admin)" class="btn btn-outline-primary">{{user.is_admin == 0 ? 'No' : 'Yes'}}</a></td>
                    <td>
                    <a style="cursor:pointer" @click="deleteUser(user.id)" class="btn btn-danger">
                        <i class="fas fa-user-times"></i> Delete
                    </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>   
    </div>
</template>
<script>
export default {
    computed:{
        users(){
            return this.$store.getters.getUsers;
        }
    },
    methods: {
        changeStatus(id, is_active){
            this.$store.dispatch('activateUser', {id, is_active});
        },
        changeAdmin(id, is_admin){
            this.$store.dispatch('makeAdmin', {id, is_admin});
        },
        deleteUser(id){
            this.$store.dispatch('deleteUser', id);
        }
    }
}
</script>