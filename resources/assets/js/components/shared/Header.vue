<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
                <a href="#" class="navbar-brand font-weight-bold">Ecommerce</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <router-link tag="li" to="/" class="nav-item">
                        <a class="nav-link">Explore</a>
                    </router-link>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="themes">Products <span class="caret"></span></a>
                    <div class="dropdown-menu" aria-labelledby="themes">
                        <a class="dropdown-item" href="../default/">Electronics</a>
                        <!-- <div class="dropdown-divider"></div> -->
                        <a class="dropdown-item" href="../cerulean/">Groceiers</a>
                        <a class="dropdown-item" href="../cosmo/">Books</a>
                    </div>
                    </li>
                </ul>

                <ul class="nav navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    
                    <template v-if="!isLogged">
        
                        <router-link tag="li" to="/login" class="nav-item">
                            <a class="nav-link">Login</a>
                        </router-link>
                        <router-link tag="li" to="/register" class="nav-item">
                            <a class="nav-link">Register</a>
                        </router-link>
                            
            
                    </template>
                
                <template v-else>

                    <li class="nav-item">
                        <a class="nav-link">{{user.name}}</a>
                    </li>
                

                    <li class="nav-item" @click="logout">
                            <a href="#" class="nav-link">Logout</a>
                    </li>
                    <router-link to="/admin" tag="li" v-if="isUserAdmin" class="nav-item" @click="logout">
                        <a href="#" class="nav-link">Admin</a>
                    </router-link>

                </template>
              
                    <li class="nav-item ml-5" v-if="!isLogged || user.role == 'customer'">
                        <a href="" class="nav-link"><i class="fas fa-shopping-cart"></i></a>
                    </li>
                    <li class="nav-item ml-5" v-else-if="user.role == 'seller'">
                        <a href="" class="nav-link"><i class="fas fa-plus-square"></i> Products</a>
                    </li>
                </ul>

                </div>
            </div>
        </nav>   
    </div>
</template>

<script>
export default {
    computed:{
        isLogged(){
            return this.$store.getters.isLoggedIn;
        },
        user(){
            return this.$store.getters.userData;
        },
        isUserAdmin(){
            return this.$store.getters.isAdmin; 
        }
    },
    methods:{
        logout(){
            this.$store.dispatch('logoutUser');
            this.$router.push('/');
        }
    }

}
</script>