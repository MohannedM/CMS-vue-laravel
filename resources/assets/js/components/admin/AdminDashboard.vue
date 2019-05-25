<template>
    <div>
            <!-- POSTS -->
            <section id="posts">
                <div class="container offset-md-2 py-5 mt-5">
                <div class="row text-center">
                    <div class="col-lg-3 col-md-1">
                        <div class="card text-center bg-warning text-white mb-3">
                            <div class="card-body">
                                <h3>Users</h3>
                                <h4 class="display-4">
                                    <i class="fas fa-users"></i> {{usersCount}}
                                </h4>
                                <router-link to="/admin-users" class="btn btn-outline-light btn-sm">View</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-1">
                        <div class="card text-center bg-primary text-white mb-3">
                            <div class="card-body">
                                <h3>Products</h3>
                                <h4 class="display-4">
                                    <i class="fas fa-pencil-alt"></i> {{productsCount}}
                                </h4>
                                <router-link to="/admin-products"  class="btn btn-outline-light btn-sm">View</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-1">
                        <div class="card text-center bg-success text-white mb-3">
                            <div class="card-body">
                                <h3>Categories</h3>
                                <h4 class="display-4">
                                    <i class="fas fa-folder"></i> {{categoriesCount}}
                                </h4>
                                <router-link to="/admin-categories" class="btn btn-outline-light btn-sm">View</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>   
    </div>
</template>
<script>
export default {
    computed:{
        usersCount(){
            return this.$store.getters.getUsers.length;
        },
        categoriesCount(){
            return this.$store.getters.getCategories.length;
        },
        productsCount(){
            return this.$store.getters.getProducts.length;
        }
    }
}
</script>