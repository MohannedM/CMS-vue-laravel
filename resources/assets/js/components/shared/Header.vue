<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
                <a href="/" class="navbar-brand font-weight-bold">Ecommerce</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link">Explore</a>
                    </li>
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
                    
                    <template v-if="!islogged">
        
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/register">Register</a>
                        </li>
                            
            
                    </template>
                
                <template v-else>
                
                    <li class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            Name <span class="caret"></span>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/logout"
                                onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();">
                                Logout
                            </a>

                            <form id="logout-form" action="/logout" method="POST" style="display: none;">
                                
                            </form>
                        </div>
                    </li>

                    
                </template>
              
                    <li class="nav-item ml-3">
                        <a href="" class="nav-link"><i class="fas fa-shopping-cart"></i></a>
                    </li>
                </ul>

                </div>
            </div>
        </nav>   
    </div>
</template>

<script>
export default {
    data(){
        return{
            islogged: false
        }
    }
}
</script>