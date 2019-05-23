<template>
    <div>
        <section id="actions" class="py-4 mb-4 bg-light">
                <div class="container offset-md-2 ">
                <div class="row">
                    <div class="col-lg-3 col-md-1">
                    <a href="#" class="btn btn-warning btn-block" data-toggle="modal" data-target="#addUserModal">
                        <i class="fas fa-plus"></i> Add User
                    </a>
                    </div>
                    <div class="col-lg-3 col-md-1">
                    <a href="#" class="btn btn-primary btn-block" data-toggle="modal" data-target="#addPostModal">
                        <i class="fas fa-plus"></i> Add Products
                    </a>
                    </div>
                    <div class="col-lg-3 col-md-1">
                    <a href="#" class="btn btn-success btn-block" data-toggle="modal" data-target="#addCategoryModal">
                        <i class="fas fa-plus"></i> Add Category
                    </a>
                    </div>

                </div>
                </div>
            </section>

            <!-- POSTS -->
            <section id="posts">
                <div class="container offset-md-2 ">
                <div class="row text-center">
                    <div class="col-lg-3 col-md-1">
                        <div class="card text-center bg-warning text-white mb-3">
                            <div class="card-body">
                                <h3>Users</h3>
                                <h4 class="display-4">
                                    <i class="fas fa-users"></i> 4
                                </h4>
                                <a href="users.html" class="btn btn-outline-light btn-sm">View</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-1">
                        <div class="card text-center bg-primary text-white mb-3">
                            <div class="card-body">
                                <h3>Products</h3>
                                <h4 class="display-4">
                                    <i class="fas fa-pencil-alt"></i> 6
                                </h4>
                                <a href="posts.html" class="btn btn-outline-light btn-sm">View</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-1">
                        <div class="card text-center bg-success text-white mb-3">
                            <div class="card-body">
                                <h3>Categories</h3>
                                <h4 class="display-4">
                                    <i class="fas fa-folder"></i> 4
                                </h4>
                                <a href="categories.html" class="btn btn-outline-light btn-sm">View</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>   
    </div>
</template>