<template>
    <div>
                <!-- HEADER -->
        <header id="main-header" class="mt-n4 bg-primary text-white">
            <div class="container">
            <div class="row">
                <div class="col-md-6">
                <h1>
                    <i class="fas fa-cog"></i> Dashboard</h1>
                </div>
            </div>
            </div>
        </header>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-0">
        <div class="container">
            <a href="index.html" class="navbar-brand">Ecommerce</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav">
                <router-link tag="li" to="/admin" class="nav-item px-2">
                    <a href="" class="nav-link active">Dashboard</a>
                </router-link>
                <router-link tag="li" to="/admin-users" class="nav-item px-2">
                    <a href="" class="nav-link">Users</a>
                </router-link>
                <router-link tag="li" to="/admin-products" class="nav-item px-2">
                    <a href="" class="nav-link">Products</a>
                </router-link>
                <router-link tag="li" to="/admin-categories" class="nav-item px-2">
                    <a href="" class="nav-link">Categories</a>
                </router-link>

                </ul>

                <ul class="navbar-nav ml-auto">
                </ul>
            </div>
            </div>
        </nav>   
    </div>
</template>