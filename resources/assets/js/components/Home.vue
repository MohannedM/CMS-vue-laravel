<template>
    <div class="container">
        <h1>Ecommerce</h1>
        <div class="row">
            <div class="col-md-4 col-sm-1 mb-3" v-for="product in products">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" :src="'/images/' + product.image" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{product.name}}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price: ${{(product.price).toLocaleString()}}</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">View Product</a>
                        <a href="#" class="card-link">Add To Cart</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {

        computed: {
            products(){
                return this.$store.getters.getProducts;
            }
        }
    }
</script>
